import React, { useState } from 'react'
import { Session } from 'next-auth'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineHome,
	AiOutlineEdit,
	AiOutlineLink,
	AiOutlineSetting,
	AiOutlineLogout,
	AiOutlineBug,
	AiOutlineUser,
} from 'react-icons/ai'

import { ProfilePicture } from '..'
import { version } from 'src/../package.json'

export const SidebarMenu = () => {
	const [visible, setVisible] = useState(false)

	const router = useRouter()

	const session = useSession()

	if (!session) {
		return null
	}

	const variants = {
		open: {
			opacity: 1,
			left: 0,
			transition: {
				duration: 0.5,
			},
		},
		closed: {
			opacity: 0,
			left: -600,
			transition: {
				duration: 0.5,
			},
		},
	}

	const bgVariants = {
		open: {
			opacity: 0.5,
			transition: {
				duration: 0.5,
			},
		},
		closed: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	const handleClick = (route: string) => {
		setVisible(false)

		router.push(route)
	}

	return (
		<div>
			<div className="relative">
				<span className="text-xl z-30 absolute top-5 left-0">
					{visible ? (
						<AiOutlineClose onClick={() => setVisible(false)} />
					) : (
						<AiOutlineMenu onClick={() => setVisible(true)} />
					)}
				</span>
			</div>

			{visible && (
				<motion.div
					className="absolute left-0 top-0 w-full h-full bg-gray-900 bg-opacity-100 backdrop-filter backdrop-blur-md z-10"
					variants={bgVariants}
					initial="closed"
					animate="open"
					exit="closed"
					onClick={() => setVisible(false)}
				/>
			)}

			<motion.aside
				className="absolute h-full w-full sm:w-80 bg-gray-700 top-0 left-0 flex justify-center z-20 pb-5"
				animate={visible ? 'open' : 'closed'}
				initial="closed"
				variants={variants}
			>
				<div className="flex flex-col justify-between text-center w-full">
					<div className="flex justify-center items-center w-full mt-12 sm:mt-24 flex-col">
						<ProfilePicture user={session[0]?.user as Session} />

						<span className="mt-4 text-xl font-medium">
							{session[0]?.user?.name || ''}
						</span>
					</div>
					<ul className="mt-4">
						<li
							className="border-b-2 p-4 border-opacity-25 flex items-center cursor-pointer hover:bg-gray-900"
							onClick={() => handleClick('/home')}
						>
							<span>
								<AiOutlineHome className="text-xl" />
							</span>
							<span className="ml-8">Home</span>
						</li>

						{/* <li
							className="border-b-2 p-4 border-opacity-25 flex items-center cursor-pointer hover:bg-gray-900"
							onClick={() => handleClick('/suggestions')}
						>
							<span>
								<AiOutlineEdit className="text-xl" />
							</span>
							<span className="ml-8">Dicas e sujest??es</span>
						</li> */}

						<li
							className="border-b-2 p-4 border-opacity-25 flex items-center cursor-pointer hover:bg-gray-900"
							onClick={() => handleClick('/change-mind')}
						>
							<span>
								<AiOutlineLink className="text-xl" />
							</span>
							<span className="ml-8">Mudar de ideia</span>
						</li>

						{/* <li
							className="border-b-2 p-4 border-opacity-25 flex items-center cursor-pointer hover:bg-gray-900"
							onClick={() => handleClick('/bug-report')}
						>
							<span>
								<AiOutlineBug className="text-xl" />
							</span>
							<span className="ml-8">Achou algum bug?</span>
						</li> */}

						<li
							className="border-b-2 p-4 border-opacity-25 flex items-center cursor-pointer hover:bg-gray-900"
							onClick={() => handleClick('/event/1')}
						>
							<span>
								<AiOutlineUser className="text-xl" />
							</span>
							<span className="ml-8">Quem vai?</span>
						</li>

						{/* <li
							className="p-4 border-opacity-25 flex items-center cursor-pointer hover:bg-gray-900"
							onClick={() => handleClick('/settings')}
						>
							<span>
								<AiOutlineSetting className="text-xl" />
							</span>
							<span className="ml-8">Configura????es</span>
						</li> */}
					</ul>
					<div className="h-full"></div>
					<div>
						<span className="font-light text-sm">
							<li
								className="border-t-2 border-b-2 p-4 border-opacity-25 flex items-center mb-4 cursor-pointer hover:bg-gray-900"
								onClick={() => handleClick('/logout')}
							>
								<span>
									<AiOutlineLogout className="text-xl" />
								</span>
								<span className="ml-8">Sair</span>
							</li>
							Anivers??rio do Assis
							<br />
							Vers??o: {version}
						</span>
					</div>
				</div>
			</motion.aside>
		</div>
	)
}
