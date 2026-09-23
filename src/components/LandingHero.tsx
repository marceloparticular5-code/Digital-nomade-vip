import React from 'react';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Globe, Laptop, 
  DollarSign, Sparkles, ExternalLink, Calendar, Users, Target, Briefcase, Compass
} from 'lucide-react';
import { BRAND_LINKS, PARTNERS } from '../data/brandAssets';
import { CHALLENGE_21_DAYS } from '../data/courseData';
import { BACKGROUND_SLIDES } from './AnimatedBackgroundSlides';

interface LandingHeroProps {
  onStartCourse: () => void;
  onOpenCheckout: () => void;
  onOpenTools: () => void;
  currency: 'BRL' | 'USD' | 'EUR';
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStartCourse,
  onOpenCheckout,
  onOpenTools,
  currency
}) => {
  const priceDisplay = currency === 'BRL' ? 'R$ 199,99' : currency === 'USD' ? '$ 39.90' : '€ 36.50';

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14">
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          {/* Top Logo & Title Highlight Banner */}
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/40 bg-slate-950/80 px-4 py-1.5 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <img
              src="/src/assets/images/nomad_vip_logo_1790168682092.jpg"
              alt="Digital Nomade VIP"
              referrerPolicy="no-referrer"
              className="h-6 w-6 rounded-full border border-amber-400 object-cover"
            />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-black tracking-wider text-emerald-300 uppercase font-['Syne']">
              Digital Nômade VIP · Formação Oficial 2026
            </span>
          </div>

          <h1 className="font-['Syne'] text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            <span className="block text-slate-100 drop-shadow-md">
              VIVA DA INTERNET
            </span>
            <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(52,211,153,0.5)]">
              VIVA O EXTRAORDINÁRIO
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            Jornada do zero ao crescimento profissional e pessoal. Aprenda a transformar suas habilidades em renda digital, fechar clientes e construir uma rotina sustentável em qualquer lugar do mundo.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onStartCourse}
              className="cursor-pointer flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 px-6 py-3.5 text-sm font-black text-black shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span>Acessar Módulo 1 (Start)</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              onClick={onOpenCheckout}
              className="cursor-pointer flex items-center gap-2 rounded-xl border border-emerald-500/60 bg-slate-900/90 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-emerald-400 hover:bg-slate-800 shadow-md shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Sparkles className="h-4 w-4 text-amber-400" aria-hidden="true" />
              <span>Matrícula VIP · {priceDisplay}</span>
            </button>

            <button
              onClick={onOpenTools}
              className="cursor-pointer flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white hover:border-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Globe className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              <span>Simulador de Vistos & Custos</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 21 Aulas Práticas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Mapa Start & Entregáveis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Suporte Acadêmico 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Garantia Incondicional 7 Dias
            </span>
          </div>

        </div>
      </section>

      {/* Interactive Visual Themes Gallery (Based on the 5 background slides) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                Pilares do Nômade Digital
              </span>
              <h3 className="font-['Syne'] text-xl sm:text-2xl font-black text-white">
                Os 5 Estados da Jornada Extraordinária
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Imagens animadas de fundo sincronizadas em tempo real com a experiência de aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {BACKGROUND_SLIDES.map((slide, idx) => (
              <div 
                key={slide.id}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-3 hover:border-emerald-500/60 transition-all cursor-pointer"
              >
                <div className="relative h-28 w-full overflow-hidden rounded-lg mb-2.5">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-1.5 left-1.5 rounded bg-emerald-500/80 px-1.5 py-0.5 text-[9px] font-black text-black">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-['Syne'] text-xs font-bold text-white group-hover:text-emerald-300">
                  {slide.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  {slide.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Modules High-Impact Overview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            Estrutura Pedagógica
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Os 3 Módulos da Sua Transformação
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Cada módulo destrava a etapa seguinte após a validação da atividade prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-300 border border-emerald-500/30">
                  Módulo 1
                </span>
                <span className="text-emerald-400 font-bold">Liberado no Início</span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold text-white mb-2">
                START: Do Zero à Primeira Rota
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Diagnóstico de habilidades, mentalidade de CEO, cálculo do Número da Liberdade e escolha da primeira rota digital.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 border-t border-slate-800 pt-3">
                <div>✓ Aula 1: O que significa viver da internet</div>
                <div>✓ Aula 2: Diagnóstico pessoal e profissional</div>
                <div>✓ Aula 3: O número da liberdade (Custos)</div>
                <div>✓ Aula 4: Mentalidade de CEO</div>
                <div>✓ Aula 5: Escolha da primeira rota</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                Entregável: Mapa Start
              </span>
              <button
                onClick={onStartCourse}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Acessar</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="rounded bg-slate-800 px-2 py-0.5 font-bold text-slate-300">
                  Módulo 2
                </span>
                <span className="text-amber-400 font-bold">Liberação Pedagógica</span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold text-white mb-2">
                DESCOBRIMENTO: Da Habilidade à Oportunidade
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Mapeamento prático de modelos: prestação de serviços locais, freelancing em dólar, autoridade, afiliados e e-commerce enxuto.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 border-t border-slate-800 pt-3">
                <div>✓ Aula 6: Serviços para pequenas empresas locais</div>
                <div>✓ Aula 7: Freelancer nacional e internacional</div>
                <div>✓ Aula 8: Conteúdo e autoridade digital</div>
                <div>✓ Aula 9: Afiliados com responsabilidade</div>
                <div>✓ Aula 10: Produtos digitais e mentorias</div>
                <div>✓ Aula 11: E-commerce enxuto e dropshipping</div>
                <div>✓ Aula 12: Como escolher o modelo ideal</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                Entregável: Matriz Oportunidades
              </span>
              <span className="text-[10px] text-slate-500">Módulo 2</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="rounded bg-slate-800 px-2 py-0.5 font-bold text-slate-300">
                  Módulo 3
                </span>
                <span className="text-amber-400 font-bold">Liberação Pedagógica</span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold text-white mb-2">
                EXECUÇÃO: Viver o Extraordinário
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Construção da oferta, prospecção sem spam, rotina de viagem com Starlink/eSIM, fusos, visto e plano de 90 dias.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 border-t border-slate-800 pt-3">
                <div>✓ Aula 13: Criando a primeira oferta</div>
                <div>✓ Aula 14: Como conseguir os primeiros clientes</div>
                <div>✓ Aula 15: Vendas e follow-up responsável</div>
                <div>✓ Aula 16: Entregando enquanto viaja</div>
                <div>✓ Aula 17: Rotina, fusos e produtividade</div>
                <div>✓ Aula 18: Finanças, segurança e vistos</div>
                <div>✓ Aula 19: O plano dos 90 dias</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-amber-400 font-semibold">
                Entregável: Desafio 21 Dias
              </span>
              <span className="text-[10px] text-slate-500">Módulo 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* 21-Day Step-by-Step Practical Routine */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Acompanhamento Diário
              </span>
              <h3 className="font-['Syne'] text-2xl font-bold text-white">
                O Desafio dos 21 Dias
              </h3>
            </div>
            <span className="rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
              Rotina Passo a Passo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <span className="text-xs font-bold text-cyan-400">Semana 1 · Dias 1 ao 7</span>
              <h4 className="font-['Syne'] text-sm font-bold text-white">Fundação e Direção</h4>
              <p className="text-xs text-slate-400">
                Diagnóstico de habilidades, cálculo exato do custo de vida, definição da primeira rota e criação da oferta.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <span className="text-xs font-bold text-emerald-400">Semana 2 · Dias 8 ao 14</span>
              <h4 className="font-['Syne'] text-sm font-bold text-white">Validação & Prospecção</h4>
              <p className="text-xs text-slate-400">
                Montagem de portfólio enxuto, contato com 30 leads potenciais sem constrangimento e acompanhamento ativo.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <span className="text-xs font-bold text-amber-400">Semana 3 · Dias 15 ao 21</span>
              <h4 className="font-['Syne'] text-sm font-bold text-white">Execução e Rotina Nômade</h4>
              <p className="text-xs text-slate-400">
                Primeiro fechamento, entrega profissional, configuração de finanças internacionais e plano de viagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Tier Income Strategy */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            Arquitetura Financeira
          </span>
          <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white mt-1">
            As 3 Camadas de Renda do Nômade Digital
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Como sair da instabilidade e criar uma renda que cresce mês a mês enquanto você viaja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Camada 1</span>
            <h4 className="font-['Syne'] text-lg font-bold text-white">Dinheiro Rápido (Projetos)</h4>
            <p className="text-xs text-slate-300">
              Serviços pontuais para clientes locais e internacionais: criação de sites, edição, tráfego ou consultorias pontuais.
            </p>
            <div className="text-xs font-mono font-bold text-cyan-300 pt-2 border-t border-slate-800">
              Gera caixa imediato (R$ 500 a R$ 3.000+)
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6 space-y-3 shadow-lg backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Camada 2 · O Pilar do Nômade</span>
            <h4 className="font-['Syne'] text-lg font-bold text-white">Renda Recorrente (Retainers)</h4>
            <p className="text-xs text-slate-300">
              Contratos mensais de suporte, gestão de redes sociais, manutenção e acompanhamento que caem todo mês na sua conta.
            </p>
            <div className="text-xs font-mono font-bold text-emerald-400 pt-2 border-t border-slate-800">
              Previsibilidade para viajar com tranquilidade
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Camada 3</span>
            <h4 className="font-['Syne'] text-lg font-bold text-white">Escala & Produtos Digitais</h4>
            <p className="text-xs text-slate-300">
              Templates, produtos digitais, e-books e afiliações de ferramentas com comissão automática em dólar e real.
            </p>
            <div className="text-xs font-mono font-bold text-amber-300 pt-2 border-t border-slate-800">
              Liberdade de tempo sem limites geográficos
            </div>
          </div>
        </div>
      </section>

      {/* CEO & Ecosystem Authority Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 rounded-2xl border border-emerald-500/40 bg-slate-900/90 p-6 text-center shadow-xl backdrop-blur-md">
            <div className="relative mx-auto mb-4 h-24 w-24">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 blur-sm opacity-70" />
              <img
                src="/src/assets/images/nomad_vip_logo_1790168682092.jpg"
                alt="Marcelo Rodriguesga - Digital Nomade VIP"
                referrerPolicy="no-referrer"
                className="relative h-24 w-24 rounded-full object-cover border-2 border-amber-300 shadow-md"
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
              Estrategista & Fundador
            </span>
            <h3 className="font-['Syne'] text-xl font-black text-white mt-1">
              Marcelo Rodriguesga
            </h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              15 anos vivendo do digital, operando ecossistemas de turismo, tecnologia e serviços online de diferentes partes do mundo.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Experiência Real de Mercado
              </span>
              <h3 className="font-['Syne'] text-2xl font-bold text-white mt-1">
                Construído por quem vive na prática
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Este curso não é teoria tirada de fóruns. É o resultado de operações diárias em turismo, e-commerce, tecnologia e atendimento que funcionam 100% online.
              </p>
            </div>

            {/* Partner companies cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {PARTNERS.map((p, idx) => (
                <a
                  key={idx}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 transition-all hover:border-emerald-500/50 hover:bg-slate-900 flex flex-col justify-between group backdrop-blur-sm"
                >
                  <div>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase">{p.category}</span>
                    <h5 className="font-['Syne'] text-xs font-bold text-white mt-0.5 group-hover:text-emerald-300 flex items-center justify-between">
                      <span>{p.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{p.tagline}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section with InfinitePay Real Link & WhatsApp */}
      <section className="mx-auto max-w-4xl px-4 text-center">
        <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 p-8 sm:p-12 shadow-2xl shadow-emerald-500/10 space-y-6 backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            Acesso Imediato & Completo
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-5xl font-black text-white">
            Pronto para viver o extraordinário?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Garanta sua vaga com os 3 módulos completos, Mapa Start, Matriz de Oportunidades, comunidade exclusiva e suporte 24/7.
          </p>

          <div className="pt-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
              {priceDisplay}
            </span>
            <span className="block text-xs text-slate-400 mt-1">
              Pagamento único via InfinitePay (Cartão ou PIX)
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={onOpenCheckout}
              className="cursor-pointer flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 px-8 py-4 text-sm font-black text-black shadow-lg shadow-emerald-500/30 hover:opacity-95 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span>Matricular Agora ({priceDisplay})</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={BRAND_LINKS.whatsappVip}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-4 text-sm font-bold text-white hover:border-emerald-500 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Grupo VIP no WhatsApp</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
