import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface BackgroundSlide {
  id: string;
  image: string;
  title: string;
  tagline: string;
}

export const BACKGROUND_SLIDES: BackgroundSlide[] = [
  {
    id: 'extraordinario',
    image: '/src/assets/images/slide_clovers_extraordinario_1790168693336.jpg',
    title: 'VIVA O EXTRAORDINÁRIO',
    tagline: 'Digital Nômade VIP · Liberdade que gera resultado'
  },
  {
    id: 'estilo-livre',
    image: '/src/assets/images/slide_nomad_laptop_1790168703329.jpg',
    title: 'ESTILO DE VIDA LIVRE',
    tagline: 'Trabalhe de qualquer lugar do mundo com consistência'
  },
  {
    id: 'sem-fronteiras',
    image: '/src/assets/images/slide_portal_borders_1790168713764.jpg',
    title: 'VIDA SEM FRONTEIRAS',
    tagline: 'Liberdade, dinheiro e destinos sem limites geográficos'
  },
  {
    id: 'sonhe-alto',
    image: '/src/assets/images/slide_golden_highway_1790168722911.jpg',
    title: 'SONHE ALTO',
    tagline: 'O universo conspira para quem age com método e clareza'
  },
  {
    id: 'liberdade-digital',
    image: '/src/assets/images/slide_tech_freedom_1790168733072.jpg',
    title: 'LIBERDADE DIGITAL',
    tagline: 'Receba em moedas fortes e viva experiências extraordinárias'
  }
];

export const AnimatedBackgroundSlides: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Auto slide interval
  useEffect(() => {
    if (!isPlaying || reducedMotion) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex, reducedMotion]);

  // Visitor interaction: Mouse move parallax tilt (skipped if reduced motion)
  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10px to +10px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [reducedMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BACKGROUND_SLIDES.length) % BACKGROUND_SLIDES.length);
  };

  return (
    <>
      {/* Background Slides Container */}
      <div 
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {BACKGROUND_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{
                transform: reducedMotion
                  ? 'none'
                  : `scale(${isActive ? 1.05 : 1.0}) translate3d(${mouseOffset.x * 0.5}px, ${
                      mouseOffset.y * 0.5 + scrollProgress * -15
                    }px, 0)`,
                transition: reducedMotion 
                  ? 'opacity 600ms ease' 
                  : 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 8000ms ease-out'
              }}
            >
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center filter brightness-[0.72] contrast-[1.08] saturate-[1.15]"
              />
            </div>
          );
        })}

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#020617]/85 via-[#030712]/75 to-[#020617]/90" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />
        
        {/* Subtle grid mesh overlay */}
        <div 
          className="absolute inset-0 z-20 opacity-15"
          style={{
            backgroundImage: `radial-gradient(rgba(52, 211, 153, 0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* Floating Interactive Slide Pill & Badge in Bottom Left */}
      <aside 
        aria-label="Controle de Slides de Fundo"
        aria-live="polite"
        className="fixed bottom-5 left-5 z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-[#030712]/90 p-2.5 px-3.5 shadow-2xl backdrop-blur-md text-xs transition-all hover:border-emerald-400/60"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="text-left">
            <p className="font-['Syne'] font-extrabold text-[11px] uppercase tracking-wider text-emerald-300">
              {BACKGROUND_SLIDES[currentIndex].title}
            </p>
            <p className="text-[10px] text-slate-400 truncate max-w-[190px]">
              {BACKGROUND_SLIDES[currentIndex].tagline}
            </p>
          </div>
        </div>

        <div className="h-5 w-[1px] bg-slate-800" aria-hidden="true" />

        {/* Navigation buttons with accessible 44px hit-box and visible focus ring */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:bg-emerald-500 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
            title="Slide anterior"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:bg-emerald-500 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
            title={isPlaying ? "Pausar slides animados" : "Reproduzir slides"}
            aria-label={isPlaying ? "Pausar slides animados" : "Reproduzir slides"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>

          <button
            onClick={handleNext}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:bg-emerald-500 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
            title="Próximo slide"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Slide Dots Indicator */}
        <div className="flex items-center gap-1.5 pl-1" role="tablist" aria-label="Seleção de slides">
          {BACKGROUND_SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                i === currentIndex ? 'w-5 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir para slide ${i + 1}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </aside>
    </>
  );
};
