/**
 * @file Biblioteca de ícones SVG da aplicação.
 */
import type { ReactNode } from 'react'

/**
 * Desenho de cada ícone (conteúdo interno do `<svg>`, viewBox 24×24).
 * Para criar um ícone novo, basta adicionar uma chave aqui: o tipo
 * {@link IconName} é atualizado automaticamente.
 */
const ICON_SHAPES = {
  /** Mão — atalho para o VLibras. */
  libras: (
    <>
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M11 11.5V4a1.5 1.5 0 0 1 3 0v8" />
      <path d="M14 11.5V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3 15.5a1.6 1.6 0 0 1 2.6-1.8L8 16" />
    </>
  ),
  /** Seta entrando em uma porta — botão "Entrar". */
  login: (
    <>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path d="m10 17 5-5-5-5" />
      <path d="M15 12H3" />
    </>
  ),
  /** Seta para a direita. */
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  /** Pessoa. */
  user: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  /** Marca de verificação. */
  check: <path d="M20 6 9 17l-5-5" />,
  /** Voucher / cupom. */
  ticket: (
    <>
      <path d="M3 9a3 3 0 0 0 0 6v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a3 3 0 0 0 0-6V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
      <path d="M13 5v2M13 17v2M13 11v2" />
    </>
  ),
  /** Calendário. */
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  /** Sacola de compras — troca nas lojas. */
  bag: (
    <>
      <path d="M3 9h18l-1.5 11h-15z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </>
  ),
  /** Círculo de informação / alerta. */
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </>
  ),
  /** Documento. */
  file: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
    </>
  ),
  /** Marcador de mapa. */
  mapPin: (
    <>
      <path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  /** Seta para baixo — indicador das perguntas frequentes. */
  chevronDown: <path d="m6 9 6 6 6-6" />,
  /** Telefone. */
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  /** Envelope. */
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  /** Prédio da escola. */
  school: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
} satisfies Record<string, ReactNode>

/** Nomes de ícones disponíveis em {@link Icon}. */
export type IconName = keyof typeof ICON_SHAPES

/** Propriedades de {@link Icon}. */
export interface IconProps {
  /** Qual ícone desenhar. */
  name: IconName
  /** Largura e altura em pixels. Padrão: `20`. */
  size?: number
  /** Espessura do traço. Padrão: `2`. */
  strokeWidth?: number
  /**
   * Classes extras. A cor do traço segue a cor do texto (`currentColor`),
   * então use utilitários como `text-brand` para colorir.
   */
  className?: string
}

/**
 * Ícone de traço (estilo outline) em SVG.
 *
 * É sempre decorativo (`aria-hidden`): o significado deve estar no texto
 * ao lado, nunca apenas no ícone.
 *
 * @example
 * <Icon name="calendar" size={18} className="text-brand" />
 */
export function Icon({ name, size = 20, strokeWidth = 2, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICON_SHAPES[name]}
    </svg>
  )
}
