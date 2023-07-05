'use client'

import { CyclesContext } from '@/contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { TableData } from './TableData'
import { TableHeader } from './TableHeader'

export function ListHistory() {
  const { cycles } = useContext(CyclesContext)

  return (
    <div className=" mt-8 max-h-[calc(100vh_-_30vh)] flex-1 overflow-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead className="">
          <tr>
            <TableHeader>Tarefa</TableHeader>
            <TableHeader>Duração</TableHeader>
            <TableHeader>Início</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cycles.map((cycle) => (
            <tr key={cycle.id}>
              <TableData>{cycle.task}</TableData>
              <TableData>{cycle.minutesAmount} minutos</TableData>
              <TableData>
                {formatDistanceToNow(new Date(cycle.startedAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </TableData>
              {cycle.finishedAt && (
                <TableData statusColor={'green'}>Concluído</TableData>
              )}

              {cycle.interruptedAt && (
                <TableData statusColor={'red'}>Interrompido</TableData>
              )}

              {!cycle.finishedAt && !cycle.interruptedAt && (
                <TableData statusColor={'yellow'}>Em andamento</TableData>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
