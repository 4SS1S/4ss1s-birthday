import React, { useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { MdDone } from 'react-icons/md'
import { VscError } from 'react-icons/vsc'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { LoadingContext } from '@/store/loading'
import { DialogBox } from '@/components'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'
import { prisma } from '../lib'

const ConfirmPresence = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const session = props.data as Session

	const router = useRouter()

	const { setLoading } = useContext(LoadingContext)

	const handleCancel = () => {
		setLoading(true)

		axios
			.post('/api/event-confirmation', {
				userId: props.user.id,
				accepted: false,
			})
			.then(e => {
				setLoading(false)
				router.push('/cancel')
			})
			.catch(err => {
				// TODO: create error page
				console.log(err)
				setLoading(false)
			})
	}

	const handleConfirm = () => {
		axios
			.post('/api/event-confirmation', {
				userId: props.user.id,
				accepted: true,
			})
			.then(e => {
				router.push('/home')
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
		<div className="flex w-screen justify-center flex-col items-center">
			{/* <div className="overflow-hidden rounded-full shadow-lg">
        <img src={session.user?.image || ''} alt={session.user?.name || ''} />
      </div> */}
			<div className="mt-4">
				<DialogBox>
					<strong className="tracking-wide">
						Você {session.user?.name}, confirma presença no dia{' '}
						{props.event.date}/{props.event.month} (sexta-feira) às{' '}
						{props.event.time}:{props.event.minutes}h no {props.event.location}?
					</strong>

					<div className="font-thin mt-6 mb-1">
						Ao confirmar estar no local, você estará aceitando também:
					</div>
					<ul className="font-light space-y-2">
						<li className="flex space-x-1">
							<span className="text-green-500 font-semibold text-2xl">
								<MdDone />
							</span>{' '}
							<span>Boa Comida</span>
						</li>
						<li className="flex space-x-1">
							<span className="text-green-500 font-semibold text-2xl">
								<MdDone />
							</span>{' '}
							<span>Ótimas cervejas</span>
						</li>
						<li className="flex space-x-1">
							<span className="text-green-500 font-semibold text-2xl">
								<MdDone />
							</span>{' '}
							<span>Ambiente agradável e descontraido</span>
						</li>
						<li className="flex space-x-1">
							<span className="text-green-500 font-semibold text-2xl">
								<MdDone />
							</span>{' '}
							<span>Sua presença é um grande presente ❤️</span>
						</li>
						<li className="flex space-x-2 items-center">
							<span className="text-red-500 font-semibold text-xl">
								<VscError />
							</span>{' '}
							<span>Não precisa levar presente</span>
						</li>
						<li className="flex space-x-2 items-center">
							<span className="text-red-500 font-semibold text-xl">
								<VscError />
							</span>{' '}
							<span>Não precisa gastar no local</span>
						</li>
					</ul>

					<div className="relative mt-6 h-7 overflow-hidden" />

					<div className="w-full flex mt-5 left-0 absolute bottom-0 overflow-hidden">
						<div className="absolute top-0 w-screen -left-12 h-px bg-gray-300 bg-opacity-50" />
						<button
							className="w-full border-r-2 border-opacity-50 border-gray-300 p-4 font-light"
							onClick={handleCancel}
						>
							Cancelar
						</button>
						<button className="w-full p-4 font-medium" onClick={handleConfirm}>
							Confirmar
						</button>
					</div>
				</DialogBox>
			</div>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async ctx => {
	const session = await getSession(ctx)

	const event = await prisma.event?.findFirst()
	const user = await prisma.user?.findUnique({
		where: {
			email: session?.user?.email || '',
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

	// if (!event) {
	//   event = {
	//     id: 0,
	//     title: '',
	//     description: '',
	//     location: '4Beer Zona Sul',
	//     end: new Date(),
	//     start: new Date('2021-10-01:16:00:00'),
	//     createdAt: new Date(),
	//     updatedAt: new Date(),
	//     latitude: 0,
	//     longitude: 0,
	//   }
	// }

	return {
		props: {
			data: session,
			user: {
				id: user?.id || 0,
			},
			event: {
				location: event?.location,
				date: `${new Date(event?.start as Date).getDate()}`,
				month: `${new Date(event?.start as Date).getMonth() + 1}`,
				time: `${new Date(event?.start as Date).getHours() + 3}`,
				minutes: `${new Date(event?.start as Date).getMinutes()}`,
			},
		},
	}
}

export default ConfirmPresence
