import React from 'react'

import axios from '@/lib/axios'

export const PostCreator = () => {
	const [content, setContent] = React.useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		axios
			.post('/post', { title: 'ok', content })
			.then(() => {
				setContent('')
			})
			.catch(err => {
				console.log(err)
			})
	}

	const buttonDisabledClassName =
		'bg-purple-300 text-gray-200 cursor-not-allowed'
	const buttonEnabledClassName = 'bg-purple-500 text-white'

	return (
		<div className="m-8">
			<form action="#" onSubmit={handleSubmit} method="post">
				<textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					className="w-full text-gray-700 border-none resize-none p-2 outline-none rounded"
				/>
				<button
					disabled={content === ''}
					className={`${
						content === '' ? buttonDisabledClassName : buttonEnabledClassName
					} p-4 pt-2 pb-2 rounded`}
				>
					Publicar
				</button>
			</form>
		</div>
	)
}
