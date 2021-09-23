import { NextApiRequest, NextApiResponse } from 'next'

import { BugReportObject } from '@/classes'

export default async function BugReport(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const bugObject = new BugReportObject(req, res)

	if (req.method === 'GET') {
		bugObject.list()
	}

	if (req.method === 'POST') {
		bugObject.create()
	}

	if (req.method === 'PUT') {
		bugObject.update()
	}

	if (req.method === 'DELETE') {
		bugObject.delete()
	}
}
