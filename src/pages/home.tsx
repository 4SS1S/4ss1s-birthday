import React, { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import OneSignal from 'react-onesignal'

import {
	ProfilePicture,
	DialogBox,
	PostCreator,
	PostShow,
	Wrapper,
} from '@/components'
import { prisma } from '../lib'

interface HomeProps {
	session: Session
	event: {
		location: string
		date: string
		month: string
		time: string
		minutes: string
	}
	confirmedUsers
}

// eslint-disable-next-line prettier/prettier
const Home = ({ session, event,confirmedUsers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [initialized, setInitialized] = useState(false)

	useEffect(() => {
		OneSignal.init({
			appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID || 'f8f8f8f8f',
			promptOptions: {
				actionMessage: 'Receber notificações',
				acceptButtonText: 'Aceitar',
				cancelButtonText: 'Cancelar',
			},
		}).then(() => {
			OneSignal.showSlidedownPrompt().then(() => {
				console.log('ok')
				setInitialized(true)
			})
		})

		OneSignal.showHttpPrompt()
	}, [])

	return (
		<Wrapper>
			<div className="mt-12">
				<DialogBox>
					<div
						className="absolute -top-0"
						style={{ left: '50%', transform: 'translate(-50%,-50%)' }}
					>
						<ProfilePicture user={session.user as Session} />
					</div>
					<div className="mt-12">
						Olá {session.user?.name || ''} você está confirmado no dia{' '}
						{event.date}/{event.month} às {event.time}:{event.minutes} em{' '}
						{event.location}. Aqui tem um link para o{' '}
						<a
							className="underline text-blue-500"
							href="https://www.google.com/maps/place/4Beer+Zona+Sul+-+Cerveja+e+Cultura/@-30.1068587,-51.2541419,15z/data=!4m5!3m4!1s0x0:0x892df2b5eec7b711!8m2!3d-30.1068587!4d-51.2541419"
						>
							Google Maps
						</a>{' '}
						e um link{' '}
						<a
							className="underline text-blue-500"
							href="https://loja.4beerpoa.com.br/"
						>
							oficial do estabelicimento
						</a>
						. Caso queira também pode ligar para o telefone{' '}
						<a
							className="underline text-blue-500"
							href="tel:+55(51) 3377-4024"
							type="tel"
						>
							3377-4024
						</a>
						.<p>Até agora são {confirmedUsers} pessoas confirmadas!!!</p>
					</div>
				</DialogBox>

				{/* <PostCreator /> */}
				<PostShow />
			</div>
		</Wrapper>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	const session = await getSession(context)

	const event = await prisma.event?.findFirst()

	const users = await prisma.userConfirmation.findMany({
		where: {
			accepted: true,
		},
	})

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: {
			session,
			event: {
				location: event?.location,
				date: `${new Date(event?.start as Date).getDate()}`,
				month: `${new Date(event?.start as Date).getMonth() + 1}`,
				time: `${new Date(event?.start as Date).getHours()}`,
				minutes: `${new Date(event?.start as Date).getMinutes()}`,
			},
			confirmedUsers: users.length - 1,
		},
	}
}

export default Home
