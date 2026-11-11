/**
 * @file Atalhos de teclado para pular direto às regiões da página.
 */

/** Regiões alcançáveis pelos atalhos: âncora, tecla de acesso e rótulo. */
const SKIP_TARGETS = [
  { href: '#conteudo', accessKey: '1', label: 'Ir para o conteúdo [1]' },
  { href: '#menu', accessKey: '2', label: 'Ir para o menu [2]' },
  { href: '#rodape', accessKey: '3', label: 'Ir para o rodapé [3]' },
] as const

/**
 * Links de atalho ("skip links").
 *
 * Ficam invisíveis até receberem foco pela tecla Tab (classe `.skip` em
 * `index.css`). Também respondem às teclas de acesso 1, 2 e 3
 * (Alt+1 no Chrome/Edge, Alt+Shift+1 no Firefox), seguindo o padrão dos
 * portais de governo (eMAG).
 */
export function SkipLinks() {
  return (
    <>
      {SKIP_TARGETS.map((target) => (
        <a
          key={target.href}
          className="skip"
          href={target.href}
          accessKey={target.accessKey}
        >
          {target.label}
        </a>
      ))}
    </>
  )
}
