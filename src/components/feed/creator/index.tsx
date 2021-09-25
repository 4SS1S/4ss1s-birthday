import React, { useContext } from 'react'

import axios from '@/lib/axios'
import { FeedContext } from '../store/feedWrapper'

export const PostCreator = () => {
	const [content, setContent] = React.useState('')

	const { setIsLoading, setLoadingCount, setPosts, posts, user } =
		useContext(FeedContext)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setLoadingCount(1)
		setIsLoading(true)

		axios
			.post('/post', { content })
			.then(({ data }) => {
				setContent('')

				setLoadingCount(0)
				setIsLoading(false)

				const newPost: FeedPostProps = {
					id: data.id,
					content,
					createdAt: data.createdAt,
					user: {
						name: user.user?.name,
						image: user.user?.image,
					},
				}

				setPosts([newPost, ...posts])
			})
			.catch(err => {
				console.log(err)
			})
	}

	const buttonDisabledClassName =
		'bg-purple-300 text-gray-200 cursor-not-allowed'
	const buttonEnabledClassName = 'bg-purple-500 text-white'

	return (
		<div className="mt-8">
			<form action="#" onSubmit={handleSubmit} method="post">
				<textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					className="w-full text-gray-700 border-none resize-none p-2 outline-none rounded"
				/>
				<div className="w-full flex justify-end">
					<button
						disabled={content === ''}
						className={`${
							content === '' ? buttonDisabledClassName : buttonEnabledClassName
						} p-4 pt-2 pb-2 rounded`}
					>
						Publicar
					</button>
				</div>
			</form>
		</div>
	)
}
