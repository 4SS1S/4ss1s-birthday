import React, { useState, useEffect } from 'react'

import axios from '@/lib/axios'
import { Post } from '.prisma/client'

export const PostShow = () => {
	const [posts, setPosts] = useState<Post[] | any[]>([])

	useEffect(() => {
		axios.get('/post').then(res => {
			setPosts(res.data)
		})
	}, [])

	return (
		<div>
			{posts.map(post => (
				<div key={post.id}>
					<div>
						<img src={post.user.image} alt="" />
						{post.user.name} comentou:
					</div>
					{post.content}
				</div>
			))}
		</div>
	)
}
