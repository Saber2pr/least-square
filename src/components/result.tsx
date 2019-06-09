import React from 'react'
import { LS } from '../core'

export const Result = ({
  value: { x_, y_, xy_, x_2, k, b }
}: {
  value: LS.Result
}) => {
  return (
    <>
      <header>
        <strong>Result</strong>
      </header>
      <main>
        <table>
          <tbody>
            <tr>
              <th>x_</th>
              <th>{x_}</th>
            </tr>
            <tr>
              <th>y_</th>
              <th>{y_}</th>
            </tr>
            <tr>
              <th>xy_</th>
              <th>{xy_}</th>
            </tr>
            <tr>
              <th>x_2</th>
              <th>{x_2}</th>
            </tr>
            <tr>
              <th>k</th>
              <th>{k}</th>
            </tr>
            <tr>
              <th>b</th>
              <th>{b}</th>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
