'use client'

import { CyclesContext } from '@/contexts/CyclesContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Hand, Play } from 'lucide-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().nonempty('Informe uma tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const textShadow = {
    color: '#ffffff',
    textShadow:
      '0 0 10px #26a9e0, 0 0 20px #26a9e0, 0 0 40px #26a9e0, 0 0 80px #26a9e0',
  }

  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const watchTask = watch('task')
  const isSubmitButtonDisabled =
    typeof watchTask === 'string' ? watchTask.trim() === '' : true

  return (
    <main className="wrapper flex flex-1 flex-col items-start justify-start">
      <h1 className="headline6 sm:headline4 lg:headline2 mt-5 text-center font-playfair400 text-tGray lg:max-w-7xl">
        Projeto de <b style={textShadow}>Timer</b> com Nextjs 13 App Router,
        React, Typescript e Tailwindcss.
      </h1>
      <div className="my-20 flex w-full items-center justify-center rounded-lg bg-gray-800 p-5 lg:p-10">
        <form
          onSubmit={handleSubmit(handleCreateNewCycle)}
          action=""
          className="flex flex-col items-center gap-14"
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />

          {activeCycle ? (
            <button
              type="button"
              onClick={interruptCurrentCycle}
              className="accessibilityFocus button flex w-full items-center justify-center gap-2 rounded-lg border-0 bg-red-500 p-4 text-gray-100 transition-colors disabled:cursor-not-allowed disabled:opacity-70 lg:cursor-pointer lg:enabled:hover:bg-red-700"
            >
              <Hand size={24} />
              Interromper
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitButtonDisabled}
              className="accessibilityFocus button flex w-full items-center justify-center gap-2 rounded-lg border-0 bg-primary p-4 text-gray-100 transition-colors disabled:cursor-not-allowed disabled:opacity-70 lg:cursor-pointer lg:enabled:hover:bg-tertiary"
            >
              <Play size={24} />
              Começar
            </button>
          )}
        </form>
      </div>
    </main>
  )
}
