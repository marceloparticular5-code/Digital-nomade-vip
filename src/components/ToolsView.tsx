import React, { useState } from 'react';
import { 
  Calculator, CheckSquare, Globe2, ShieldCheck, Clock, 
  DollarSign, Wifi, Laptop, Key, CreditCard, ExternalLink, ArrowRight 
} from 'lucide-react';
import { TECH_CHECKLIST, NOMAD_VISAS, TIMEZONE_HUBS } from '../data/toolsData';

interface ToolsViewProps {
  currency: 'BRL' | 'USD' | 'EUR';
  onOpenCheckout: () => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ currency, onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<'budget' | 'checklist' | 'visas' | 'timezones'>('budget');
  
  // Freedom Calculator State
  const [housingCost, setHousingCost] = useState<number>(currency === 'BRL' ? 2500 : 500);
  const [foodCost, setFoodCost] = useState<number>(currency === 'BRL' ? 1400 : 300);
  const [healthInsurance, setHealthInsurance] = useState<number>(currency === 'BRL' ? 350 : 70);
  const [coworkingSim, setCoworkingSim] = useState<number>(currency === 'BRL' ? 450 : 90);
  const [transportLeisure, setTransportLeisure] = useState<number>(currency === 'BRL' ? 800 : 150);
  const [emergencyBufferMonths, setEmergencyBufferMonths] = useState<number>(6);

  // Checklist checked items state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    c1: true,
    h1: true,
    s1: true,
    f1: true
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Math calculations
  const monthlyEssentialTotal = housingCost + foodCost + healthInsurance + coworkingSim + transportLeisure;
  const emergencyReserveTotal = monthlyEssentialTotal * emergencyBufferMonths;
  const targetMonthlyGross = Math.round(monthlyEssentialTotal * 1.35); // 35% margin for taxes & reinvestment

