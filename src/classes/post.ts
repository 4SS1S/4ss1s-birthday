import { BirthdayObject } from './birthday-object'

export class PostObject extends BirthdayObject {
	async list() {
		const data = await this.getPrisma().post.findMany()

		return this.getRes().status(200).json(data)
	}

	async create() {
		const user = await this.getUserInfo()

		if (!user) {
			return this.getRes().status(401).json({
				status: 'error',
				message: 'Unauthorized',
			})
		}

		const body = this.getBody()

		if (!body.title || !body.content) {
			return this.getRes().status(400).json({
				status: 'error',
				message: 'Bad Request',
			})
		}

		const data = await this.getPrisma().post.create({
			data: {
				title: body.title,
				content: body.content,
				user: {
					connect: {
						id: user.id,
					},
				},
			},
		})

		return this.getRes().status(201).json(data)
	}

	async read() {
		const post = this.getBody().id

		if (!post) {
			return this.getRes().status(400).json({
				status: 'error',
				message: 'Bad Request',
			})
		}

		const data = await this.getPrisma().post.findUnique({
			where: {
				id: post,
			},
			include: {
				Comment: true,
			},
		})

		return this.getRes().status(200).json(data)
	}

	async update() {
		const user = await this.getUserInfo()
		const post = this.getBody().id

		if (!post) {
			return this.getRes().status(400).json({
				status: 'error',
				message: 'Bad Request',
			})
		}

		if (!user) {
			return this.getRes().status(401).json({
				status: 'error',
				message: 'Unauthorized',
			})
		}

		if (!this.verifyUser(user.id, post)) {
			return this.getRes().status(403).json({
				status: 'error',
				message: 'Forbidden',
			})
		}

		const data = await this.getPrisma().post.update({
			where: {
				id: post,
			},
			data: {
				title: this.getBody().title,
				content: this.getBody().content,
			},
		})

		return this.getRes().status(200).json(data)
	}

	async delete() {
		const user = await this.getUserInfo()
		const post = this.getBody().id

		if (!user) {
			return this.getRes().status(401).json({
				status: 'error',
				message: 'Unauthorized',
			})
		}

		if (!this.verifyUser(user.id, post)) {
			return this.getRes().status(403).json({
				status: 'error',
				message: 'Forbidden',
			})
		}

		const data = await this.getPrisma().post.delete({
			where: {
				id: post,
			},
		})

		return this.getRes().status(200).json(data)
	}

	private async verifyUser(user: number, post: number) {
		const verify = await this.getPrisma().post.findUnique({
			where: {
				id: post,
			},
		})

		if (verify?.userId !== user) {
			return false
		}

		return true
	}
}
