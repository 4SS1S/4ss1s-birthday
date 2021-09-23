import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import prisma from '@/lib/prisma'

export class BirthdayObject {
	private req: NextApiRequest
	private res: NextApiResponse

	constructor(req: NextApiRequest, res: NextApiResponse) {
		this.req = req
		this.res = res
	}

	protected getReq() {
		return this.req
	}

	protected getRes() {
		return this.res
	}

	protected getPrisma() {
		return prisma
	}

	protected getBody() {
		return this.req.body
	}

	protected getParams() {
		return this.req.query
	}

	protected async getUserInfo() {
		const session = await getSession({ req: this.req })

		if (!session?.user) {
			throw new Error('User not found')

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
			throw new Error('User not found')

			return this.res.status(401).json({
				message: 'You must be logged in to perform this action',
			})
		}

		return user
	}
}
