import { NextApiRequest, NextApiResponse } from 'next'

import { EventConfirmationObject } from '../../classes'

export default async function EventConfirmation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const eoc = new EventConfirmationObject(req, res)

  if (req.method === 'GET') {
    eoc.list()
  }

  if (req.method === 'POST') {
    eoc.create()
  }

  if (req.method === 'PUT') {
    eoc.update()
  }

  if (req.method === 'DELETE') {
    eoc.delete()
  }
}
