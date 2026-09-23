import React, { useState } from 'react';
import { ShieldCheck, Users, DollarSign, Award, CheckCircle2, Lock, Unlock, Search, TrendingUp } from 'lucide-react';
import { UserStudent } from '../types';

interface AdminViewProps {
  currentStudent: UserStudent;
  onUpdateStudent: (updated: Partial<UserStudent>) => void;
}

interface EnrolledStudentRecord {
  id: string;
  name: string;
  email: string;
  enrolledAt: string;
  unlockedModules: number[];
  completedLessonsCount: number;
  lastActive: string;
  city: string;
  status: 'Ativo' | 'Concluído' | 'Pendente';
}

const DEMO_STUDENTS: EnrolledStudentRecord[] = [
  {
    id: "std-1",
    name: "Marcelo Rodrigues",
    email: "marceloparticular5@gmail.com",
    enrolledAt: "Hoje, 05:30",
    unlockedModules: [1, 2, 3],
    completedLessonsCount: 19,
    lastActive: "Há 5 min",
    city: "Natal / Lisboa",
    status: "Concluído"
  },
  {
    id: "std-2",
    name: "Mariana Alencar",
    email: "mariana.alencar@email.com",
    enrolledAt: "Ontem, 14:20",
    unlockedModules: [1, 2],
    completedLessonsCount: 11,
    lastActive: "Há 1 hora",
    city: "Florianópolis",
    status: "Ativo"
  },
  {
    id: "std-3",
    name: "Pedro Henrique Ramos",
    email: "pedro.h.ramos@nomad.com",
    enrolledAt: "Há 3 dias",
    unlockedModules: [1],
    completedLessonsCount: 4,
    lastActive: "Há 3 horas",
    city: "Medellín",
    status: "Ativo"
  },
  {
    id: "std-4",
    name: "Camila Viana",
    email: "camila.viana@design.com",
    enrolledAt: "Há 5 dias",
    unlockedModules: [1, 2, 3],
    completedLessonsCount: 17,
    lastActive: "Há 2 horas",
    city: "Lisboa",
    status: "Ativo"
  },
  {
    id: "std-5",
    name: "Lucas Ferreira",
    email: "lucas.ferreira@asia.com",
    enrolledAt: "Há 1 semana",
    unlockedModules: [1, 2, 3],
    completedLessonsCount: 19,
    lastActive: "Há 1 dia",
    city: "Chiang Mai",
    status: "Concluído"
  }
];

export const AdminView: React.FC<AdminViewProps> = ({ currentStudent, onUpdateStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [studentsList, setStudentsList] = useState<EnrolledStudentRecord[]>(DEMO_STUDENTS);

  const toggleModuleUnlock = (studentId: string, modId: number) => {
    // If updating current active student
    if (studentId === "std-1" || studentId === currentStudent.email) {
      const exists = currentStudent.unlockedModuleIds.includes(modId);
      const newModules = exists
        ? currentStudent.unlockedModuleIds.filter(id => id !== modId)
        : [...currentStudent.unlockedModuleIds, modId];
      onUpdateStudent({ unlockedModuleIds: newModules });
    }

    setStudentsList(prev => prev.map(s => {
      if (s.id === studentId) {
        const hasMod = s.unlockedModules.includes(modId);
        const updated = hasMod
          ? s.unlockedModules.filter(m => m !== modId)
          : [...s.unlockedModules, modId];
        return { ...s, unlockedModules: updated };
      }
      return s;
    }));
  };

  const filteredStudents = studentsList.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Admin Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Painel do Instrutor & Controle de Matrículas
            </span>
          </div>
          <h2 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Relatórios de Progresso em Tempo Real
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Monitoramento ao vivo ativo</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Alunos Matriculados</span>
            <Users className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">
            184
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +14 novas matrículas esta semana
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Faturamento Global</span>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">
            R$ 36.798
          </div>
          <p className="text-[11px] text-slate-400">
            BRL 74% · USD 18% · EUR 8%
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Taxa de Conclusão Módulo 1</span>
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">
            91.4%
          </div>
          <p className="text-[11px] text-cyan-300">
            Mapa Start preenchido com sucesso
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Alunos com 3 Módulos Ativos</span>
            <Award className="h-4 w-4 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">
            128
          </div>
          <p className="text-[11px] text-amber-300">
            Desafio 21 Dias em andamento
          </p>
        </div>
      </div>

      {/* Student Management Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-['Syne'] text-lg font-bold text-white">
              Gestão de Alunos & Liberação Manual de Módulos
            </h3>
            <p className="text-xs text-slate-400">
              Clique nos botões de M1, M2 ou M3 para desbloquear ou travar módulos individualmente.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Buscar aluno por nome, e-mail ou cidade..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-9 pr-3 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="py-3 px-3">Aluno</th>
                <th className="py-3 px-3">E-mail</th>
                <th className="py-3 px-3">Localização</th>
                <th className="py-3 px-3">Progresso</th>
                <th className="py-3 px-3 text-center">Liberação de Módulos</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {filteredStudents.map(studentItem => (
                <tr key={studentItem.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-3 text-white font-bold">
                    {studentItem.name}
                  </td>
                  <td className="py-3 px-3 text-slate-400 font-mono text-[11px]">
                    {studentItem.email}
                  </td>
                  <td className="py-3 px-3 text-cyan-300">
                    {studentItem.city}
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-mono font-bold text-white">
                      {studentItem.completedLessonsCount}/19
                    </span>{' '}
                    aulas
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center justify-center gap-1.5">
                      {[1, 2, 3].map(modNum => {
                        const isUnlocked = studentItem.unlockedModules.includes(modNum);
                        return (
                          <button
                            key={modNum}
                            onClick={() => toggleModuleUnlock(studentItem.id, modNum)}
                            className={`flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-bold transition-all ${
                              isUnlocked
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900/50'
                                : 'bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300'
                            }`}
                            title={`Alternar Módulo ${modNum}`}
                          >
                            {isUnlocked ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                            <span>M{modNum}</span>
                          </button>
                        );
                      })}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold ${
                      studentItem.status === 'Concluído'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-cyan-500/20 text-cyan-300'
                    }`}>
                      {studentItem.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
