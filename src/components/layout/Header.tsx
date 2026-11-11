/**
 * @file Cabeçalho da página: logotipo, menu principal e botão "Entrar".
 */
import logo from '../../assets/images/logo-seec-fardamento.png'
import { LOGIN_URL, MAIN_NAV } from '../../data/homeContent'
import { Icon } from '../ui/Icon'

/**
 * Cabeçalho.
 *
 * Estrutura, de cima para baixo: filete amarelo de 3px, linha com o
 * logotipo (à esquerda) e o menu (à direita) e borda inferior verde de 3px.
 * Em telas estreitas o menu quebra para a linha de baixo.
 *
 * O `id="menu"` é o destino do atalho de teclado "Ir para o menu".
 */
export function Header() {
  return (
    <header id="menu" className="min-h-[77px] border-b-3 border-acre bg-background">
      <div aria-hidden="true" className="h-[3px] bg-gold" />
      <div className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-between gap-3 px-6 py-1.5">
        <a href="#" className="flex items-center rounded-sm">
          <img
            src={logo}
            alt="Estado do Acre, Secretaria de Estado de Educação e Cultura, Programa de Fardamento. Ir para a página inicial"
            className="block h-14 w-auto max-w-none"
          />
        </a>

        <nav aria-label="Menu principal" className="flex flex-wrap items-center gap-1">
          {MAIN_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md p-3 text-sm font-medium text-foreground transition-[background-color,opacity] duration-150 hover:bg-accent motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
          <span aria-hidden="true" className="mx-1.5 h-5 w-px bg-border" />
          <a
            href={LOGIN_URL}
            className="flex h-11 items-center gap-2 rounded-md bg-acre px-4.5 text-sm font-semibold text-primary-foreground shadow-xs transition-[background-color,opacity] duration-150 hover:opacity-90 motion-reduce:transition-none"
          >
            <Icon name="login" size={16} />
            Entrar
          </a>
        </nav>
      </div>
    </header>
  )
}
