/**
 * @file Rodapé da página.
 */
import { FOOTER_COLUMNS } from '../../data/homeContent'

/**
 * Rodapé.
 *
 * Traz a identificação do órgão, três colunas de links (mapa do site,
 * transparência e informações sobre o site) e a linha final com direitos
 * autorais e data da última atualização.
 *
 * O `id="rodape"` é o destino do atalho de teclado "Ir para o rodapé".
 */
export function Footer() {
  return (
    <footer id="rodape" className="border-t border-border bg-muted">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-8 px-6 pt-12 pb-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 font-bold">
              <span aria-hidden="true" className="size-6 rounded-sm bg-primary" />
              Fardamento Escolar
            </span>
            <span className="text-sm text-muted-foreground">
              Secretaria de Estado de Educação
              <br />
              Governo do Estado do Acre
            </span>
            <span className="text-sm text-muted-foreground">
              [ENDEREÇO] — Rio Branco/AC
            </span>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col gap-2"
            >
              <strong className="text-sm font-semibold">{column.title}</strong>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <span>© 2026 Governo do Estado do Acre · Secretaria de Estado de Educação</span>
          <span>Última atualização: [DATA]</span>
        </div>
      </div>
    </footer>
  )
}
