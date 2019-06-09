import React, { useState, useRef } from 'react'
import { LS } from '../core'

export interface Point {
  key: React.ReactText
  value: LS.Point
}

export const Table = ({
  rows,
  onChange
}: {
  rows: number
  onChange?: (data: LS.Data) => void
}) => {
  const [points, setPoints] = useState<Point[]>([])

  const x = useRef<HTMLInputElement>()
  const y = useRef<HTMLInputElement>()

  const addPoint = (key: React.ReactText) => () => {
    const point: Point = {
      key,
      value: { x: Number(x.current.value), y: Number(y.current.value) }
    }
    const poi = points.find(p => p.key === point.key)

    if (poi) {
      poi.value = point.value
      setPoints(points)
      onChange && onChange(points.map(p => p.value))
    } else {
      setPoints(points.concat(point))
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>x</th>
          <th>y</th>
        </tr>
      </thead>
      <tbody>
        {Array(rows)
          .fill(0)
          .map((v, i) => (
            <tr key={v + i}>
              <td>
                <input
                  ref={x}
                  type="text"
                  defaultValue="0"
                  onInput={addPoint(v + i)}
                />
              </td>
              <td>
                <input
                  ref={y}
                  type="text"
                  defaultValue="0"
                  onInput={addPoint(v + i)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
