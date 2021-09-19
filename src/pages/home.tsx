import React from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

const Home = props => {
  return <div>Home</div>
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
      name: 'world',
    },
  }
}

export default Home
