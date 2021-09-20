import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession, useSession } from 'next-auth/client'

import prisma from '@/lib/prisma'

const SignIn = () => {
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

  const verified = await prisma.userConfirmation?.findMany({
    where: {
      userId: user?.id,
    },
  })

  if (!verified) {
    return {
      redirect: {
        destination: '/confirm-presence',
        permanent: false,
      },
    }
  }

  const verifiedUser = verified[verified.length - 1]

  if (verifiedUser?.accepted) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  } else {
    return {
      redirect: {
        destination: '/cancel',
        permanent: false,
      },
    }
  }
}

export default SignIn
