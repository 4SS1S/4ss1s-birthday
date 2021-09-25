import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import prisma from '@/lib/prisma'

interface UserProps {
	id: number
	name: string
	image: string
	accepted: boolean
}

interface EventProps {
	id: number
	event: {
		id: number
		title: string
		description: string
		date: string
	}
	users: UserProps[]
}

const Event = ({ id, event, users }: EventProps) => {
	useEffect(() => {
		console.log(users)
	}, [])

	return (
		<div>
			<div className="text-center">
				<h1 className="text-3xl font-semibold font-mono">
					Sobre o evento no {event.title}
				</h1>
			</div>
			{/* <div className="flex flex-col items-center">
				<div className="flex flex-col items-center">
					<img
						// src={event.image}
						alt={event.title}
						className="rounded-full h-32 w-32"
					/>
					<h1 className="text-3xl font-semibold font-mono">{event.title}</h1>
				</div>
				<p className="text-xl">{event.description}</p>
			</div> */}
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-semibold font-mono">Participantes</h1>
				<div className="flex flex-wrap items-center">
					{users
						.filter(i => i.accepted === true)
						.map(user => (
							<div key={user.id} className="flex flex-col items-center">
								<img
									src={user.image}
									alt={user.name}
									className="rounded-full h-12 w-12"
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	const id = context.params?.id

	const event = await prisma.event.findUnique({
		where: {
			id: parseInt(id as string),
		},
	})

	const users = await prisma.userConfirmation.findMany({
		include: {
			user: {
				select: {
					name: true,
					image: true,
				},
			},
		},
	})

	if (!event) {
		return {
			props: {
				event: null,
			},
		}
	}

	if (!users) {
		return {
			props: {
				event: null,
			},
		}
	}

	return {
		props: {
			id,
			event: {
				id: event.id,
				title: event.title,
				description: event.description,
				date: new Date(event.start).toTimeString(),
			},
			users: users.map(user => ({
				id: user.id,
				name: user.user.name,
				image: user.user.image,
				accepted: user.accepted,
			})),
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: '1' } }],
		fallback: false,
	}
}

export default Event
