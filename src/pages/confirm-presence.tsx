import React from 'react'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { DialogBox } from '@/components'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'
import { prisma } from '../lib'
import { EventProps } from 'event'

const ConfirmPresence = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const session = props.data as Session

  const handleCancel = () => {
    // TODO: redirect to cancel page
  }

  const handleConfirm = () => {
    // TODO: redirect to confirm page
  }

  return (
    <div className="flex w-screen justify-center flex-col items-center">
      <div className="overflow-hidden rounded-full shadow-lg">
        <img src={session.user?.image || ''} alt={session.user?.name || ''} />
      </div>
      <div className="mt-4">
        <DialogBox>
          <strong className="tracking-wide">
            Você {session.user?.name}, confirma presença no dia{' '}
            {props.event.date}/{props.event.month} (sexta-feira) às{' '}
            {props.event.time}:{props.event.minutes}h no {props.event.location}?
          </strong>

          <div className="font-thin mt-6 mb-2">
            Ao confirmar estar no local, você estará aceitando também:
          </div>
          <ul className="font-light ">
            <li>
              <span>✔️</span> Boa Comida
            </li>
            <li>
              <span>✔️</span>Ótimas cervejas
            </li>
            <li>
              <span>✔️</span>Ambiente agradável e descontraido
            </li>
            <li>
              <span>✔️</span>Sua presença é um grande presente ❤️
            </li>
            <li>
              <span>❌</span> Não precisa levar presente
            </li>
            <li>
              <span>❌</span>Não precisa gastar no local
            </li>
          </ul>

          <div className="relative mt-6 h-7" />
          <div className="w-full flex mt-5 left-0 absolute bottom-0">
            <div className="absolute top-0 w-screen -left-12 h-px bg-gray-300 bg-opacity-50" />
            <button
              className="w-full border-r-2 border-opacity-50 border-gray-300 p-4 font-light"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button className="w-full p-4 font-medium" onClick={handleConfirm}>
              Confirmar
            </button>
          </div>
        </DialogBox>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

  const event = await prisma.event?.findFirst()

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
      event: {
        location: event?.location,
        date: `${new Date(event?.start as Date).getDate()}`,
        month: `${new Date(event?.start as Date).getMonth() + 1}`,
        time: `${new Date(event?.start as Date).getHours() + 3}`,
        minutes: `${new Date(event?.start as Date).getMinutes()}`,
      },
    },
  }
}

export default ConfirmPresence
