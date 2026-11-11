/**
 * @file Seção "Como funciona".
 */
import { DEADLINES, STEPS } from '../../data/homeContent'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Formata o número do passo com dois dígitos.
 *
 * @param index Posição do passo na lista, começando em zero.
 * @returns Rótulo como `"Passo 01"`.
 */
function formatStepLabel(index: number): string {
  return `Passo ${String(index + 1).padStart(2, '0')}`
}

/**
 * Seção "Como funciona".
 *
 * Mostra o passo a passo em uma lista ordenada de cartões (o último recebe
 * um filete amarelo no topo, marcando a conclusão) e, abaixo, a faixa de
 * prazos (`role="note"`).
 *
 * Âncora: `#como`.
 */
export function HowItWorksSection() {
  return (
    <section
      id="como"
      aria-labelledby="h-como"
      className="border-y border-border bg-muted px-6 py-20"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <div className="flex max-w-[640px] flex-col gap-2">
          <SectionHeading id="h-como" eyebrow="Passo a passo" title="Como funciona" />
        </div>

        <ol className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className={`flex flex-col gap-2.5 rounded-xl border border-border bg-card p-6 ${
                index === STEPS.length - 1 ? 'border-t-3 border-t-highlight' : ''
              }`}
            >
              <span className="font-mono text-xs text-muted-foreground">
                {formatStepLabel(index)}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>

        <div
          role="note"
          aria-label="Prazos"
          className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] overflow-hidden rounded-lg border border-l-0 border-border bg-card"
        >
          {DEADLINES.map((deadline, index) => (
            <div
              key={deadline.title}
              className={`flex items-start gap-3 px-5 py-4 ${
                index === 0
                  ? 'border-l-4 border-l-highlight'
                  : 'border-l border-l-border'
              }`}
            >
              <Icon
                name={deadline.icon}
                size={18}
                className="mt-0.5 shrink-0 text-foreground"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">{deadline.title}</span>
                <span className="text-sm text-muted-foreground">
                  {deadline.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
