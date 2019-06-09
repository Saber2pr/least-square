import React, { useState } from 'react'
import { LS } from './core'
import ReactDOM from 'react-dom'
import { Table } from './components/table'
import { Result } from './components/result'

const App = () => {
  const [data, setData] = useState<LS.Data>([{ x: 0, y: 0 }])

  const [len, setLen] = useState(1)
  return (
    <div className="container">
      <header>
        <strong>least-square</strong>
      </header>
      <main>
        <section>
          <Table rows={len} onChange={setData} />
        </section>
        <aside>
          <nav className="toolBar">
            <button className="add" onClick={() => setLen(len + 1)}>
              +
            </button>
            <button className="add" onClick={() => len && setLen(len - 1)}>
              -
            </button>
          </nav>
        </aside>
      </main>
      <footer>
        <Result value={LS.exec(data)} />
      </footer>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
