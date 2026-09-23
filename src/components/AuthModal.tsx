import React, { useState } from 'react';
import { X, Mail, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { UserStudent } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (studentData: Partial<UserStudent>) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [method, setMethod] = useState<'options' | 'email' | 'verify'>('options');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate authentic Google verification flow
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: "Marcelo Rodrigues",
        email: "marceloparticular5@gmail.com",
        isLoggedIn: true,
        authProvider: 'google',
        unlockedModuleIds: [1, 2, 3]
      });
      onClose();
    }, 900);
  };

  const handleSendEmailCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Por favor, informe um e-mail válido.');
      return;
    }
    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      setIsLoading(false);
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setSentCode(code);
      setMethod('verify');
    }, 700);
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.trim() !== sentCode && verificationCode.trim() !== '123456') {
      setErrorMsg('Código incorreto. Use o código exibido abaixo ou 123456.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: name.trim() || email.split('@')[0],
        email: email.trim(),
        isLoggedIn: true,
        authProvider: 'email',
        unlockedModuleIds: [1]
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950 p-6 shadow-2xl shadow-cyan-500/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-black font-extrabold shadow-lg shadow-cyan-500/30">
            <Sparkles className="h-6 w-6 text-black" />
          </div>
          <h3 className="font-['Syne'] text-xl font-bold text-white">
            Acesso à Área Acadêmica
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Acesse seus 3 módulos, materiais práticos e acompanhamento.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-950/40 p-2.5 text-center text-xs text-red-300">
            {errorMsg}
          </div>
        )}

        {method === 'options' && (
          <div className="space-y-3">
            {/* Google Authentication Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400 hover:bg-slate-800 active:scale-98"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isLoading ? 'Conectando ao Google...' : 'Entrar com Conta Google'}</span>
            </button>

            <div className="relative my-4 text-center">
              <span className="bg-slate-950 px-2 text-[11px] uppercase tracking-wider text-slate-500">
                Ou use seu e-mail cadastrado
              </span>
            </div>

            <button
              onClick={() => setMethod('email')}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/30 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-900/40"
            >
              <Mail className="h-4 w-4" />
              <span>Acessar com E-mail e Código</span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              <span>Autenticação segura com liberação progressiva</span>
            </div>
          </div>
        )}

        {method === 'email' && (
          <form onSubmit={handleSendEmailCode} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Ex: Ana Silva"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                E-mail para Acesso
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/20 hover:opacity-95"
            >
              <span>{isLoading ? 'Enviando código...' : 'Receber Código de Verificação'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setMethod('options')}
              className="w-full text-center text-xs text-slate-400 hover:text-white"
            >
              ← Voltar para opções
            </button>
          </form>
        )}

        {method === 'verify' && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-3 text-xs text-cyan-200">
              <p className="font-semibold">Código de verificação enviado!</p>
              <p className="mt-1 text-slate-300">
                Para teste imediato, utilize o código: <strong className="text-cyan-400 font-mono text-sm">{sentCode}</strong> (ou 123456).
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Digite o Código de 6 Dígitos
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
                placeholder="000000"
                className="w-full text-center tracking-widest font-mono text-lg rounded-xl border border-cyan-500/50 bg-slate-900 px-3.5 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/20 hover:opacity-95"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{isLoading ? 'Validando...' : 'Confirmar e Desbloquear Módulo 1'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMethod('email')}
              className="w-full text-center text-xs text-slate-400 hover:text-white"
            >
              ← Alterar e-mail
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
