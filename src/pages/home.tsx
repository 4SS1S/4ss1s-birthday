import React from 'react'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { ProfilePicture, DialogBox } from '@/components'

const Home = ({ session }: { session: Session }) => {
  return (
    <div>
      <div className="mt-12">
        <DialogBox>
          <div
            className="absolute -top-0"
            style={{ left: '50%', transform: 'translate(-50%,-50%)' }}
          >
            <ProfilePicture user={session.user as Session} />
          </div>
          <div className="mt-8">
            <h1>Hello {session.user?.name || ''}</h1>
          </div>
        </DialogBox>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

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

export default Home
