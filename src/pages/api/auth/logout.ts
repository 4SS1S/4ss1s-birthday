import { NextApiRequest, NextApiResponse } from 'next'
import serialize from 'serialize-javascript'

export default async function Logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    if (req.cookies['next-auth.session-token']) {
      res.setHeader('Set-Cookie', [
        serialize('token', '', {
          path: '/',
          expires: new Date(0),
        }),
      ])

      res.writeHead(302, { Location: '/' })
    } else {
      res.status(200).json({
        message: 'No token to logout',
      })
    }
  } else {
    res.status(200).json({
      message: 'Logout not allowed',
    })
  }
}
