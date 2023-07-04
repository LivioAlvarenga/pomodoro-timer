'use client'

import { CyclesContext } from '@/contexts/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="headline6 subtitle1 flex w-full flex-wrap items-center justify-center gap-2 text-gray-100 lg:flex-nowrap">
      <label htmlFor="task" className="lg:whitespace-nowrap">
        Vou trabalhar em
      </label>
      <input
        type="text"
        id="task"
        list="taskListSuggestion"
        placeholder="Dê um nome para sua tarefa"
        disabled={!!activeCycle}
        {...register('task')}
        className="accessibilityFocus subtitle1 h-10 flex-1 rounded-sm border-0 border-b-2 border-b-gray-500 bg-transparent px-1 text-gray-100 transition-colors placeholder:text-gray-500 disabled:cursor-not-allowed lg:cursor-pointer lg:hover:border-b-primary disabled:lg:hover:border-b-red-500"
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
        className="accessibilityFocus subtitle1 h-10 w-16 rounded-sm border-0 border-b-2 border-b-gray-500 bg-transparent px-1 text-gray-100 transition-colors placeholder:text-gray-500 disabled:cursor-not-allowed lg:cursor-pointer lg:hover:border-b-primary disabled:lg:hover:border-b-red-500"
      />

      <span>minutos.</span>
    </div>
  )
}
