/**
 * @file Componente raiz da aplicação.
 */
import { HomePage } from './pages/HomePage'

/**
 * Componente raiz.
 *
 * Hoje o sistema possui apenas a tela inicial pública ({@link HomePage}).
 * Quando novas telas forem criadas (login, voucher, etc.), o roteamento
 * deve ser adicionado aqui.
 *
 * @returns A tela inicial do sistema.
 */
export default function App() {
  return <HomePage />
}
