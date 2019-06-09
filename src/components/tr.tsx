import React from 'react'
import { useState, useEffect } from 'react'

export const TR = ({ children }: { children: number }) => {
  const [className, set] = useState<'dataTh static' | 'dataTh active'>(
    'dataTh static'
  )

  useEffect(() => {
    set('dataTh active')
    setTimeout(() => set('dataTh static'), 500)
  }, [children])

  return <th className={className}>{children}</th>
}
