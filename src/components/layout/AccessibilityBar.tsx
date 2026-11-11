/**
 * @file Barra de acessibilidade (faixa verde no topo da página).
 */
import { VLIBRAS_URL } from '../../data/homeContent'
import type { AccessibilityControls } from '../../hooks/useAccessibility'
import { Icon } from '../ui/Icon'

/** Propriedades de {@link AccessibilityBar}. */
export interface AccessibilityBarProps {
  /** Estado e ações vindos de `useAccessibility`. */
  controls: AccessibilityControls
}

/** Classes comuns aos três botões de tamanho de texto. */
const FONT_BUTTON_CLASS =
  'h-9 min-w-10 cursor-pointer text-13 font-semibold transition-[background-color,opacity] duration-150 hover:bg-white/12 motion-reduce:transition-none'

/**
 * Barra de acessibilidade.
 *
 * Reúne três recursos:
 * - **A− / A / A+**: diminui, restaura e aumenta o tamanho do texto;
 * - **Alto contraste**: interruptor (`role="switch"`) do tema preto/amarelo;
 * - **Libras**: link para o VLibras.
 *
 * O componente não guarda estado: apenas exibe e aciona o que recebe em
 * `controls`.
 */
export function AccessibilityBar({ controls }: AccessibilityBarProps) {
  const {
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
  } = controls

  return (
    <div
      role="region"
      aria-label="Acessibilidade"
      className="border-b border-acre bg-acre text-left text-topbar-foreground"
    >
      <div className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-end gap-x-6 gap-y-2 px-6 py-2">
        <div className="flex flex-wrap items-center gap-3">
          <div
            role="group"
            aria-label="Tamanho do texto"
            className="flex overflow-hidden rounded-md border border-white/45"
          >
            <button
              type="button"
              onClick={decreaseFontSize}
              aria-label="Diminuir tamanho do texto"
              className={FONT_BUTTON_CLASS}
            >
              A−
            </button>
            <button
              type="button"
              onClick={resetFontSize}
              aria-label="Tamanho de texto padrão"
              className={`${FONT_BUTTON_CLASS} border-x border-white/45`}
            >
              A
            </button>
            <button
              type="button"
              onClick={increaseFontSize}
              aria-label="Aumentar tamanho do texto"
              className={FONT_BUTTON_CLASS}
            >
              A+
            </button>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={highContrast}
            onClick={toggleHighContrast}
            className="flex h-9 cursor-pointer items-center gap-2 text-13 font-medium"
          >
            <span
              aria-hidden="true"
              className={`flex h-4.5 w-8 rounded-full p-0.5 ${
                highContrast ? 'justify-end bg-gold' : 'justify-start bg-white/30'
              }`}
            >
              <span className="size-3.5 rounded-full bg-white" />
            </span>
            Alto contraste
          </button>

          <a
            href={VLIBRAS_URL}
            className="flex h-9 items-center gap-1.5 rounded-md border border-white/45 px-3 text-13 font-medium transition-[background-color,opacity] duration-150 hover:bg-white/12 motion-reduce:transition-none"
          >
            <Icon name="libras" size={14} />
            Libras
          </a>
        </div>
      </div>
    </div>
  )
}
