import React, { useState, useEffect } from 'react'

import axios from '@/lib/axios'
import { Post } from '.prisma/client'
import { dateDiff } from '../../../functions'

export const PostShow = () => {
	const [posts, setPosts] = useState<Post[] | any[]>([])

	useEffect(() => {
		axios.get('/post').then(res => {
			setPosts(res.data)
		})
	}, [])

	return (
		<div className="w-full pl-16 pr-16 mt-8 space-y-8">
			{posts.map(post => (
				<div key={post.id}>
					<div className="flex space-x-4 items-center">
						<img
							src={post.user.image}
							alt=""
							className="rounded-lg"
							width="60"
							height="60"
						/>
						<div className="flex flex-col">
							<span>
								<span className="font-semibold">{post.user.name}</span>{' '}
								comentou:
							</span>
							<div>{post.content}</div>
							<div className="font-thin text-sm">
								publicado a {dateDiff(new Date(post.createdAt), new Date())}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
