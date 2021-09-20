import React from 'react'
import Image from 'next/image'

import { SidebarMenu } from './sidebar-menu'

export const Header = () => {
  return (
    <header>
      <div className="flex p-4 justify-between shadow-2xl">
        <SidebarMenu />

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
