/**
 * @file Conteúdo textual da tela inicial.
 *
 * Todo texto que se repete em listas (menu, passos, kits, documentos,
 * perguntas, canais, rodapé) fica aqui, separado da marcação. Para alterar
 * um texto ou acrescentar um item, edite este arquivo — os componentes não
 * precisam mudar.
 *
 * Valores entre colchetes, como `[DATA LIMITE]`, são marcadores do protótipo
 * que ainda aguardam a informação oficial da Secretaria.
 */
import type { IconName } from '../components/ui/Icon'

/** Link de navegação (menu ou rodapé). */
export interface NavLink {
  /** Texto exibido. */
  label: string
  /** Destino: âncora da página (`#kits`) ou URL. */
  href: string
}

/** Linha do cartão "O programa em resumo". */
export interface SummaryItem {
  icon: IconName
  /** Pergunta curta (ex.: "Quanto custa"). */
  term: string
  /** Resposta. */
  description: string
}

/** Passo da seção "Como funciona". */
export interface Step {
  title: string
  description: string
}

/** Célula da faixa de prazos. */
export interface Deadline {
  icon: IconName
  title: string
  description: string
}

/** Kit de fardamento de uma etapa de ensino. */
export interface Kit {
  /** Etapa de ensino (ex.: "Ensino Médio"). */
  title: string
  /** Peças que compõem o kit. */
  items: string[]
}

/** Item da lista "Documentos e legislação". */
export interface DocumentLink {
  icon: IconName
  title: string
  /** Informação secundária (formato, tamanho ou data). */
  meta: string
  /** Texto da ação à direita (ex.: "Baixar"). */
  action: string
  href: string
}

/** Pergunta frequente. */
export interface FaqItem {
  question: string
  answer: string
}

/** Canal de atendimento. */
export interface ContactChannel {
  icon: IconName
  title: string
  description: string
}

/** Coluna de links do rodapé. */
export interface FooterColumn {
  /** Título da coluna; também usado como `aria-label` do `<nav>`. */
  title: string
  links: NavLink[]
}

/** Endereço do VLibras (tradução para Libras). */
export const VLIBRAS_URL = 'https://www.gov.br/governodigital/pt-br/vlibras'

/** Destino dos botões "Entrar" e "Acessar o sistema" (tela de login ainda não existe). */
export const LOGIN_URL = '#'

/** Itens do menu principal, no cabeçalho. */
export const MAIN_NAV: NavLink[] = [
  { label: 'O programa', href: '#programa' },
  { label: 'Como funciona', href: '#como' },
  { label: 'Kits', href: '#kits' },
  { label: 'Documentos', href: '#documentos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Atendimento', href: '#atendimento' },
]

/** Linhas do cartão "O programa em resumo" (Hero). */
export const PROGRAM_SUMMARY: SummaryItem[] = [
  {
    icon: 'user',
    term: 'Quem tem direito',
    description: 'Estudantes matriculados na rede estadual',
  },
  { icon: 'check', term: 'Quanto custa', description: 'Gratuito para as famílias' },
  {
    icon: 'ticket',
    term: 'Como recebe',
    description: 'Voucher digital trocado em loja credenciada',
  },
  {
    icon: 'calendar',
    term: 'Período de troca',
    description: '[DATA INÍCIO] a [DATA LIMITE]',
  },
]

/** Critérios do cartão "Quem tem direito" (seção O programa). */
export const ELIGIBILITY: string[] = [
  'Estudantes com matrícula ativa na rede estadual em 2027',
  'Ensino Fundamental, Ensino Médio e EJA',
]

/** Passos da seção "Como funciona", na ordem em que acontecem. */
export const STEPS: Step[] = [
  {
    title: 'Acesse o sistema',
    description: 'O responsável ou o estudante entra no sistema.',
  },
  {
    title: 'Emita o voucher',
    description:
      'O voucher tem um código único e pode ser apresentado no celular ou impresso.',
  },
  {
    title: 'Verifique a empresa',
    description: 'Verifique a empresa e o endereço para realizar a coleta do fardamento.',
  },
  {
    title: 'Retire o fardamento',
    description: 'A loja valida o código e entrega o kit.',
  },
]

