import React from 'react';
import { User, Bell, ShieldCheck, Globe, BookOpen, Award, Sparkles, Plane, Compass } from 'lucide-react';
import { UserStudent, AppNotification } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  student: UserStudent;
  onOpenAuth: () => void;
  onOpenCheckout: () => void;
  notifications: AppNotification[];
  onOpenNotifications: () => void;
  currency: 'BRL' | 'USD' | 'EUR';
  setCurrency: (c: 'BRL' | 'USD' | 'EUR') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  student,
  onOpenAuth,
  onOpenCheckout,
  notifications,
  onOpenNotifications,
  currency,
  setCurrency
}) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/30 bg-[#020617]/95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      
      {/* Top Main Showcase Box: Fixed Logo with "VIVA O EXTRAORDINÁRIO" Filling Maximum Box */}
      <div className="border-b border-emerald-500/20 bg-gradient-to-r from-emerald-950/70 via-slate-950/90 to-emerald-950/70 px-3 py-2 sm:py-2.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          
          {/* Caixa Preenchida em Tamanho Máximo para o Logo e Título */}
          <div 
            onClick={() => setCurrentTab('landing')}
            className="group flex-1 flex items-center justify-between gap-3 sm:gap-4 rounded-xl border border-emerald-400/40 bg-gradient-to-r from-emerald-900/40 via-[#03150d]/80 to-slate-900/60 p-1.5 sm:p-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-emerald-300 transition-all cursor-pointer"
          >
            {/* Logo Emblem Icon */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
              <img
                src="/src/assets/images/nomad_vip_logo_1790168682092.jpg"
                alt="Digital Nômade VIP Logo"
                referrerPolicy="no-referrer"
                className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-amber-300/80 shadow-md shadow-emerald-500/30"
              />
            </div>

            {/* "VIVA O EXTRAORDINÁRIO" Title at Maximum Size Filling The Box */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-amber-400/20 px-1.5 py-0.5 text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-amber-300 border border-amber-400/30">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  VIP EXPERIENCE
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold text-emerald-400 tracking-wider">
                  DIGITAL NOMADE GLOBAL
                </span>
              </div>
              <h1 className="font-['Syne'] text-base sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight sm:tracking-wider uppercase text-white leading-tight truncate">
                <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(52,211,153,0.5)]">
                  VIVA O EXTRAORDINÁRIO
                </span>
              </h1>
            </div>

            {/* Right Badge inside Box */}
            <div className="hidden lg:flex flex-col items-end text-right pr-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Jornada Nômade 3 Módulos
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                100% Prático · Do Zero à Liberdade
              </span>
            </div>
          </div>

          {/* Quick Right Actions (Currency + Primary CTA) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Currency Selector */}
            <div className="flex rounded-lg border border-slate-700 bg-slate-900/90 p-0.5 text-xs shadow-inner" role="group" aria-label="Selecionar moeda">
              {(['BRL', 'USD', 'EUR'] as const).map(c => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  aria-pressed={currency === c}
                  className={`cursor-pointer rounded px-2.5 py-1 font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    currency === c 
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={`Alternar moeda para ${c}`}
                  aria-label={`Moeda ${c}`}
                >
                  {c === 'BRL' ? 'R$' : c === 'USD' ? '$' : '€'}
                </button>
              ))}
            </div>

            {/* Matrícula VIP CTA Button */}
            <button
              onClick={onOpenCheckout}
              className="cursor-pointer flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-black text-black shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <Compass className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xs:inline">Matrícula VIP</span>
              <span className="xs:hidden">Entrar</span>
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Sub-bar */}
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 sm:gap-4 text-xs sm:text-sm font-semibold" aria-label="Navegação principal">
          <button
            onClick={() => setCurrentTab('landing')}
            aria-current={currentTab === 'landing' ? 'page' : undefined}
            className={`cursor-pointer transition-colors py-1.5 px-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 hover:text-emerald-400 ${
              currentTab === 'landing' ? 'text-emerald-400 bg-emerald-500/15 font-bold' : 'text-slate-300'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setCurrentTab('modules')}
            aria-current={currentTab === 'modules' ? 'page' : undefined}
            className={`cursor-pointer flex items-center gap-1.5 transition-colors py-1.5 px-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 hover:text-emerald-400 ${
              currentTab === 'modules' ? 'text-emerald-400 bg-emerald-500/15 font-bold' : 'text-slate-300'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            <span>3 Módulos</span>
          </button>
          <button
            onClick={() => setCurrentTab('tools')}
            aria-current={currentTab === 'tools' ? 'page' : undefined}
            className={`cursor-pointer flex items-center gap-1.5 transition-colors py-1.5 px-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 hover:text-emerald-400 ${
              currentTab === 'tools' ? 'text-emerald-400 bg-emerald-500/15 font-bold' : 'text-slate-300'
            }`}
          >
            <Globe className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
            <span className="hidden sm:inline">Ferramentas & Vistos</span>
            <span className="sm:hidden">Vistos</span>
          </button>
          <button
            onClick={() => setCurrentTab('community')}
            aria-current={currentTab === 'community' ? 'page' : undefined}
            className={`cursor-pointer flex items-center gap-1.5 transition-colors py-1.5 px-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 hover:text-emerald-400 ${
              currentTab === 'community' ? 'text-emerald-400 bg-emerald-500/15 font-bold' : 'text-slate-300'
            }`}
          >
            <Award className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
            <span className="hidden sm:inline">Comunidade Global</span>
            <span className="sm:hidden">Comunidade</span>
          </button>
          <button
            onClick={() => setCurrentTab('admin')}
            aria-current={currentTab === 'admin' ? 'page' : undefined}
            className={`cursor-pointer flex items-center gap-1.5 transition-colors py-1.5 px-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 hover:text-amber-400 ${
              currentTab === 'admin' ? 'text-amber-400 bg-amber-500/15 font-bold' : 'text-slate-400'
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
            <span className="hidden md:inline">Painel Instrutor</span>
            <span className="md:hidden">Admin</span>
          </button>
        </nav>

        {/* User Account & Notifications */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            aria-label={`Notificações${unreadCount > 0 ? ` (${unreadCount} não lidas)` : ''}`}
            className="cursor-pointer relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Notificações em tempo real"
          >
            <Bell className="h-4 w-4" aria-hidden="true" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-black text-black">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Profile */}
          {student.isLoggedIn ? (
            <button
              onClick={() => setCurrentTab('dashboard')}
              aria-label={`Perfil de ${student.name}`}
              className="cursor-pointer flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 text-[10px] font-black text-black">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden sm:inline truncate max-w-[110px]">{student.name}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Entrar</span>
            </button>
          )}
        </div>

      </div>

    </header>
  );
};
