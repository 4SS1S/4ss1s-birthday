import React, { useEffect, useContext } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useSession, signIn, getSession } from 'next-auth/client'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'

import { DialogBox } from '@/components'
import { LoadingContext } from '@/store/loading'

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [session, loading] = useSession()

  const { setLoading } = useContext(LoadingContext)

  useEffect(() => {
    setLoading(loading)
  }, [loading])

  const router = useRouter()

  const Header = () => (
    <Head>
      <title>Aniversário do Assis</title>
      <meta name="title" content="Aniversário do Assis" />
      <meta
        name="description"
        content="Olá você está sendo convidado para o aniversário do Assis, para confirmar, informar que não irá ou mais informações, veja aqui."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Aniversário do Assis" />
      <meta
        property="og:description"
        content="Olá você está sendo convidado para o aniversário do Assis, para confirmar, informar que não irá ou mais informações, veja aqui."
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Aniversário do Assis" />
      <meta
        property="twitter:description"
        content="Olá você está sendo convidado para o aniversário do Assis, para confirmar, informar que não irá ou mais informações, veja aqui."
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
    </Head>
  )

  useEffect(() => {
    if (session) {
      router.push('/sign-in')
    }
  }, [session])

  if (session) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <h1>Você já está logado</h1>
        Agora você estará sendo redirecionando.
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="fixed z-0 w-full top-28 left-0">
        <Image
          src="/assets/images/cerveja.png"
          alt="Chop"
          width={1120}
          height={581}
          loading="eager"
          placeholder="blur"
          layout="responsive"
          blurDataURL={`/assets/images/cerveja.png`}
        />
      </div>

      <motion.div
        className="z-10 fixed left-50 top-1/3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 50,
          damping: 3,
          mass: 0.6,
          velocity: 0.5,
          bounce: 1,
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <DialogBox>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 10,
              mass: 1,
              velocity: 0.5,
              bounce: 1,
            }}
            className="font-thin text-gray-200"
          >
            🎉🥳 CONVITE ESPECIAL
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="text-gray-100 font-bold"
          >
            Vim aqui para te convidar
          </motion.h2>
          <span className="font-thin text-white">
            Você recebeu um convite para festa de aniversário do Assis Duarte, e
            sua presença é muito importante! Aqui você pode acompanhar a data,
            local e como chegar lá. Acesse e confirme se irá ou não participar
            desse dia especial.
          </span>
        </DialogBox>
      </motion.div>

      <div className="absolute bottom-5 flex flex-col space-y-3 justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            bounce: 0.5,
            delay: 2,
          }}
          className="bg-blue-800 w-4/6 text-sm text-center p-2 rounded-sm shadow-md relative cursor-pointer"
          onClick={() => signIn('facebook')}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FaFacebookF className="text-white" />
          </span>
          Entrar com o Facebook
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            bounce: 0.5,
            delay: 2.2,
          }}
          className="bg-white w-4/6 text-sm text-center p-2 rounded-sm shadow-md text-gray-700 relative cursor-pointer"
          onClick={() => signIn('google')}
        >
          <div className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FcGoogle />
          </div>
          Entrar com o Google
        </motion.div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = await getSession({ req })
  const user = session?.user || {}

  const { callbackUrl } = query

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: callbackUrl || '/sign-in',
    })
    res.end()
    return {
      props: {
        user,
      },
    }
  }

  return {
    props: {
      user,
    },
  }
}

export default Home
