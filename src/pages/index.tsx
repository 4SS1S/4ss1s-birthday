import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { DialogBox } from '@/components'

const Home: NextPage = () => {
  const [session, loading] = useSession()

  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
  }, [session])

  return (
    <div className="">
      <div className="absolute z-0 w-full top-28">
        <Image
          src="/assets/images/chop.png"
          alt="Chop"
          width={416}
          height={319}
          loading="eager"
          placeholder="blur"
          layout="responsive"
          blurDataURL={`/assets/images/chop.png`}
        />
      </div>

      <motion.div
        className="z-10 fixed top-1/3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 50,
          damping: 3,
          mass: 0.6,
          velocity: 0.5,
          bounce: 1,
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          bounce: 0.5,
          delay: 2,
        }}
        className="absolute bottom-5 flex flex-col space-y-3 justify-center items-center w-full"
      >
        <div className="bg-blue-800 w-4/6 text-sm text-center p-2 rounded-sm shadow-md relative">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FaFacebookF className="text-white" />
          </span>
          Entrar com o Facebook
        </div>
        <div className="bg-white w-4/6 text-sm text-center p-2 rounded-sm shadow-md text-gray-700 relative">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FcGoogle />
          </div>
          Entrar com o Google
        </div>
      </motion.div>
    </div>
  )
}

export default Home
