import React, { useState } from 'react'
import { LS } from './core'
import ReactDOM from 'react-dom'
import { Table, Result, FileUpload } from './components'
import { useForceUpdate } from './hooks'

const App = () => {
  const [data, setData] = useState<LS.Data>([{ x: 0, y: 0 }])

  const clearData = () => setData([])

  const forceUpdate = useForceUpdate()

  return (
    <div className="container">
      <header>
        <strong>least-square</strong>
      </header>

      <main>
        <section>
          <Table
            data={data}
            onChange={data => {
              setData(data)
              forceUpdate()
            }}
          />
        </section>

        <section>
          <Result data={data} />
        </section>

        <section>
          <FileUpload
            onLoad={data => {
              clearData()
              setData(data)
            }}
          />
        </section>
      </main>

      <footer className="auth">by saber2pr.</footer>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
