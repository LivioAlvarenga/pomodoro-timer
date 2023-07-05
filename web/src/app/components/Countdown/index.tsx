'use client'

import { CyclesContext } from '@/contexts/CyclesContext'
import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startedAt),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutesString = String(minutesAmount).padStart(2, '0')
  const secondsString = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesString}:${secondsString} | Timer Nextjs 13`
    }
  }, [minutesString, secondsString, activeCycle])

  return (
    <div className="headline2 flex gap-4 font-robotoMono700 text-gray-100 sm:text-[10rem] sm:leading-tight">
      <span className="rounded-lg bg-gray-700 px-4 py-1">
        {minutesString[0]}
      </span>
      <span className="rounded-lg bg-gray-700 px-4 py-1">
        {minutesString[1]}
      </span>
      <span className="flex w-10 justify-center overflow-hidden py-1 text-primary">
        :
      </span>
      <span className="rounded-lg bg-gray-700 px-4 py-1">
        {secondsString[0]}
      </span>
      <span className="rounded-lg bg-gray-700 px-4 py-1">
        {secondsString[1]}
      </span>
    </div>
  )
}
