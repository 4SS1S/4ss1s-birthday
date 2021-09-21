import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import axios from '@/lib/axios'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'

const ChangeMind = ({ session }: { session: Session }) => {
  const router = useRouter()

  useEffect(() => {
    axios
      .delete(`/api/event-confirmation?userId=${session.id}`)
      .then(() => {
        router.push('/confirm-presence')
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <h1>Change Mind</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

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
    },
  }
}

export default ChangeMind
