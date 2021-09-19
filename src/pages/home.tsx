import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'

const Home = props => {
  return <div>Home</div>
}

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      name: 'world',
    },
  }
}

export default Home
