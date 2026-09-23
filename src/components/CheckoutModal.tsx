import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, QrCode, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { BRAND_LINKS } from '../data/brandAssets';
import { UserStudent } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'BRL' | 'USD' | 'EUR';
  onPaymentSuccess: (studentDetails?: Partial<UserStudent>) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  currency,
  onPaymentSuccess
}) => {
  const [payMethod, setPayMethod] = useState<'card' | 'pix' | 'link'>('card');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const prices = {
    BRL: { display: "R$ 199,99", code: "BRL" },
    USD: { display: "$ 39.90", code: "USD" },
    EUR: { display: "€ 36.50", code: "EUR" }
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
      onPaymentSuccess({
        name: fullName || "Aluno VIP",
        email: email || "aluno.vip@nomadedigital.com",
        isLoggedIn: true,
        unlockedModuleIds: [1, 2, 3] // fully unlocks all 3 modules on payment
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950 p-6 sm:p-8 shadow-2xl shadow-cyan-500/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {isDone ? (
          <div className="text-center py-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white">
              Matrícula Confirmada!
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Parabéns! Seu acesso aos <strong>3 Módulos</strong>, ferramentas, simuladores de vistos e comunidade global está 100% liberado.
            </p>
            <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 text-xs text-cyan-200">
              ✓ E-mail de confirmação enviado para seu endereço.<br/>
              ✓ Acesso vitalício aos materiais e atualizações 2026.
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-black hover:opacity-90 transition-all"
            >
              Entrar na Área do Aluno
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-slate-800 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Gateway Global de Pagamento Multimoeda
              </span>
              <h3 className="font-['Syne'] text-2xl font-extrabold text-white mt-1">
                Curso Viva da Internet Enquanto Viaja
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {prices[currency].display}
                </span>
                <span className="text-xs text-slate-400">
                  (Pagamento único · Acesso completo)
                </span>
              </div>
            </div>

            {/* Payment Options Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setPayMethod('card')}
                className={`flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                  payMethod === 'card'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                <CreditCard className="h-4 w-4" />
                <span>Cartão</span>
              </button>

              <button
                type="button"
                onClick={() => setPayMethod('pix')}
                className={`flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                  payMethod === 'pix'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                <QrCode className="h-4 w-4" />
                <span>PIX</span>
              </button>

              <button
                type="button"
                onClick={() => setPayMethod('link')}
                className={`flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                  payMethod === 'link'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                <ExternalLink className="h-4 w-4" />
                <span>InfinitePay</span>
              </button>
            </div>

            {payMethod === 'link' ? (
              <div className="space-y-4 rounded-xl border border-cyan-500/30 bg-slate-900/90 p-4 text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Checkout Oficial InfinitePay</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Você será redirecionado para o link seguro oficial com parcelamento e confirmação imediata.
                  </p>
                </div>
                <a
                  href={BRAND_LINKS.infinitePayCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/30 hover:opacity-95"
                >
                  <span>Abrir Checkout InfinitePay (R$ 199,99)</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : payMethod === 'pix' ? (
              <div className="space-y-4 rounded-xl border border-emerald-500/30 bg-slate-900/90 p-4 text-center">
                <div className="mx-auto w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-full h-full border-4 border-dashed border-slate-900 flex flex-col items-center justify-center text-slate-900 font-bold text-[10px]">
                    <QrCode className="h-10 w-10 text-slate-800" />
                    <span>PIX INSTANTÂNEO</span>
                    <span className="text-[8px] text-slate-600">R$ 199,99</span>
                  </div>
                </div>
                <div className="text-xs text-slate-300">
                  <p className="font-semibold text-emerald-400">Chave Copia e Cola Gerada:</p>
                  <code className="mt-1 block rounded bg-black/60 p-2 font-mono text-[10px] text-slate-400 break-all select-all">
                    00020126580014BR.GOV.BCB.PIX0136natalvipturismo@infinitepay5204000053039865406199.995802BR5925NATAL VIP TURISMO6009NATAL62070503***6304E8A2
                  </code>
                </div>
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  disabled={isProcessing}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>{isProcessing ? 'Confirmando no Banco Central...' : 'Já fiz o PIX (Liberar Acesso)'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nome Completo do Aluno
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    E-mail para Recebimento de Acesso
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Número do Cartão de Crédito
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    placeholder="•••• •••• •••• ••••"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Validade (MM/AA)
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      value={cardExpiry}
                      onChange={e => setCardExpiry(e.target.value)}
                      placeholder="12/28"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      CVV
                    </label>
                    <input
                      type="password"
                      required
                      maxLength={4}
                      value={cardCvv}
                      onChange={e => setCardCvv(e.target.value)}
                      placeholder="•••"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>
                    {isProcessing ? 'Processando transação segura...' : `Pagar ${prices[currency].display} e Desbloquear Tudo`}
                  </span>
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Transação criptografada SSL 256 bits · Garantia incondicional de 7 dias</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
