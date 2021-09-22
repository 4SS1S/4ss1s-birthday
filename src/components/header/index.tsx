import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'

import { SidebarMenu } from './sidebar-menu'

export const Header = () => {
	const [session] = useSession()

	return (
		<header>
			<div className="flex p-4 justify-between shadow-2xl">
				{session ? <SidebarMenu /> : <span />}

				<Image
					src="/assets/svg/Header.svg"
					alt="Header"
					width={277}
					height={85}
					placeholder="blur"
					blurDataURL={'/assets/svg/Header.svg'}
				/>

				<span></span>
			</div>
		</header>
	)
}
