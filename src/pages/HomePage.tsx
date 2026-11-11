/**
 * @file Tela inicial pública do sistema de Fardamento Escolar.
 */
import { AccessibilityBar } from '../components/layout/AccessibilityBar'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { SkipLinks } from '../components/layout/SkipLinks'
import { ContactSection } from '../components/sections/ContactSection'
import { DocumentsSection } from '../components/sections/DocumentsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { HeroSection } from '../components/sections/HeroSection'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { KitsSection } from '../components/sections/KitsSection'
import { ProgramSection } from '../components/sections/ProgramSection'
import { useAccessibility } from '../hooks/useAccessibility'

/**
 * Tela inicial.
 *
 * Página institucional que apresenta o programa e leva o usuário ao
 * sistema. Ordem do conteúdo:
 *
 * 1. Atalhos de teclado e barra de acessibilidade
 * 2. Cabeçalho (logotipo, menu, "Entrar")
 * 3. Hero · O programa · Como funciona · Kits · Documentos · Dúvidas · Atendimento
 * 4. Rodapé
 *
 * O elemento raiz (`.pg`) é o ponto único de controle de acessibilidade:
 * - `style.fontSize` define o tamanho base; toda a tipografia usa `em` e
 *   escala a partir dele;
 * - a classe `hc` troca as variáveis de cor para o tema de alto contraste.
 */
export function HomePage() {
  const accessibility = useAccessibility()

  return (
    <div
      className={`pg relative min-w-0 bg-background font-sans leading-normal text-foreground ${
        accessibility.highContrast ? 'hc' : ''
      }`}
      style={{ fontSize: accessibility.fontSize }}
    >
      <SkipLinks />
      <AccessibilityBar controls={accessibility} />
      <Header />

      <main id="conteudo">
        <HeroSection />
        <ProgramSection />
        <HowItWorksSection />
        <KitsSection />
        <DocumentsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
