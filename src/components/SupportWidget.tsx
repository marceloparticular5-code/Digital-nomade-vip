import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_LINKS } from '../data/brandAssets';

interface SupportWidgetProps {
  onOpenCheckout: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickActions?: { label: string; action: () => void }[];
}

export const SupportWidget: React.FC<SupportWidgetProps> = ({ onOpenCheckout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m-1",
      sender: "bot",
      text: "Olá! Sou a assistente acadêmica 24/7 do Curso Viva da Internet Enquanto Viaja. Como posso te ajudar hoje?",
      time: "Agora"
    }
  ]);

  const handleSend = (userQuestion?: string) => {
    const textToSend = userQuestion || inputText;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: textToSend,
      time: "Agora"
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Instant intelligent student response
    setTimeout(() => {
      let botReply = "Excelente pergunta! Nosso curso cobre exatamente esse ponto no Módulo 1 (Mentalidade e Rota) e Módulo 3 (Rotina em Movimento).";
      const lower = textToSend.toLowerCase();

      if (lower.includes('visto') || lower.includes('pais') || lower.includes('país') || lower.includes('portugal') || lower.includes('espanha')) {
        botReply = "Temos um Guia Completo de Vistos na aba 'Ferramentas & Vistos'. Para Portugal (D8) o requisito de renda é de cerca de US$ 3.500/mês; para a Espanha é aprox. US$ 2.800/mês; e para a Tailândia (DTV) cerca de US$ 1.800/mês com permanência facilitada!";
      } else if (lower.includes('desbloqueio') || lower.includes('modulo 2') || lower.includes('módulo 2') || lower.includes('liberar')) {
        botReply = "O Módulo 1 é liberado imediatamente no cadastro. O Módulo 2 é desbloqueado após concluir as aulas do Módulo 1 e preencher o Mapa Start. Se você já adquiriu o curso VIP, todos os módulos ficam liberados no seu painel!";
      } else if (lower.includes('preço') || lower.includes('valor') || lower.includes('comprar') || lower.includes('pagamento') || lower.includes('pix')) {
        botReply = "O investimento é de apenas R$ 199,99 (ou US$ 39.90 / € 36.50), pagamento único com acesso vitalício aos 3 módulos, materiais e comunidade global.";
      } else if (lower.includes('internet') || lower.includes('esim') || lower.includes('wifi') || lower.includes('wi-fi')) {
        botReply = "A regra de ouro da conectividade nômade: compre um eSIM (Airalo ou Maya) antes de viajar e tenha sempre um plano de dados secundário como contingência. Veja o Checklist Técnico na aba Ferramentas!";
      } else if (lower.includes('falar') || lower.includes('humano') || lower.includes('marcelo') || lower.includes('whatsapp')) {
        botReply = "Você também pode falar diretamente com nossa equipe e participar da comunidade VIP no WhatsApp pelo link oficial.";
      }

      const replyMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: botReply,
        time: "Agora"
      };

      setMessages(prev => [...prev, replyMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-black shadow-xl shadow-cyan-500/30 transition-transform hover:scale-105 active:scale-95"
        title="Suporte Acadêmico 24/7"
      >
        {isOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <MessageCircle className="h-6 w-6 stroke-[2.5]" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 flex h-[480px] w-[calc(100vw-32px)] sm:w-96 flex-col overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950 shadow-2xl shadow-cyan-500/20">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 p-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400 text-black">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-['Syne'] text-sm font-bold text-white">Suporte ao Aluno 24/7</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online agora para tirar dúvidas</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-medium'
                      : 'bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`block text-[9px] mt-1 ${msg.sender === 'user' ? 'text-black/60' : 'text-slate-500'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions Suggestions */}
          <div className="border-t border-slate-800/80 bg-slate-950 p-2 overflow-x-auto flex gap-1.5 text-[10px]">
            <button
              onClick={() => handleSend("Como desbloqueio o Módulo 2?")}
              className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-slate-300 hover:border-cyan-500 hover:text-white whitespace-nowrap"
            >
              🔓 Como desbloquear o M2?
            </button>
            <button
              onClick={() => handleSend("Quais os requisitos de visto para nômades?")}
              className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-slate-300 hover:border-cyan-500 hover:text-white whitespace-nowrap"
            >
              🛂 Vistos de Nômade
            </button>
            <button
              onClick={() => handleSend("Como funciona o pagamento em PIX ou Cartão?")}
              className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-slate-300 hover:border-cyan-500 hover:text-white whitespace-nowrap"
            >
              💳 Formas de Pagamento
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-slate-800 bg-slate-900/90 p-3"
          >
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Digite sua dúvida acadêmica..."
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400 text-black hover:bg-cyan-300 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
