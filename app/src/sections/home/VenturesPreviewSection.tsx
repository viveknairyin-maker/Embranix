import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const ventures = [
  {
    name: 'Lettrblack',
    category: 'Creative Studio',
    description: 'A bold digital creative agency specializing in brand identity, motion design, and web experiences for modern companies.',
    brandColor: '#0D0D0D',
    textColor: '#FFFFFF',
    logoSrc: '/lettrblack-logo.png',
  },
  {
    name: 'Progen5',
    category: 'Productivity Tech',
    description: 'Next-generation productivity tools for modern teams. Workflow automation, task management, and team collaboration reimagined.',
    brandColor: '#FFFFFF',
    textColor: '#C41D1D',
    logoSrc: '/progen5-logo.png',
  },
  {
    name: 'FuseCake',
    category: 'Event Tech',
    description: 'Where technology meets celebration. Smart event management, digital invitations, and seamless guest experiences for every occasion.',
    brandColor: '#0D0D0D',
    textColor: '#C9A84C',
    logoSrc: '/fc-logo.png',
  },
];

export default function VenturesPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Fallback: ensure content is visible even if ScrollTrigger doesn't fire
    gsap.set(['.vp-header', '.vp-card'], { opacity: 1, y: 0 });

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    gsap.from('.vp-header', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.vp-header',
        start: 'top 85%',
        once: true,
      },
    });

    gsap.from('.vp-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.vp-grid',
        start: 'top 85%',
        once: true,
      },
    });

    // If already in viewport on load, refresh triggers quickly
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-embranix-bg py-20 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="vp-header text-center mb-16">
          <SectionLabel text="Our Ventures" className="mb-4 block" />
          <h2 className="font-serif text-4xl lg:text-6xl text-embranix-text tracking-tight">
            Three startups.
            <br />
            One mission.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="vp-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture) => (
            <div
              key={venture.name}
              className="vp-card bg-white rounded-2xl shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Top Color Block */}
              <div
                className="h-[200px] flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: venture.brandColor }}
              >
                <img
                  src={venture.logoSrc}
                  alt={`${venture.name} logo`}
                  className="venture-logo relative z-10"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <span className="inline-block font-sans text-[11px] font-medium tracking-wide bg-[rgba(196,29,29,0.1)] text-embranix-red px-3 py-1 rounded-full mb-4">
                  {venture.category}
                </span>
                <p className="font-sans text-sm text-embranix-text-secondary leading-relaxed mb-5">
                  {venture.description}
                </p>
                <span className="text-link cursor-pointer">
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
