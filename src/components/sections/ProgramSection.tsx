/**
 * @file Seção "O programa".
 */
import { ELIGIBILITY } from '../../data/homeContent'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Seção "O que é o Programa de Fardamento Escolar?".
 *
 * À esquerda, a explicação do programa e sua base legal; à direita, o
 * cartão "Quem tem direito", com os critérios de `ELIGIBILITY`.
 *
 * Âncora: `#programa`.
 */
export function ProgramSection() {
  return (
    <section id="programa" aria-labelledby="h-programa" className="px-6 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-3">
            <SectionHeading
              id="h-programa"
              eyebrow="O programa"
              title="O que é o Programa de Fardamento Escolar?"
            />
            <p className="max-w-[640px] text-muted-foreground">
              É a política do Governo do Acre que fornece o fardamento aos estudantes da
              rede estadual de ensino. O Estado emite um voucher digital para cada
              estudante, que a família troca em uma loja credenciada do próprio município.
            </p>
            <p className="max-w-[640px] text-muted-foreground">
              Base legal: [LEI/DECRETO Nº] · Órgão responsável: Secretaria de Estado de
              Educação.
            </p>
          </div>

          <div className="flex min-h-[166px] min-w-0 flex-[1_1_370px] flex-col gap-3 self-start rounded-xl border border-border bg-muted p-6">
            <h3 className="text-base font-semibold">Quem tem direito</h3>
            <ul className="flex flex-col gap-2.5">
              {ELIGIBILITY.map((criterion) => (
                <li key={criterion} className="flex gap-2.5 text-15">
                  <Icon
                    name="check"
                    size={18}
                    strokeWidth={2.4}
                    className="mt-0.75 shrink-0 text-brand"
                  />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
