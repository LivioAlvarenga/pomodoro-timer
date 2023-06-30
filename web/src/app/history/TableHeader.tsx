import React from 'react'

interface TableHeaderProps {
  children: React.ReactNode
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <th className="body2 bg-gray-600 p-4 text-left text-gray-100 first:rounded-tl-lg last:rounded-tr-lg">
      {children}
    </th>
  )
}
