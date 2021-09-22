import { NextApiRequest, NextApiResponse } from 'next'

import { SuggestionObject } from '@/classes'

export default async function Suggestion(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const suggestion = new SuggestionObject(req, res)

	if (req.method === 'GET') {
		suggestion.list()
	}

	if (req.method === 'POST') {
		suggestion.create()
	}

	if (req.method === 'PUT') {
		suggestion.update()
	}

	if (req.method === 'DELETE') {
		suggestion.delete()
	}
}
