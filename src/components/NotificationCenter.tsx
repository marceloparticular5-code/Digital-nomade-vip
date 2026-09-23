import React from 'react';
import { X, Bell, CheckCircle, Unlock, Sparkles, MessageSquare } from 'lucide-react';
import { AppNotification } from '../types';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onMarkAllRead: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/60 backdrop-blur-sm p-4 sm:p-6">
      <div className="relative w-full max-w-sm rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 shadow-2xl shadow-cyan-500/20 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-cyan-400" />
            <h3 className="font-['Syne'] text-sm font-bold text-white">
              Notificações Push em Tempo Real
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
          {notifications.map(n => (
            <div
              key={n.id}
              className={`rounded-xl border p-3 text-xs space-y-1 transition-colors ${
                n.read
                  ? 'border-slate-800/80 bg-slate-900/40 text-slate-400'
                  : 'border-cyan-500/30 bg-cyan-950/20 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  {n.type === 'unlock' && <Unlock className="h-3 w-3 text-cyan-400" />}
                  {n.type === 'community' && <MessageSquare className="h-3 w-3 text-blue-400" />}
                  {n.type === 'reminder' && <Sparkles className="h-3 w-3 text-amber-400" />}
                  <span>{n.title}</span>
                </span>
                <span className="text-[10px] text-slate-500">{n.time}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">{n.message}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-xs">
          <button
            type="button"
            onClick={onMarkAllRead}
            className="text-[11px] text-cyan-400 hover:underline"
          >
            Marcar todas como lidas
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-3 py-1 text-[11px] text-slate-200 hover:bg-slate-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
