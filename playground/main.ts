import './style.css'
import typescriptLogo from './typescript.svg'

import PubSub from '../src'
import Swal from 'sweetalert2'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="emitter" type="button">Emit event</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const bus = PubSub()

bus.on('foo', () => Swal.fire({
  position: 'top-end',
  title: 'Event emitted',
  showConfirmButton: false,
  timer: 150000,
  customClass: 'custom-toast',
  width: "16rem",
  padding: '1em',
}))

document.querySelector('#emitter')?.addEventListener('click', () => bus.emit('foo'))
