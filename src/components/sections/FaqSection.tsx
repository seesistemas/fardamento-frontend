/**
 * @file Seção "Dúvidas" (perguntas frequentes).
 */
import { FAQ } from '../../data/homeContent'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Seção de perguntas frequentes.
 *
 * Cada pergunta é um `<details>` nativo do HTML: abre e fecha sem
 * JavaScript e já funciona com teclado e leitores de tela. A primeira
 * pergunta começa aberta. A seta gira 180° quando o item está aberto
 * (`group-open:rotate-180`).
 *
 * Âncora: `#duvidas`.
 */
export function FaqSection() {
  return (
    <section id="duvidas" aria-labelledby="h-duvidas" className="px-6 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-8">
        <div className="flex flex-[1_1_280px] flex-col gap-2">
          <SectionHeading id="h-duvidas" eyebrow="Perguntas frequentes" title="Dúvidas" />
          <p className="text-sm text-muted-foreground">
            Não encontrou o que procurava? Veja os canais de atendimento logo abaixo.
          </p>
        </div>

        <div className="flex min-w-0 flex-[999_1_520px] flex-col">
          {FAQ.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-15 font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon
                  name="chevronDown"
                  size={16}
                  className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="mb-4 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
