import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://www.electronjs.org/" target="_blank">
          <img src="https://www.electronjs.org/assets/img/logo.svg" class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Electron + Vite + Solid</h1>
      <div class="card">
        <button 
          style={{ "background-color": "#ccc" }}
          onClick={() => setCount((count) => count + 1)}>
          Count is 
          <span
            style={{ "background-color": "#fff", padding: "3px 5px", "border-radius": "5px" }}
          >
            {count()}
          </span>
        </button>
        <p>
          Edit 
          <code
            style={{
              border: "1px solid black",
              padding: "5px",
              "border-radius": "5px",
              margin: "0 5px"
            }}
          >src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
