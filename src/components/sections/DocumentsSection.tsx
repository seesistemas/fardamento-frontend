/**
 * @file Seção "Documentos e legislação".
 */
import { DOCUMENTS } from '../../data/homeContent'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Seção "Documentos e legislação".
 *
 * À esquerda, o título e uma breve descrição; à direita, a lista de
 * documentos de `DOCUMENTS`. Cada linha inteira é um link: ícone, título,
 * informação secundária e a ação ("Baixar" ou "Consultar").
 *
 * Âncora: `#documentos`.
 */
export function DocumentsSection() {
  return (
    <section
      id="documentos"
      aria-labelledby="h-docs"
      className="border-y border-border bg-muted px-6 py-20"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-8">
        <div className="flex flex-[1_1_280px] flex-col gap-2">
          <SectionHeading
            id="h-docs"
            eyebrow="Transparência"
            title="Documentos e legislação"
          />
          <p className="text-sm text-muted-foreground">
            Normas, editais e orientações oficiais do programa.
          </p>
        </div>

        <ul className="min-w-0 flex-[999_1_522px] overflow-hidden rounded-xl border border-border bg-card">
          {DOCUMENTS.map((document, index) => (
            <li
              key={document.title}
              className={index < DOCUMENTS.length - 1 ? 'border-b border-border' : ''}
            >
              <a
                href={document.href}
                className="flex items-center gap-3.5 px-5 py-4 text-foreground hover:bg-accent"
              >
                <Icon name={document.icon} className="shrink-0 text-brand" />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-15 font-medium">{document.title}</span>
                  <span className="text-13 text-muted-foreground">{document.meta}</span>
                </span>
                <span className="text-sm font-semibold text-primary underline underline-offset-4">
                  {document.action}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
