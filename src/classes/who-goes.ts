import { BirthdayObject } from './birthday-object'

export class WhoGoes extends BirthdayObject {
	async list() {
		const data = await this.getPrisma().userConfirmation.findMany({
			orderBy: {
				accepted: 'desc',
			},
			include: {
				user: {
					select: {
						name: true,
						image: true,
					},
				},
			},
		})

		return this.getRes().status(200).json(data)
	}
}
