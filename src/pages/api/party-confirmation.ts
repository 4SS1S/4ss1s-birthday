import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async function PartyConfirmation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await prisma.userAccept.findMany()

    res.status(200).json({
      status: data,
    })
  }

  if (req.method === 'POST') {
    res.status(200).json({
      message: 'Thank you for your submission!',
    })
  }

  if (req.method === 'PUT') {
    res.status(200).json({
      message: 'Thank you for your submission!',
    })
  }

  if (req.method === 'DELETE') {
    res.status(200).json({
      message: 'Thank you for your submission!',
    })
  }
}
