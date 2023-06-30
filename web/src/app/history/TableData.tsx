import clsx from 'clsx'
import React from 'react'

interface TableDataProps {
  children: React.ReactNode
  statusColor?: 'yellow' | 'green' | 'red' | null
}

export function TableData({ children, statusColor = null }: TableDataProps) {
  return (
    <td className="body2 border-t-4 border-t-gray-800 bg-gray-700 p-4 first:w-1/2">
      <span
        className={clsx(
          'flex items-center gap-2',
          {
            'before:bg-yellow-500': statusColor === 'yellow',
            'before:bg-green-500': statusColor === 'green',
            'before:bg-red-500': statusColor === 'red',
          },
          statusColor &&
            'before:h-2 before:w-2 before:rounded-full before:content-[""]',
        )}
      >
        {children}
      </span>
    </td>
  )
}
