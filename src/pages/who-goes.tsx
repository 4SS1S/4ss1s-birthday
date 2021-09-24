import React from 'react'
import { MdDone } from 'react-icons/md'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { VscError } from 'react-icons/vsc'

import prisma from '@/lib/prisma'
import { Wrapper } from '@/components'

interface DataProps {
	accepted: boolean
	user: {
		name: string
		image: string
	}
}

interface WhoGoesProps {
	data: DataProps[]
}

const WhoGoes = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	return (
		<Wrapper>
			<div className="w-full block text-center font-bold text-2xl mb-8 mt-8">
				<h1>Lista de presença</h1>
			</div>
			<div className="w-full flex justify-center space-y-4 flex-col pl-16">
				{props.data.map(item => (
					<div
						key={item.user.name}
						className="flex items-center space-x-4 w-full"
					>
						<img
							src={item.user.image}
							alt={item.user.name}
							width="60"
							className="rounded-full"
						/>
						<div>
							<span className="flex items-center text-lg font-semibold space-x-2">
								{item.accepted ? (
									<MdDone className="text-green-500" />
								) : (
									<VscError className="text-red-500" />
								)}
								{item.user.name}{' '}
								<p className="font-light">
									{item.accepted ? ' vai estar' : ' não vai'}
								</p>
							</span>
						</div>
					</div>
				))}
			</div>
		</Wrapper>
	)
}

export default WhoGoes

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await prisma.userConfirmation.findMany({
		select: {
			accepted: true,
			user: {
				select: {
					name: true,
					image: true,
				},
			},
		},
		orderBy: {
			accepted: 'desc',
		},
	})

	return {
		props: {
			data,
		},
	}
}
