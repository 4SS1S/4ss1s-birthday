import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center p-4">
        <Image
          src="/assets/svg/Header.svg"
          alt="Header"
          width={277}
          height={85}
          placeholder="blur"
          blurDataURL={'/assets/svg/Header.svg'}
        />
      </div>
    </header>
  )
}
