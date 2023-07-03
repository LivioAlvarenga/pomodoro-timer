'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from 'lucide-react'
import { useForm } from 'react-hook-form'
import zod from 'zod'

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

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const watchTask = watch('task')
  const isSubmitButtonDisabled =
    typeof watchTask === 'string' ? watchTask.trim() === '' : true

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

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
          <div className="headline6 subtitle1 flex w-full flex-wrap items-center justify-center gap-2 text-gray-100 lg:flex-nowrap">
            <label htmlFor="task" className="lg:whitespace-nowrap">
              Vou trabalhar em
            </label>
            <input
              type="text"
              id="task"
              list="taskListSuggestion"
              placeholder="Dê um nome para sua tarefa"
              {...register('task')}
              className="accessibilityFocus subtitle1 h-10 flex-1 rounded-sm border-0 border-b-2 border-b-gray-500 bg-transparent px-1 text-gray-100 transition-colors placeholder:text-gray-500 lg:hover:border-b-primary"
            />

            <datalist id="taskListSuggestion">
              <option value="Projeto de Timer" />
              <option value="Projeto de Timer com Nextjs" />
              <option value="Projeto de Timer com Nextjs 13" />
              <option value="Projeto de Timer com Nextjs 13 App Router" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <input
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
              {...register('minutesAmount', { valueAsNumber: true })}
              className="accessibilityFocus subtitle1 h-10 w-16 rounded-sm border-0 border-b-2 border-b-gray-500 bg-transparent px-1 text-gray-100 transition-colors placeholder:text-gray-500 lg:hover:border-b-primary"
            />

            <span>minutos.</span>
          </div>

          <div className="headline2 flex gap-4 font-robotoMono700 text-gray-100 sm:text-[10rem] sm:leading-tight">
            <span className="rounded-lg bg-gray-700 px-4 py-1">0</span>
            <span className="rounded-lg bg-gray-700 px-4 py-1">0</span>
            <span className="flex w-10 justify-center overflow-hidden py-1 text-primary">
              :
            </span>
            <span className="rounded-lg bg-gray-700 px-4 py-1">0</span>
            <span className="rounded-lg bg-gray-700 px-4 py-1">0</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="accessibilityFocus button flex w-full items-center justify-center gap-2 rounded-lg border-0 bg-primary p-4 text-gray-100 transition-colors disabled:cursor-not-allowed disabled:opacity-70 lg:cursor-pointer lg:enabled:hover:bg-tertiary lg:enabled:hover:text-gray-800"
          >
            <Play size={24} />
            Iniciar
          </button>
        </form>
      </div>
    </main>
  )
}
