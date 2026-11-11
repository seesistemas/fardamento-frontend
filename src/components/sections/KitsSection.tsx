/**
 * @file Seção "Kits".
 */
import { KITS } from '../../data/homeContent'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Seção "O que vem em cada kit".
 *
 * Um cartão por etapa de ensino, com a lista de peças vinda de `KITS`.
 * O selo à direita do título avisa que a composição ainda depende de
 * confirmação da Secretaria.
 *
 * Âncora: `#kits`.
 */
export function KitsSection() {
  return (
    <section id="kits" aria-labelledby="h-kits" className="px-6 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex max-w-[640px] flex-col gap-2">
            <SectionHeading
              id="h-kits"
              eyebrow="Composição"
              title="O que vem em cada kit"
            />
          </div>
          <span className="rounded-sm border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
            Composição a confirmar pela SEE
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {KITS.map((kit) => (
            <article
              key={kit.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-15 font-semibold">{kit.title}</h3>
              <span aria-hidden="true" className="h-px bg-border" />
              <ul className="flex list-disc flex-col gap-1.5 pl-4.5 text-sm text-muted-foreground">
                {kit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
