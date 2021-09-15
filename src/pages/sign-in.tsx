import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession, useSession } from 'next-auth/client'
import React from 'react'

const SignIn = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <div>SignIn</div>
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
      data: session,
    },
  }
}

export default SignIn
