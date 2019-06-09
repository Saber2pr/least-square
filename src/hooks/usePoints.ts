import React, { useState, useEffect } from 'react'
import { LS } from '../core'

export type UpdatePoints = (
  index: number,
  type: keyof LS.Point
) => (event: React.FormEvent<HTMLInputElement>) => void

export const usePoints = (
  data: LS.Data,
  onChange?: (data: LS.Data) => void
): [LS.Data, UpdatePoints, VoidFunction, VoidFunction] => {
  const [points, setData] = useState<LS.Data>([])
  useEffect(() => {
    setData(data)
  }, [data])

  const update: UpdatePoints = (index, type) => event => {
    points[index][type] = Number(event.target['value'])
    setData(points)

    onChange && onChange(points)
  }

  const add = () => {
    const next = points.concat({ x: 0, y: 0 })
    setData(next)
    onChange && onChange(next)
  }

  const sub = () => {
    const next = points.slice(0, points.length - 1)
    setData(next)
    onChange && onChange(next)
  }

  return [points, update, add, sub]
}
