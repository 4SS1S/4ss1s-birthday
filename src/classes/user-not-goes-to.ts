import { BirthdayObject } from './birthday-object'

export class UserNotGoesToObject extends BirthdayObject {
	async list() {
		const data = await this.getPrisma().userNotGoesTo.findMany()

		return this.getRes().status(200).json({
			data,
		})
	}

	async create() {
		const user = await this.getUserInfo()
		const body = this.getBody()

		if (!user) {
			return this.getRes().status(401).json({
				error: 'Unauthorized',
			})
		}

		const data = await this.getPrisma().userNotGoesTo.create({
			data: {
				user: {
					connect: {
						id: user.id,
					},
				},
				...body,
			},
		})

		return this.getRes().status(200).json({
			data,
		})
	}
}
