import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={reactLogo} className="logo solid" alt="Solid logo" />
        </a>
        <a href="https://www.electronjs.org/" target="_blank">
          <img src="https://www.electronjs.org/assets/img/logo.svg" className="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className="card">
        <button
          style={{
            backgroundColor: "#eee"
          }}
          onClick={() => setCount((count) => count + 1)}>
          Count is {"   "}
          <span >
            {count}
          </span>
        </button>
        <p>
          Edit
          <code
            style={{
              border: "1px solid black",
              padding: "5px",
              "borderRadius": "5px",
              margin: "0 5px"
            }}
          >src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, Electron and React logos to learn more
      </p>
    </>
  )
}

export default App
