/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'

// @ts-expect-error
window.electronAPI.greets();

localStorage.setItem("test", "Hola mundo del testing");

const root = document.getElementById('root')

render(() => <App />, root!)
