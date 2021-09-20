import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export class EventConfirmationObject {
  private req: NextApiRequest
  private res: NextApiResponse

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req
    this.res = res
  }

  async list() {
    const data = await prisma.userConfirmation.findMany()

    this.res.status(200).json({
      status: data,
    })
  }

  async create() {
    const { accepted, userId } = this.req.body

    const hasDoneBefore = await prisma.userConfirmation?.findMany({
      where: {
        userId,
      },
    })

    if (hasDoneBefore && Object.keys(hasDoneBefore).length > 0) {
      this.update()
    }

    try {
      const data = await prisma.userConfirmation.create({
        data: {
          accepted,
          userId,
        },
      })

      this.res.status(200).json(data)
    } catch (err) {
      this.res.status(500).json(err)
    }
  }

  async update() {
    const { accepted, userId } = this.req.body

    const hasDoneBefore = await prisma.userConfirmation?.findMany({
      where: {
        userId,
      },
    })

    if (hasDoneBefore && Object.keys(hasDoneBefore).length > 0) {
      try {
        const data = await prisma.userConfirmation.update({
          data: {
            accepted,
          },
          where: {
            id: hasDoneBefore[hasDoneBefore.length - 1].id,
          },
        })

        this.res.status(200).json(data)
      } catch (err) {
        this.res.status(500).json(err)
      }
    }
  }

  delete() {
    //
  }
}
