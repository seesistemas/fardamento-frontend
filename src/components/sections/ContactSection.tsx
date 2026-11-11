/**
 * @file Seção "Canais de atendimento".
 */
import { CONTACT_CHANNELS } from '../../data/homeContent'
import { Icon } from '../ui/Icon'

/**
 * Seção "Canais de atendimento".
 *
 * Um cartão por canal (telefone, e-mail e escola), a partir de
 * `CONTACT_CHANNELS`.
 *
 * Âncora: `#atendimento`.
 */
export function ContactSection() {
  return (
    <section id="atendimento" aria-labelledby="h-atend" className="px-6 pb-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
        <h2 id="h-atend" className="text-2xl font-bold tracking-[-0.02em]">
          Canais de atendimento
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.title}
              className="flex gap-3.5 rounded-xl border border-border p-5"
            >
              <Icon name={channel.icon} className="mt-0.5 shrink-0 text-brand" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{channel.title}</span>
                <span className="text-sm text-muted-foreground">
                  {channel.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