  const currencySymbol = currency === 'BRL' ? 'R$' : currency === 'USD' ? '$' : '€';

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
          Kit de Sobrevivência & Planejamento Nômade
        </span>
        <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Infraestrutura, Vistos & Orçamento
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Ferramentas práticas para calcular o seu Número da Liberdade, blindar sua conectividade e escolher destinos compatíveis com seu fuso e orçamento.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900/90 p-1 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('budget')}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
              activeTab === 'budget'
                ? 'bg-cyan-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="h-4 w-4" />
            <span>Número da Liberdade</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
              activeTab === 'checklist'
                ? 'bg-cyan-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            <span>Checklist Técnico</span>
          </button>
          <button
            onClick={() => setActiveTab('visas')}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
              activeTab === 'visas'
                ? 'bg-cyan-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe2 className="h-4 w-4" />
            <span>Guia de Vistos</span>
          </button>
          <button
            onClick={() => setActiveTab('timezones')}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
              activeTab === 'timezones'
                ? 'bg-cyan-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>Fusos & Cidades</span>
          </button>
        </div>
      </div>

      {/* TAB 1: BUDGET CALCULATOR */}
      {activeTab === 'budget' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
            <h3 className="font-['Syne'] text-lg font-bold text-white border-b border-slate-800 pb-3">
              Calculadora de Custos Mensais
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Hospedagem / Aluguel ({currencySymbol})
                </label>
                <input
                  type="number"
                  value={housingCost}
                  onChange={e => setHousingCost(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Alimentação & Mercado ({currencySymbol})
                </label>
                <input
                  type="number"
                  value={foodCost}
                  onChange={e => setFoodCost(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Seguro Saúde Internacional ({currencySymbol})
                </label>
                <input
                  type="number"
                  value={healthInsurance}
                  onChange={e => setHealthInsurance(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Coworking + eSIM/Internet ({currencySymbol})
                </label>
                <input
                  type="number"
                  value={coworkingSim}
                  onChange={e => setCoworkingSim(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-300 font-medium mb-1">
                  Transporte, Lazer & Diversos ({currencySymbol})
                </label>
                <input
                  type="number"
                  value={transportLeisure}
                  onChange={e => setTransportLeisure(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-300 font-medium mb-1">
                  Meses de Reserva de Emergência: <strong className="text-cyan-400">{emergencyBufferMonths} meses</strong>
                </label>
                <input
                  type="range"
                  min={3}
                  max={12}
                  value={emergencyBufferMonths}
                  onChange={e => setEmergencyBufferMonths(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/60 to-slate-950 p-6 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Seu Número da Liberdade (NL)
              </span>
              <div className="mt-2 text-4xl font-extrabold font-mono text-white">
                {currencySymbol} {monthlyEssentialTotal.toLocaleString()}
                <span className="text-sm font-normal text-slate-400"> /mês</span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Custo mensal para viver e trabalhar confortavelmente no destino escolhido.
              </p>

              <div className="my-5 border-t border-cyan-500/20 pt-4 space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Reserva de Segurança Mínima ({emergencyBufferMonths} meses):</span>
                  <span className="font-mono font-bold text-amber-400">
                    {currencySymbol} {emergencyReserveTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Meta de Faturamento Bruto (Margem 35%):</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {currencySymbol} {targetMonthlyGross.toLocaleString()}/mês
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-black/60 p-3 text-[11px] text-slate-400">
                💡 <strong>Dica do Curso:</strong> Para atingir {currencySymbol} {targetMonthlyGross.toLocaleString()}, você precisa de apenas <strong>3 clientes</strong> pagando {currencySymbol} {Math.round(targetMonthlyGross / 3).toLocaleString()} por mês.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TECH & INFRASTRUCTURE CHECKLIST */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECH_CHECKLIST.map((section, sIdx) => (
              <div key={sIdx} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <h4 className="font-['Syne'] text-base font-bold text-cyan-300 border-b border-slate-800 pb-2">
                  {section.category}
                </h4>
                <div className="space-y-2.5">
                  {section.items.map(item => {
                    const checked = checkedItems[item.id] || false;
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`cursor-pointer rounded-xl border p-3 transition-all flex items-start gap-3 ${
                          checked
                            ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-200'
                            : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {}}
                          className="mt-1 h-4 w-4 rounded border-slate-700 text-cyan-500 focus:ring-cyan-400"
                        />
                        <div className="flex-1 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-white">
                            <span>{item.name}</span>
                            {item.critical && (
                              <span className="rounded bg-rose-500/20 px-1 py-0.2 text-[9px] text-rose-300 font-mono">
                                Obrigatório
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: NOMAD VISAS */}
      {activeTab === 'visas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NOMAD_VISAS.map((visa, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between shadow-lg hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{visa.flag}</span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300 font-bold">
                      Renda: US$ {visa.minMonthlyIncomeUSD.toLocaleString()}/mês
                    </span>
                  </div>

                  <h4 className="font-['Syne'] text-lg font-bold text-white mt-3">
                    {visa.country}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">{visa.visaName}</p>
                  <p className="text-xs text-slate-400 mt-1">Duração: {visa.duration}</p>

                  <div className="mt-4 border-t border-slate-800 pt-3">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Principais Requisitos:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {visa.keyRequirements.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">✓</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-2.5 text-[11px] text-slate-400">
                  ⚖ <strong>Regra Fiscal:</strong> {visa.taxOverview}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-200/90 text-center">
            ⚠️ <strong>Aviso Legal & Educativo:</strong> As regras de vistos e residência fiscal mudam periodicamente e variam por país. Este módulo fornece orientação estratégica; antes de viajar consulte os consulados oficiais e um contador especializado.
          </div>
        </div>
      )}

      {/* TAB 4: TIMEZONES & COWORKING HUBS */}
      {activeTab === 'timezones' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMEZONE_HUBS.map((hub, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-['Syne'] text-lg font-bold text-white">
                    {hub.city}
                  </h4>
                  <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 font-mono text-xs font-bold text-cyan-300">
                    {hub.utc}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{hub.country}</p>

                <div className="grid grid-cols-2 gap-2 border-t border-slate-800 pt-3 text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Fuso vs Brasil</span>
                    <strong className="text-slate-200 font-mono">{hub.lagBr}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Wi-Fi Médio</span>
                    <strong className="text-emerald-400 font-mono">{hub.wifiScore}</strong>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-2.5 text-xs text-slate-300 flex justify-between items-center">
                  <span>Custo Nômade Estimado:</span>
                  <strong className="text-cyan-400 font-mono">
                    R$ {hub.costPerMonthBRL.toLocaleString()}/mês
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
