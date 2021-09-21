import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const events = await prisma.event.findMany({})
    res.status(200).json(events)
  }

  if (req.method === 'POST') {
    const data = req.body
    const event = await prisma.event.create({
      data,
    })

    res.status(200).json(event)
  }

  if (req.method === 'DELETE') {
    const { id } = req.query
    const event = await prisma.event.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(event)
  }
}
