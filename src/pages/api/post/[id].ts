import { NextApiRequest, NextApiResponse } from 'next'

import { PostObject } from '@/classes'

export default async function Post(req: NextApiRequest, res: NextApiResponse) {
	const postObject = new PostObject(req, res)

	if (req.method === 'GET') {
		await postObject.read()
	}

	if (req.method === 'PUT') {
		await postObject.update()
	}

	if (req.method === 'DELETE') {
		await postObject.delete()
	}
}
