import React, { useState } from 'react';
import { 
  Play, CheckCircle, Lock, BookOpen, Download, 
  HelpCircle, Sparkles, Send, FileText, ChevronRight,
  Clock, ShieldAlert, Award
} from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { UserStudent, Lesson } from '../types';

interface CourseViewProps {
  student: UserStudent;
  onUpdateStudent: (updated: Partial<UserStudent>) => void;
  onOpenCheckout: () => void;
  onOpenAuth: () => void;
}

export const CourseView: React.FC<CourseViewProps> = ({
  student,
  onUpdateStudent,
  onOpenCheckout,
  onOpenAuth
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<string>("m1-l1");
  const [noteText, setNoteText] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'content' | 'deliverable' | 'notes'>('content');

  // Find active module & lesson
  const currentModule = COURSE_MODULES.find(m => m.id === selectedModuleId) || COURSE_MODULES[0];
  const currentLesson = currentModule.lessons.find(l => l.id === selectedLessonId) || currentModule.lessons[0];

  const isModuleUnlocked = (modId: number) => {
    return student.unlockedModuleIds.includes(modId);
  };

  const isLessonCompleted = (lessonId: string) => {
    return student.completedLessonIds.includes(lessonId);
  };

  const handleToggleCompleteLesson = (lessonId: string) => {
    if (!student.isLoggedIn) {
      onOpenAuth();
      return;
    }
    const exists = student.completedLessonIds.includes(lessonId);
    let updatedCompleted: string[];
    if (exists) {
      updatedCompleted = student.completedLessonIds.filter(id => id !== lessonId);
    } else {
      updatedCompleted = [...student.completedLessonIds, lessonId];
    }

    // Check if Module 1 is finished to unlock Module 2
    let updatedUnlocked = [...student.unlockedModuleIds];
    const m1Lessons = COURSE_MODULES[0].lessons.map(l => l.id);
    const m1Done = m1Lessons.every(id => updatedCompleted.includes(id));
    if (m1Done && !updatedUnlocked.includes(2)) {
      updatedUnlocked.push(2);
    }

    // Check if Module 2 is finished to unlock Module 3
    const m2Lessons = COURSE_MODULES[1].lessons.map(l => l.id);
    const m2Done = m2Lessons.every(id => updatedCompleted.includes(id));
    if (m2Done && !updatedUnlocked.includes(3)) {
      updatedUnlocked.push(3);
    }

    onUpdateStudent({
      completedLessonIds: updatedCompleted,
      unlockedModuleIds: updatedUnlocked
    });
  };

  const handleSaveNote = () => {
    onUpdateStudent({
      notes: {
        ...student.notes,
        [currentLesson.id]: noteText
      }
    });
  };

  // Sync noteText when lesson changes
  React.useEffect(() => {
    setNoteText(student.notes[currentLesson.id] || '');
  }, [currentLesson.id, student.notes]);

  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = student.completedLessonIds.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Top Banner with Progress & Drip Status */}
      <div className="mb-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Área Acadêmica do Nômade Digital
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-300">
                {student.isLoggedIn ? `Aluno: ${student.name}` : "Acesso de Visitante"}
              </span>
            </div>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Jornada dos 3 Módulos
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Progresso acadêmico com liberação orientada. Conclua as atividades práticas de cada etapa para avançar com base sólida.
            </p>
          </div>

          {/* Progress widget */}
          <div className="flex flex-col sm:items-end justify-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black font-mono text-cyan-400">{progressPercent}%</span>
              <span className="text-xs text-slate-400">({completedCount} de {totalLessons} aulas)</span>
            </div>
            <div className="mt-2 h-2.5 w-48 overflow-hidden rounded-full bg-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Module Selector Bar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {COURSE_MODULES.map(m => {
            const unlocked = isModuleUnlocked(m.id);
            const isSelected = selectedModuleId === m.id;
            const completedInModule = m.lessons.filter(l => isLessonCompleted(l.id)).length;
            const isFinished = completedInModule === m.lessons.length;

            return (
              <button
                key={m.id}
                onClick={() => {
                  if (unlocked) {
                    setSelectedModuleId(m.id);
                    setSelectedLessonId(m.lessons[0].id);
                  } else {
                    onOpenCheckout();
                  }
                }}
                className={`relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/10'
                    : unlocked
                    ? 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                    : 'border-slate-800/60 bg-slate-950/40 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isSelected ? 'text-cyan-300' : 'text-slate-400'
                  }`}>
                    {m.id === 1 ? 'Módulo 1' : m.id === 2 ? 'Módulo 2' : 'Módulo 3'}
                  </span>
                  {unlocked ? (
                    isFinished ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                        <CheckCircle className="h-3.5 w-3.5" /> Concluído
                      </span>
                    ) : (
                      <span className="text-[11px] text-cyan-400 font-mono">
                        {completedInModule}/{m.lessons.length} aulas
                      </span>
                    )
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                      <Lock className="h-3.5 w-3.5" /> Bloqueado
                    </span>
                  )}
                </div>

                <h4 className="font-['Syne'] text-sm sm:text-base font-bold text-white line-clamp-1">
                  {m.title.replace(/^Módulo \d+ — /, '')}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {m.subtitle}
                </p>

                {!unlocked && (
                  <div className="mt-3 flex items-center justify-between text-[10px] text-amber-300/80 bg-amber-950/30 p-1.5 rounded">
                    <span>{m.unlockCondition}</span>
                    <span className="font-bold underline">Desbloquear</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Study Arena: Left Sidebar + Right Player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Lessons List for Selected Module */}
        <div className="lg:col-span-4 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div>
                <h3 className="font-['Syne'] text-base font-bold text-white">
                  {currentModule.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentModule.lessons.length} aulas práticas
                </p>
              </div>
            </div>

            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
              {currentModule.lessons.map(lesson => {
                const isSelected = selectedLessonId === lesson.id;
                const completed = isLessonCompleted(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLessonId(lesson.id)}
                    className={`w-full text-left rounded-xl border p-3 transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/50 shadow-sm'
                        : 'border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleCompleteLesson(lesson.id);
                      }}
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        completed
                          ? 'border-emerald-400 bg-emerald-500 text-black'
                          : 'border-slate-600 bg-slate-800 hover:border-cyan-400'
                      }`}
                      title={completed ? "Marcada como concluída" : "Marcar como concluída"}
                    >
                      {completed && <CheckCircle className="h-3.5 w-3.5 stroke-[3]" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 text-[10px] text-slate-400 mb-0.5">
                        <span>Dia {lesson.day}</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="h-3 w-3" /> {lesson.duration}
                        </span>
                      </div>
                      <h5 className={`text-xs font-semibold leading-snug line-clamp-2 ${
                        isSelected ? 'text-cyan-200' : 'text-white'
                      }`}>
                        {lesson.title}
                      </h5>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Module Deliverable Card */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
              <Award className="h-4 w-4" />
              <span>Entregável do Módulo</span>
            </div>
            <p className="text-slate-200 font-medium">{currentModule.deliverable}</p>
            <p className="mt-2 text-slate-400">
              Ferramenta: <strong className="text-white">{currentModule.practicalTool}</strong>
            </p>
          </div>
        </div>

        {/* Right: Active Lesson Player & Workbook */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
            
            {/* Player Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                  {currentModule.title} · Dia {currentLesson.day}
                </span>
                <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mt-1">
                  {currentLesson.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleCompleteLesson(currentLesson.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    isLessonCompleted(currentLesson.id)
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-95'
                  }`}
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>
                    {isLessonCompleted(currentLesson.id) ? 'Concluída ✓' : 'Marcar como Concluída'}
                  </span>
                </button>
              </div>
            </div>

            {/* Video / Interactive Stage Frame */}
            <div className="relative my-6 aspect-video w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-black flex flex-col items-center justify-center text-center p-6 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <div className="relative z-20 max-w-md">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-lg shadow-cyan-400/30 transition-transform hover:scale-105 cursor-pointer">
                  <Play className="h-7 w-7 fill-black ml-1" />
                </div>
                <h4 className="font-['Syne'] text-base sm:text-lg font-bold text-white">
                  Aula Gravada em Alta Definição
                </h4>
                <p className="mt-1 text-xs text-slate-300">
                  Duração: {currentLesson.duration} · Acompanhamento passo a passo com exemplos práticos.
                </p>
                <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-cyan-300">
                  <span>✓ 1080p Full HD</span>
                  <span>·</span>
                  <span>✓ Material de Apoio</span>
                  <span>·</span>
                  <span>✓ Acesso Vitalício</span>
                </div>
              </div>
            </div>

            {/* Content Tabs: Aula / Exercício / Notas */}
            <div className="flex border-b border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('content')}
                className={`border-b-2 py-3 px-4 transition-colors ${
                  activeTab === 'content'
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Conteúdo & Pontos-Chave
              </button>
              <button
                onClick={() => setActiveTab('deliverable')}
                className={`border-b-2 py-3 px-4 transition-colors ${
                  activeTab === 'deliverable'
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Exercício Prático
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`border-b-2 py-3 px-4 transition-colors ${
                  activeTab === 'notes'
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Meu Caderno de Anotações
              </button>
            </div>

            {/* Tab Contents */}
            <div className="pt-6">
              {activeTab === 'content' && (
                <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                      Visão Geral da Aula
                    </h4>
                    <p>{currentLesson.description}</p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                      Principais Aprendizados (Key Takeaways):
                    </h4>
                    <ul className="space-y-2">
                      {currentLesson.keyTakeaways.map((k, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-bold text-cyan-300 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs mb-1">
                      <Sparkles className="h-4 w-4" />
                      <span>Ação Imediata (Desafio do Dia)</span>
                    </div>
                    <p className="text-xs text-slate-200">{currentLesson.actionItem}</p>
                  </div>
                </div>
              )}

              {activeTab === 'deliverable' && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <h4 className="font-['Syne'] text-sm font-bold text-white mb-1">
                      Entregável Prático: {currentLesson.deliverable || currentModule.deliverable}
                    </h4>
                    <p className="text-xs text-slate-400 mb-4">
                      Preencha os campos abaixo para consolidar seu aprendizado e salvar no seu perfil acadêmico.
                    </p>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Sua Resposta / Plano de Ação:
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Digite aqui o que você definiu para este exercício prático..."
                          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => alert("Entregável salvo com sucesso no seu perfil de aluno!")}
                        className="flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-black hover:bg-cyan-400"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Salvar Entregável</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Anotações Pessoais desta Aula (Salvas Automaticamente)
                    </label>
                    <textarea
                      rows={6}
                      value={noteText}
                      onChange={e => setNoteText(e.target.value)}
                      placeholder="Anote aqui seus insights, ideias de clientes, nomes de ferramentas ou dúvidas..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Suas notas ficam salvas no navegador e sincronizadas na sua conta.
                    </span>
                    <button
                      type="button"
                      onClick={handleSaveNote}
                      className="rounded-lg bg-cyan-500 px-3.5 py-1.5 text-xs font-bold text-black hover:bg-cyan-400"
                    >
                      Salvar Anotação
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
