/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserStudent, AppNotification } from './types';
import { Header } from './components/Header';
import { LandingHero } from './components/LandingHero';
import { CourseView } from './components/CourseView';
import { ToolsView } from './components/ToolsView';
import { CommunityView } from './components/CommunityView';
import { StudentDashboard } from './components/StudentDashboard';
import { AdminView } from './components/AdminView';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import { NotificationCenter } from './components/NotificationCenter';
import { SupportWidget } from './components/SupportWidget';
import { Footer } from './components/Footer';
import { AnimatedBackgroundSlides } from './components/AnimatedBackgroundSlides';

const INITIAL_STUDENT: UserStudent = {
  name: "Marcelo Rodrigues",
  email: "marceloparticular5@gmail.com",
  isLoggedIn: true,
  authProvider: 'google',
  completedLessonIds: ["m1-l1", "m1-l2", "m1-l3"],
  unlockedModuleIds: [1, 2],
  enrolledAt: "23/09/2026",
  currency: 'BRL',
  notes: {
    "m1-l1": "Liberdade não é ausência de rotina, é autonomia de escolha. Focar em serviços com entrega clara.",
    "m1-l2": "Habilidades fortes: criação de páginas rápidas e automações para pequenas empresas de turismo.",
    "m1-l3": "Meu custo essencial é de aprox. R$ 4.200/mês. Reserva necessária de R$ 25.000 para viajar seguro."
  },
  deliverableAnswers: {}
};

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: "notif-1",
    title: "Boas-vindas ao Curso VIP!",
    message: "Seu acesso ao Módulo 1 (Start) foi ativado. Comece preenchendo a Calculadora do Número da Liberdade.",
    time: "Hoje, 05:00",
    type: "unlock",
    read: false
  },
  {
    id: "notif-2",
    title: "Novo tópico na Comunidade",
    message: "Camila Viana compartilhou dicas de coworkings e Visto D8 em Lisboa.",
    time: "Há 2 horas",
    type: "community",
    read: false
  },
  {
    id: "notif-3",
    title: "Desafio 21 Dias",
    message: "Lembrete: complete a Matriz de Oportunidades para desbloquear as aulas práticas de vendas do Módulo 3.",
    time: "Ontem",
    type: "reminder",
    read: true
  }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('landing');
  const [currency, setCurrency] = useState<'BRL' | 'USD' | 'EUR'>('BRL');
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);

  // Load from localStorage if present or use initial student
  const [student, setStudent] = useState<UserStudent>(() => {
    const saved = localStorage.getItem('viva_nomade_student');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_STUDENT;
      }
    }
    return INITIAL_STUDENT;
  });

  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL_NOTIFICATIONS);

  // Persist student updates
  useEffect(() => {
    localStorage.setItem('viva_nomade_student', JSON.stringify(student));
  }, [student]);

  const handleUpdateStudent = (updated: Partial<UserStudent>) => {
    setStudent(prev => ({ ...prev, ...updated }));
  };

  const handleLoginSuccess = (studentData: Partial<UserStudent>) => {
    setStudent(prev => ({
      ...prev,
      ...studentData,
      isLoggedIn: true
    }));
    // Add real-time push notification
    const welcomeNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: "Login Realizado com Sucesso!",
      message: `Bem-vindo de volta, ${studentData.name || 'Aluno'}! Seus módulos e anotações foram sincronizados.`,
      time: "Agora mesmo",
      type: "unlock",
      read: false
    };
    setNotifications(prev => [welcomeNotif, ...prev]);
  };

  const handlePaymentSuccess = (studentDetails?: Partial<UserStudent>) => {
    setStudent(prev => ({
      ...prev,
      ...(studentDetails || {}),
      isLoggedIn: true,
      unlockedModuleIds: [1, 2, 3]
    }));
    const payNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: "Matrícula VIP Confirmada!",
      message: "Todos os 3 Módulos, simuladores e comunidade global foram desbloqueados vitaliciamente para você.",
      time: "Agora mesmo",
      type: "unlock",
      read: false
    };
    setNotifications(prev => [payNotif, ...prev]);
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen bg-[#020617]/40 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-emerald-500 selection:text-black relative">
      {/* Dynamic Animated Background Slides with Visitor Interaction */}
      <AnimatedBackgroundSlides />
      
      {/* Top Bar Header with Fixed Logo & Maximum Filled Box for VIVA O EXTRAORDINÁRIO */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        student={student}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        notifications={notifications}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'landing' && (
          <LandingHero
            onStartCourse={() => setCurrentTab('modules')}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onOpenTools={() => setCurrentTab('tools')}
            currency={currency}
          />
        )}

        {currentTab === 'modules' && (
          <CourseView
            student={student}
            onUpdateStudent={handleUpdateStudent}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}

        {currentTab === 'tools' && (
          <ToolsView
            currency={currency}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />
        )}

        {currentTab === 'community' && (
          <CommunityView
            student={student}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}

        {currentTab === 'dashboard' && (
          <StudentDashboard
            student={student}
            onContinueCourse={() => setCurrentTab('modules')}
            onUpdateStudent={handleUpdateStudent}
          />
        )}

        {currentTab === 'admin' && (
          <AdminView
            currentStudent={student}
            onUpdateStudent={handleUpdateStudent}
          />
        )}
      </main>

      {/* Modals & Drawers */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        currency={currency}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <NotificationCenter
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllNotificationsRead}
      />

      {/* 24/7 AI-Guided Student Support Float */}
      <SupportWidget
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Footer with official ecosystem & partner links */}
      <Footer />
    </div>
  );
}
