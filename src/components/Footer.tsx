import React from 'react';
import { ExternalLink, Mail, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { BRAND_LINKS, PARTNERS } from '../data/brandAssets';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#020617] text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top: Brand info and quick links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-['Syne'] font-bold text-base">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-black text-xs font-black">
                ✈
              </span>
              <span>VIVA DA INTERNET</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Jornada do zero ao crescimento profissional e pessoal como nômade digital. Três módulos práticos e acompanhamento.
            </p>
            <div className="pt-1 text-[11px] text-slate-500">
              Fundador & Mentor: <strong className="text-slate-300">Marcelo Rodriguesga</strong>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-slate-200">
              Ecossistema & Parceiros
            </h4>
            <ul className="space-y-1.5 text-xs">
              {PARTNERS.map((p, idx) => (
                <li key={idx}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>{p.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-slate-200">
              Pagamentos & Suporte
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={BRAND_LINKS.infinitePayCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>Checkout Seguro InfinitePay</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={BRAND_LINKS.whatsappVip}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Comunidade VIP no WhatsApp</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_LINKS.supportEmail}`}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <Mail className="h-3 w-3" />
                  <span>{BRAND_LINKS.supportEmail}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-slate-200">
              Segurança & Conformidade
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Plataforma com criptografia SSL 256 bits e suporte a transações globais em BRL, USD e EUR. Acesso individualizado por e-mail com liberação pedagógica dos módulos.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-semibold pt-1">
              <ShieldCheck className="h-4 w-4" />
              <span>Garantia legal incondicional de 7 dias</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Viva da Internet Enquanto Viaja · Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Termos de Uso</span>
            <span>·</span>
            <span>Política de Privacidade</span>
            <span>·</span>
            <span>Regras da Comunidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
