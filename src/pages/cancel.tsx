import React from 'react'
import axios from 'axios'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { DialogBox } from '@/components'

const Cancel = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const session = props.data as Session

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post('/api/cancel', {
        userId: session.id,
      })
      .then(() => {
        // TODO: redirect to a page that says "you have cancelled"
        // router.push('/')
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleChangeMind = () => {
    axios
      .delete(`/api/event-confirmation/${session.id}`)
      .then(() => {
        router.push('/confirm-presence')
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="flex w-full h-full items-center justify-center flex-col space-y-8">
      <img
        src={session.user?.image || ''}
        alt={session.user?.name || ''}
        className="rounded-full"
      />
      <DialogBox>
        <span className="font-light">
          É uma pena saber que você não vai{' '}
          <strong className="font-medium">{session.user?.name}</strong> 😥, mas
          quem sabe então outra hora então né? Se quiser dizer o motivo, pode
          deixar aqui na caixa a baixo:
        </span>
        <form
          action="#"
          method="post"
          className="mt-4 mb-16"
          onSubmit={handleSubmit}
        >
          <textarea
            className="w-full h-20 resize-none rounded-lg focus:border-gray-300 p-2 text-gray-800"
            placeholder="Motivo"
            required
          />
          <input
            type="submit"
            value="Enviar"
            className="w-full p-2 bg-purple-700 rounded-sm"
          />
        </form>
        <button
          className="absolute bottom-0 p-4 pb-10 left-0 w-full h-4 text-center active:bg-gray-500 active:bg-opacity-50"
          onClick={handleChangeMind}
        >
          <div className="w-full h-px absolute top-0 left-0 bg-gray-500 bg-opacity-50"></div>
          <strong>Estou pensando em mudar de ideia</strong>
        </button>
      </DialogBox>
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
      data: session,
    },
  }
}

export default Cancel
