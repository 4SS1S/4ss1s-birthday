import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import prisma from '@/lib/prisma'

/**
 *
 * @class EventConfirmation
 * @description This class is used to handle the event confirmation
 * @exports EventConfirmation
 * @author Assis Duarte <assisguitar23@gmail.com>
 * @license MIT
 * @version 0.0.1
 * @since 0.0.1
 * @example
 * import { EventConfirmation } from '@/classes/event-confirmation'
 *
 * const eventConfirmation = new EventConfirmation(req, res)
 * eventConfirmation.create()
 */
export class EventConfirmationObject {
  private req: NextApiRequest
  private res: NextApiResponse

  /**
   *
   * @param {NextApiRequest} req
   * @param {NextApiResponse} res
   */
  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req
    this.res = res
  }

  /**
   *
   * @description Get a list of user confirmation
   * @returns {Promise<void>}
   * @memberof EventConfirmationObject
   * @method get
   * @example
   * await eventConfirmation.get()
   */
  async list() {
    const data = await prisma.userConfirmation.findMany()

    this.res.status(200).json({
      status: data,
    })
  }

  /**
   *
   * @description Create a user confirmation
   * @returns {Promise<void>}
   * @memberof EventConfirmationObject
   * @method create
   * @example
   * await eventConfirmation.create()
   */
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

  /**
   *
   * @description Update a user confirmation
   * @returns {Promise<void>}
   * @memberof EventConfirmationObject
   * @method update
   * @example
   * await eventConfirmation.update()
   */
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

  /**
   *
   * @description Delete a user confirmation
   * @returns {Promise<void>}
   * @memberof EventConfirmationObject
   * @method delete
   * @example
   * await eventConfirmation.delete()
   */
  async delete() {
    const session = await getSession({ req: this.req })
    const { userId } = this.req.query

    if (typeof userId !== 'string') {
      this.res.status(400).json({
        message: 'User id is required',
      })
    }

    await prisma.userConfirmation.deleteMany({
      where: {
        userId: parseInt(userId as string),
      },
    })

    this.res.status(200).json({
      status: 'success',
    })
  }
}
