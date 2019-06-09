import React from 'react'
import { LS } from '../core'
import { usePoints } from '../hooks'

export interface Point {
  key: React.ReactText
  value: LS.Point
}

export const Table = ({
  data,
  onChange
}: {
  data: LS.Data
  onChange?: (data: LS.Data) => void
}) => {
  const [points, update, add, sub] = usePoints(data, onChange)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>x</th>
            <th>y</th>
          </tr>
        </thead>

        <tbody>
          {points.map(({ x, y }, i) => (
            <tr key={i}>
              <td>
                <input
                  type="text"
                  defaultValue={String(x)}
                  onInput={update(i, 'x')}
                />
              </td>

              <td>
                <input
                  type="text"
                  defaultValue={String(y)}
                  onInput={update(i, 'y')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav className="toolBar">
        <button className="add" onClick={add}>
          +
        </button>
        <button className="add" onClick={sub}>
          -
        </button>
      </nav>
    </>
  )
}
