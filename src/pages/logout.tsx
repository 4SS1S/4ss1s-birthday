import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

const Logout = props => {
  const router = useRouter()

  useEffect(() => {
    signOut({
      callbackUrl: '/',
      redirect: true,
    })
  }, [])

  return <div>Saindo</div>
}

export default Logout
