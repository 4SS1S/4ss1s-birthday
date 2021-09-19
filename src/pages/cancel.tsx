import React from 'react'

import { DialogBox } from '@/components'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'

const Cancel = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const session = props.data as Session

  return (
    <div className="flex w-full h-full items-center justify-center flex-col space-y-8">
      <img
        src={session.user?.image || ''}
        alt={session.user?.name || ''}
        className="rounded-full"
      />
      <DialogBox>
        É uma pena saber que você não vai <strong>{session.user?.name}</strong>{' '}
        😥, mas quem sabe então outra hora então né? Se quiser dizer o motivo,
        pode deixar aqui na caixa a baixo:
        <form action="#" method="post" className="mt-4 mb-16">
          <textarea
            className="w-full h-20 resize-none rounded-lg focus:border-gray-300 p-2 text-gray-800"
            placeholder="Motivo"
            required
          />
          <input
            type="submit"
            value="Enviar"
            className="w-full p-2 bg-purple-700 rounded-md"
          />
        </form>
        <button className="absolute bottom-0 p-4 pb-10 left-0 w-full h-4 text-center">
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