/** Faixa de prazos exibida abaixo dos passos. */
export const DEADLINES: Deadline[] = [
  {
    icon: 'calendar',
    title: 'Emissão do voucher',
    description: '[DATA INÍCIO] a [DATA FIM]',
  },
  { icon: 'bag', title: 'Troca nas lojas', description: 'Até [DATA LIMITE]' },
  {
    icon: 'info',
    title: 'Problemas para acessar?',
    description: 'Clique aqui para acessar o suporte.',
  },
]

/** Composição dos kits por etapa de ensino. */
export const KITS: Kit[] = [
  {
    title: 'Ensino Fundamental - Anos Iniciais',
    items: ['[QTD] camisetas', '[QTD] bermudas ou shorts-saia', '[ITEM ADICIONAL]'],
  },
  {
    title: 'Ensino Fundamental - Anos Finais',
    items: ['[QTD] camisetas', '[QTD] calças ou bermudas', '[ITEM ADICIONAL]'],
  },
  {
    title: 'Ensino Médio',
    items: ['[QTD] camisetas', '[QTD] calças', '[ITEM ADICIONAL]'],
  },
  { title: 'EJA', items: ['[QTD] camisetas', '[ITEM ADICIONAL]'] },
]

/** Documentos oficiais do programa. */
export const DOCUMENTS: DocumentLink[] = [
  {
    icon: 'file',
    title: '[LEI/DECRETO Nº] — institui o programa de fardamento',
    meta: 'PDF · [TAMANHO]',
    action: 'Baixar',
    href: '#',
  },
  {
    icon: 'file',
    title: 'Edital de credenciamento de lojas [Nº/ANO]',
    meta: 'PDF · [TAMANHO]',
    action: 'Baixar',
    href: '#',
  },
  {
    icon: 'file',
    title: 'Guia do responsável: como emitir e trocar o voucher',
    meta: 'PDF · [TAMANHO]',
    action: 'Baixar',
    href: '#',
  },
  {
    icon: 'mapPin',
    title: 'Relação de lojas credenciadas por município',
    meta: 'Atualizada em [DATA]',
    action: 'Consultar',
    href: '#',
  },
]

/** Perguntas frequentes. A primeira aparece aberta ao carregar a página. */
export const FAQ: FaqItem[] = [
  {
    question: 'Quem tem direito ao fardamento?',
    answer:
      'Estudantes com matrícula ativa na rede estadual do Acre no ano letivo vigente. [CONFIRMAR CRITÉRIOS COM A SEE]',
  },
  {
    question: 'Preciso pagar alguma coisa?',
    answer:
      'Não. O voucher cobre as peças do kit e a loja não pode cobrar diferença pelos itens previstos.',
  },
  {
    question: 'Como vejo o voucher do estudante?',
    answer:
      'Clique em "Entrar", no topo da página, e acesse o sistema. O voucher e a situação do estudante aparecem após o login.',
  },
  {
    question: 'Os dados do estudante estão errados. O que faço?',
    answer:
      'Procure a secretaria da escola para corrigir o cadastro. Os dados vêm do sistema de matrícula da rede.',
  },
  {
    question: 'Como uma loja pode se credenciar?',
    answer:
      'O credenciamento segue edital próprio da Secretaria, disponível em "Documentos e legislação".',
  },
]

/** Canais de atendimento. */
export const CONTACT_CHANNELS: ContactChannel[] = [
  { icon: 'phone', title: 'Telefone', description: '+55 68 9901-6559 · [HORÁRIO]' },
  { icon: 'mail', title: 'E-mail', description: '[E-MAIL DO PROGRAMA]' },
  {
    icon: 'school',
    title: 'Na escola',
    description: 'Secretaria da unidade onde o estudante está matriculado',
  },
]

/** Colunas de links do rodapé. */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Mapa do site',
    links: [
      { label: 'O programa', href: '#programa' },
      { label: 'Como funciona', href: '#como' },
      { label: 'Kits', href: '#kits' },
      { label: 'Documentos e legislação', href: '#documentos' },
      { label: 'Dúvidas', href: '#duvidas' },
      { label: 'Atendimento', href: '#atendimento' },
    ],
  },
  {
    title: 'Transparência',
    links: [
      { label: 'Portal da Transparência', href: '#' },
      { label: 'Acesso à informação', href: '#' },
      { label: 'Diário Oficial', href: '#' },
    ],
  },
  {
    title: 'Sobre o site',
    links: [
      { label: 'Declaração de acessibilidade', href: '#' },
      { label: 'Política de privacidade (LGPD)', href: '#' },
      { label: 'Termos de uso', href: '#' },
    ],
  },
]
