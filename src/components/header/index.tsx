import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center p-4">
        <Image
          src="/assets/images/Header.png"
          alt="Header"
          width={277}
          height={85}
          placeholder="blur"
          blurDataURL={'/assets/images/Header.png'}
        />
      </div>
    </header>
  )
}
