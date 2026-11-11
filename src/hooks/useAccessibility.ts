/**
 * @file Hook de preferências de acessibilidade (tamanho do texto e contraste).
 */
import { useCallback, useState } from 'react'

/** Tamanho padrão do texto, em pixels. */
export const DEFAULT_FONT_SIZE = 16
/** Menor tamanho de texto permitido, em pixels. */
export const MIN_FONT_SIZE = 12
/** Maior tamanho de texto permitido, em pixels. */
export const MAX_FONT_SIZE = 22
/** Quanto o texto cresce ou diminui a cada clique, em pixels. */
export const FONT_SIZE_STEP = 2

/**
 * Estado e ações devolvidos por {@link useAccessibility}.
 */
export interface AccessibilityControls {
  /** Tamanho atual do texto base da página, em pixels. */
  fontSize: number
  /** `true` quando o tema de alto contraste está ativo. */
  highContrast: boolean
  /** Aumenta o texto em {@link FONT_SIZE_STEP}, até {@link MAX_FONT_SIZE}. */
  increaseFontSize: () => void
  /** Diminui o texto em {@link FONT_SIZE_STEP}, até {@link MIN_FONT_SIZE}. */
  decreaseFontSize: () => void
  /** Volta o texto para {@link DEFAULT_FONT_SIZE}. */
  resetFontSize: () => void
  /** Liga ou desliga o tema de alto contraste. */
  toggleHighContrast: () => void
}

/**
 * Controla as preferências de acessibilidade da página.
 *
 * O tamanho do texto é aplicado como `font-size` no elemento raiz da página;
 * como toda a tipografia usa `em`, os textos escalam juntos. O alto contraste
 * é aplicado adicionando a classe `hc` ao mesmo elemento (ver `index.css`).
 *
 * As preferências vivem apenas em memória: recarregar a página volta ao
 * padrão, como no protótipo original.
 *
 * @returns O estado atual e as funções para alterá-lo.
 *
 * @example
 * const a11y = useAccessibility()
 * <div className={a11y.highContrast ? 'pg hc' : 'pg'} style={{ fontSize: a11y.fontSize }} />
 */
export function useAccessibility(): AccessibilityControls {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE)
  const [highContrast, setHighContrast] = useState(false)

  const increaseFontSize = useCallback(() => {
    setFontSize((current) => Math.min(MAX_FONT_SIZE, current + FONT_SIZE_STEP))
  }, [])

  const decreaseFontSize = useCallback(() => {
    setFontSize((current) => Math.max(MIN_FONT_SIZE, current - FONT_SIZE_STEP))
  }, [])

  const resetFontSize = useCallback(() => {
    setFontSize(DEFAULT_FONT_SIZE)
  }, [])

  const toggleHighContrast = useCallback(() => {
    setHighContrast((current) => !current)
  }, [])

  return {
    fontSize,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
  }
}
