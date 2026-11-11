/**
 * @file Seção de abertura (Hero) da tela inicial.
 */
import { LOGIN_URL, PROGRAM_SUMMARY } from '../../data/homeContent'
import { Icon } from '../ui/Icon'

/**
 * Seção de abertura.
 *
 * Duas colunas que se empilham em telas estreitas:
 * - **esquerda**: selo do ano letivo, título principal (`<h1>`), texto de
 *   apresentação e os botões "Acessar o sistema" e "Como funciona";
 * - **direita**: cartão "O programa em resumo", uma lista de definições
 *   (`<dl>`) montada a partir de `PROGRAM_SUMMARY`.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="titulo-pagina"
      className="border-b border-border bg-[linear-gradient(180deg,var(--brand-soft)_0%,var(--background)_100%)]"
    >
      <div className="mx-auto flex max-w-[1248px] flex-wrap items-center gap-12 px-6 py-18">
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-5">
          <span className="inline-flex items-center gap-1.5 self-start rounded-sm bg-highlight px-2.5 py-0.5 text-xs font-medium text-highlight-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            Rede Estadual · Ano letivo 2026
          </span>

          <h1
            id="titulo-pagina"
            className="text-5xl leading-[1.05] font-bold tracking-[-0.035em]"
          >
            Fardamento escolar gratuito para alunos da rede estadual do&nbsp;
            <span className="text-acre">Acre</span>
          </h1>

          <p className="max-w-[560px] text-lg text-muted-foreground">
            O Governo do Estado, por meio da Secretaria de Estado de Educação, garante o
            fardamento dos estudantes com um voucher digital, trocado em empresas
            credenciadas. Sem custo para as famílias.
          </p>

          <div className="mt-1 flex flex-wrap gap-2">
            <a
              href={LOGIN_URL}
              className="flex h-11 items-center gap-2 rounded-md bg-acre px-5 text-15 font-semibold text-primary-foreground shadow-xs transition-[background-color,opacity] duration-150 hover:opacity-90 motion-reduce:transition-none"
            >
              Acessar o sistema
              <Icon name="arrowRight" size={16} />
            </a>
            <a
              href="#como"
              className="flex h-11 items-center rounded-md border border-border bg-background px-5 text-15 font-medium text-foreground shadow-xs transition-[background-color,opacity] duration-150 hover:bg-accent motion-reduce:transition-none"
            >
              Como funciona
            </a>
          </div>
        </div>

        <aside
          aria-labelledby="resumo-titulo"
          className="min-w-0 flex-[1_1_362px] overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-card"
        >
          <div className="border-b border-border px-6 py-5">
            <h2 id="resumo-titulo" className="text-lg font-semibold tracking-[-0.01em]">
              O programa em resumo
            </h2>
          </div>
          <dl className="flex flex-col px-6 pt-2 pb-4">
            {PROGRAM_SUMMARY.map((item, index) => (
              <div
                key={item.term}
                className={`flex gap-3.5 py-3.5 ${
                  index < PROGRAM_SUMMARY.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <Icon name={item.icon} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <dt className="text-13 text-muted-foreground">{item.term}</dt>
                  <dd className="font-medium">{item.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
