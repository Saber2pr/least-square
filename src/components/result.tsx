import React from 'react'
import { LS } from '../core'
import { TR } from './tr'

export const Result = ({ data }: { data: LS.Data }) => {
  const value = LS.exec(data)
  return (
    <>
      <header>
        <strong>Result</strong>
      </header>
      <main>
        <section>
          <table>
            <tbody>
              {Object.entries(value).map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <TR>{v}</TR>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}
