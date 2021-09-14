import React from 'react'

import { DialogBox } from '@/components'

const ConfirmPresence = () => {
  return (
    <div>
      <div className="mt-12">
        <DialogBox>
          <strong className="tracking-wide">
            Você fulano de tal, confirma presença no dia 01/10 (sexta-feira) às
            19h no 4beer?
          </strong>

          <div className="font-thin mt-6 mb-2">
            Ao confirmar estar no local, você estará aceitando também:
          </div>
          <ul className="font-light ">
            <li>Boa Comida</li>
            <li>Ótimas cervejas</li>
            <li>Ambiente agradável e descontraido</li>
            <li>Sua presença é um grande presente ♥</li>
            <li>Não precisa levar presente</li>
            <li>Não precisa gastar no local</li>
          </ul>

          <div className="relative mt-6 h-7" />
          <div className="w-full flex mt-5 left-0 absolute bottom-0">
            <div className="absolute top-0 w-screen -left-12 h-px bg-gray-300 bg-opacity-50" />
            <button className="w-full border-r-2 border-opacity-50 border-gray-300 p-4 font-light">
              Cancelar
            </button>
            <button className="w-full p-4 font-medium">Confirmar</button>
          </div>
        </DialogBox>
      </div>
    </div>
  )
}

export default ConfirmPresence
