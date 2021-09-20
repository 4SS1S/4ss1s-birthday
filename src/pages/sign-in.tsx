import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession, useSession } from 'next-auth/client'

import prisma from '@/lib/prisma'

const SignIn = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <div>SignIn</div>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)
  const email = session?.user?.email

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email || '',
    },
    select: {
      id: true,
    },
  })

  const verified = await prisma.userConfirmation.findMany({
    where: {
      userId: user?.id,
    },
  })

  if (Object.keys(verified).length === 0) {
    return {
      redirect: {
        destination: '/confirm-presence',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data: session,
    },
  }
}

export default SignIn
