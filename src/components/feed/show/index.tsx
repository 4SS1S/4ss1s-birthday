import React, { useContext, useState, useEffect } from 'react'

import axios from '@/lib/axios'
import { dateDiff } from '../../../functions'
import { FeedContext } from '../store/feedWrapper'

export const PostShow = () => {
	const { posts, setPosts, setIsLoading } = useContext(FeedContext)

	useEffect(() => {
		axios
			.get('/post')
			.then(res => {
				setPosts(res.data)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		<div className="w-full mt-8 space-y-2">
			{posts.map(post => (
				<div key={post.id}>
					<div className="flex flex-col space-y-4 mt-2 bg-gray-200 text-gray-900 bg-opacity-90 p-4 rounded-md shadow-2xl">
						<div className="flex items-center">
							<div className="flex flex-col justify-center items-center">
								<img
									src={post.user.image}
									alt=""
									className="rounded-full mr-2"
									width="50"
									height="50"
								/>
							</div>
							<div className="flex font-light space-y-2">
								<span className="font-normal">{post.user.name} </span>
								<span>&nbsp;&nbsp;</span>publicou:
							</div>
						</div>
						<div>{post.content}</div>
						<div className="font-extralight text-sm">
							a {dateDiff(new Date(post.createdAt), new Date())}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
