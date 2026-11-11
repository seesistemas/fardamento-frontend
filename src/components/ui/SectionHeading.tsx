/**
 * @file Cabeçalho padrão das seções da tela inicial.
 */

/** Propriedades de {@link SectionHeading}. */
export interface SectionHeadingProps {
  /** `id` do `<h2>`; a seção aponta para ele com `aria-labelledby`. */
  id: string
  /** Rótulo curto exibido acima do título (ex.: "Passo a passo"). */
  eyebrow: string
  /** Título da seção. */
  title: string
}

/**
 * Rótulo verde + título `<h2>` usados no topo de cada seção.
 *
 * Devolve apenas os dois elementos (sem contêiner), para que cada seção
 * decida o espaçamento e o que vem depois (parágrafos, selos, etc.).
 *
 * @example
 * <div className="flex flex-col gap-2">
 *   <SectionHeading id="h-kits" eyebrow="Composição" title="O que vem em cada kit" />
 * </div>
 */
export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <>
      <span className="text-sm font-semibold text-primary">{eyebrow}</span>
      <h2 id={id} className="text-4xl leading-[1.1] font-bold tracking-[-0.03em]">
        {title}
      </h2>
    </>
  )
}
