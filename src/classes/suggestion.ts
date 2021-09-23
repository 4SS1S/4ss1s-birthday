import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import prisma from '@/lib/prisma'

export class SuggestionObject {
	private req: NextApiRequest
	private res: NextApiResponse

	constructor(req: NextApiRequest, res: NextApiResponse) {
		this.req = req
		this.res = res
	}

	async list() {
		const suggestions = await prisma.suggestion.findMany()

		return this.res.status(200).json({
			suggestions,
		})
	}

	async create() {
		const session = await getSession({ req: this.req })

		if (!session?.user) {
			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		const user = await prisma.user.findUnique({
			where: {
				email: session.user.email as string,
			},
		})

		if (!user) {
			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		const suggestion = await prisma.suggestion.create({
			data: {
				userId: user.id as number,
				content: this.req.body.content,
				title: this.req.body.title,
				upvotes: 0,
			},
		})

		return this.res.status(200).json({
			message: 'Suggestion created',
			suggestion,
		})
	}

	async update() {
		const session = await getSession({ req: this.req })

		if (!session?.user) {
			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		const user = await prisma.user.findUnique({
			where: {
				email: session.user.email as string,
			},
		})

		if (!user) {
			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		const suggestion = await prisma.suggestion.update({
			where: {
				id: parseInt(this.req.query.id as string),
			},
			data: {
				content: this.req.body.content,
				title: this.req.body.title,
			},
		})
	}

	async delete() {
		const session = await getSession({ req: this.req })

		if (!session?.user) {
			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		const user = await prisma.user.findUnique({
			where: {
				email: session.user.email as string,
			},
		})

		if (!user) {
			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		const suggestion = await prisma.suggestion.delete({
			where: {
				id: parseInt(this.req.query.id as string),
			},
		})

		return this.res.status(200).json({
			message: 'Suggestion deleted',
			suggestion,
		})
	}
}
