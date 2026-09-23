import React from 'react';
import { UserStudent } from '../types';
import { COURSE_MODULES } from '../data/courseData';
import { Award, BookOpen, CheckCircle, Clock, Sparkles, Send, FileText } from 'lucide-react';

interface StudentDashboardProps {
  student: UserStudent;
  onContinueCourse: () => void;
  onUpdateStudent: (updated: Partial<UserStudent>) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  student,
  onContinueCourse,
  onUpdateStudent
}) => {
  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completed = student.completedLessonIds.length;
  const progressPercent = Math.round((completed / totalLessons) * 100);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Student Profile Card */}
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-black text-2xl font-black shadow-lg shadow-cyan-500/20">
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                {student.name}
              </h2>
              <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                {student.authProvider === 'google' ? 'Conta Google Verificada' : 'Matrícula Ativa'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{student.email}</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Membro desde: {student.enrolledAt}
            </p>
          </div>
        </div>

        <button
          onClick={onContinueCourse}
          className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-xs font-bold text-black hover:opacity-95 shadow-lg shadow-cyan-500/20"
        >
          Continuar de onde parei →
        </button>
      </div>

      {/* Progress Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-1">
          <span className="text-xs text-slate-400">Progresso Geral</span>
          <div className="text-2xl font-bold font-mono text-cyan-400">{progressPercent}%</div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-cyan-400" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-1">
          <span className="text-xs text-slate-400">Aulas Concluídas</span>
          <div className="text-2xl font-bold font-mono text-white">
            {completed} / {totalLessons}
          </div>
          <span className="text-[10px] text-slate-500">21 dias de jornada</span>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-1">
          <span className="text-xs text-slate-400">Módulos Desbloqueados</span>
          <div className="text-2xl font-bold font-mono text-emerald-400">
            {student.unlockedModuleIds.length} de 3
          </div>
          <span className="text-[10px] text-slate-500">Liberação progressiva</span>
        </div>
      </div>

      {/* Mapa Start Deliverable Summary */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-cyan-400" />
            <h3 className="font-['Syne'] text-base font-bold text-white">
              Meu Mapa Start (Módulo 1)
            </h3>
          </div>
          <span className="text-xs text-emerald-400 font-semibold">Salvo no Perfil</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 space-y-1">
            <span className="text-slate-400">Minha Habilidade Principal:</span>
            <p className="text-white font-medium">Criação de Sites, Tráfego e Automação de Atendimento</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 space-y-1">
            <span className="text-slate-400">Público Inicial / Nicho:</span>
            <p className="text-white font-medium">Pousadas, Turismo e Pequenos Comércios</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 space-y-1">
            <span className="text-slate-400">Meta Financeira Mensal (Número da Liberdade):</span>
            <p className="text-cyan-400 font-bold font-mono">R$ 5.500 /mês</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 space-y-1">
            <span className="text-slate-400">Primeira Oferta Pronta:</span>
            <p className="text-white font-medium">Pacote Presença Total (Site + Google Maps + WhatsApp)</p>
          </div>
        </div>
      </div>

      {/* Certificate Eligibility */}
      <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 to-slate-950 p-6 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Award className="h-4 w-4" />
            <span>Certificado de Conclusão Nômade Digital</span>
          </div>
          <h4 className="font-['Syne'] text-base font-bold text-white">
            Emissão após conclusão das 19 aulas e plano de 90 dias
          </h4>
          <p className="text-xs text-slate-400">
            {completed >= totalLessons 
              ? "Parabéns! Você completou todas as aulas. Seu certificado está pronto para emissão."
              : `Faltam apenas ${totalLessons - completed} aulas para desbloquear seu certificado oficial.`
            }
          </p>
        </div>

        {completed >= totalLessons && (
          <button
            onClick={() => alert("Certificado gerado com sucesso para " + student.name)}
            className="rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-black hover:bg-amber-300"
          >
            Baixar Certificado
          </button>
        )}
      </div>

    </div>
  );
};
