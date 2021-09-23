import { NextApiRequest, NextApiResponse } from 'next'

import { PostObject } from '@/classes'

export default async function Post(req: NextApiRequest, res: NextApiResponse) {
	const postObject = new PostObject(req, res)

	if (req.method === 'GET') {
		await postObject.list()
	}
}
