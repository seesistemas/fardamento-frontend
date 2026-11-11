/**
 * @file Ponto de entrada da aplicação.
 *
 * Monta o componente {@link App} no elemento `#root` do `index.html` e
 * carrega a folha de estilos global (Tailwind + tema).
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento #root não encontrado em index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
