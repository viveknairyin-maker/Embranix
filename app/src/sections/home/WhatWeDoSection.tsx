import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: 'Build',
    description: 'We co-found companies from scratch, providing product, design, engineering, and go-to-market support.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 12.37a2.5 2.5 0 0 0-3.54-3.54l-4.66 4.66a1 1 0 0 1-1.42 0l-1.17-1.17a2.5 2.5 0 0 0-3.54 0L2.5 15.05" />
        <path d="M14.5 6.5l3 3" />
        <path d="M17.5 9.5l-3-3" />
      </svg>
    ),
    title: 'Acquire',
    description: 'We identify high-potential student startups and acquire them with a founder-friendly equity model.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Scale',
    description: 'Once acquired, we provide capital, team, and infrastructure to accelerate each venture\'s growth.',
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Fallback: ensure content is visible even if ScrollTrigger doesn't fire
    gsap.set(['.wwd-left', '.wwd-card'], { opacity: 1, x: 0, y: 0 });

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    // Left column animation
    gsap.from('.wwd-left', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    });

    // Right column cards stagger
    gsap.from('.wwd-card', {
      x: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.wwd-cards',
        start: 'top 80%',
        once: true,
      },
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-6 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="wwd-left lg:w-[45%] lg:sticky lg:top-32">
            <SectionLabel text="What We Do" className="mb-4 block" />
            <h2 className="font-serif text-4xl lg:text-5xl text-embranix-text tracking-tight mb-6 leading-tight">
              Building, acquiring,
              <br />
              and scaling ventures.
            </h2>
            <p className="font-sans text-base text-embranix-text-secondary max-w-[400px] leading-relaxed">
              Embranix is more than a holding company. We actively build new ventures from scratch, acquire promising student-led startups, and scale them with capital, team, and strategy.
            </p>
          </div>

          {/* Right Column - Service Cards */}
          <div className="wwd-cards lg:w-[55%] flex flex-col gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="wwd-card bg-embranix-bg rounded-lg p-8 border-l-[3px] border-embranix-red hover:border-l-[5px] hover:bg-[rgba(196,29,29,0.03)] transition-all duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-serif text-xl font-medium text-embranix-text mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-embranix-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
