import { BirthdayObject } from './birthday-object'

export class BugReportObject extends BirthdayObject {
	async list() {
		const bugs = await this.getPrisma().bugReport.findMany()

		return this.getRes().status(200).json({
			bugs,
		})
	}

	async create() {
		const user = await this.getUserInfo()

		if (!user) {
			return this.getRes().status(401).json({
				error: 'Unauthorized',
			})
		}

		const bugReport = await this.getPrisma().bugReport.create({
			data: {
				userId: user.id,
				...this.getBody(),
			},
		})

		return this.getRes().status(200).json({
			bugReport,
		})
	}

	async update() {
		const user = await this.getUserInfo()

		if (!user) {
			return this.getRes().status(401).json({
				error: 'Unauthorized',
			})
		}

		const bugReport = await this.getPrisma().bugReport.update({
			where: {
				id: parseInt(this.getParams().id as string),
			},
			data: {
				...this.getBody(),
			},
		})

		return this.getRes().status(200).json({
			bugReport,
		})
	}

	async delete() {
		const user = await this.getUserInfo()

		if (!user) {
			return this.getRes().status(401).json({
				error: 'Unauthorized',
			})
		}

		const bugReport = await this.getPrisma().bugReport.delete({
			where: {
				id: parseInt(this.getParams().id as string),
			},
		})

		return this.getRes().status(200).json({
			bugReport,
		})
	}
}
