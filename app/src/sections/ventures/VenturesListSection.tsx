import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const ventures = [
  {
    name: 'Lettrblack',
    category: 'Creative Studio',
    description: 'A bold digital creative agency specializing in brand identity, motion design, and web experiences for modern companies. Lettrblack helps brands stand out in a crowded digital landscape.',
    founders: 'Yash Narde',
    founded: '2023',
    status: 'Active',
    brandColor: '#0D0D0D',
    textColor: '#FFFFFF',
    website: 'lettrblack.com',
    logoSrc: '/lettrblack-logo.png',
    slug: 'lettrblack',
    details: {
      about:
        "Lettrblack helps modern brands stand out with identity systems, motion-first storytelling, and web experiences built to convert.",
      whatTheyDo: ['Brand identity', 'Motion design', 'Web experiences', 'Creative strategy'],
    },
  },
  {
    name: 'Progen5',
    category: 'Productivity Tech',
    description: 'Next-generation productivity tools for modern teams. Workflow automation, task management, and team collaboration reimagined for the way people actually work today.',
    founders: 'Alex Chen',
    founded: '2023',
    status: 'Active',
    brandColor: '#FFFFFF',
    textColor: '#C41D1D',
    website: 'progen5.com',
    logoSrc: '/progen5-logo.png',
    slug: 'progen5',
    details: {
      about:
        'Progen5 builds next-generation productivity tools for modern teams—automation, collaboration, and clarity in one streamlined workflow.',
      whatTheyDo: ['Workflow automation', 'Task management', 'Team collaboration', 'Productivity analytics'],
    },
  },
  {
    name: 'FuseCake',
    category: 'Event Tech',
    description:
      'FuseCake is reimagining the event industry with technology — from planning to execution, FuseCake makes every celebration smarter.',
    founders: 'Yash Narde',
    founded: '2024',
    status: 'Active',
    brandColor: '#0D0D0D',
    textColor: '#C9A84C',
    website: 'fusecake.com',
    logoSrc: '/fc-logo.png',
    slug: 'fusecake',
    details: {
      about:
        "FuseCake bridges the gap between celebration and technology. Whether it's a college fest or a corporate event, FuseCake's platform handles everything from ticketing to on-ground coordination.",
      whatTheyDo: [
        'Event management platform',
        'Ticketing & registration',
        'On-ground tech tools',
        'B2B event services',
      ],
    },
  },
];

export default function VenturesListSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Fallback: ensure list is visible even if ScrollTrigger doesn't fire
    gsap.set('.v-detail-card', { opacity: 1, y: 0 });

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    gsap.from('.v-detail-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-embranix-bg py-20 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {ventures.map((venture) => (
          <div
            key={venture.name}
            className="v-detail-card bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left - Color Block */}
              <div
                className="lg:w-[40%] h-[240px] lg:h-auto flex items-center justify-center relative overflow-hidden min-h-[240px]"
                style={{ backgroundColor: venture.brandColor }}
              >
                <img
                  src={venture.logoSrc}
                  alt={`${venture.name} logo`}
                  className="venture-logo relative z-10"
                />
              </div>

              {/* Right - Content */}
              <div className="lg:w-[60%] p-8 lg:p-12">
                <span className="inline-block font-sans text-[11px] font-medium tracking-wide bg-[rgba(196,29,29,0.1)] text-embranix-red px-3 py-1 rounded-full mb-4">
                  {venture.category}
                </span>

                <p
                  className="font-sans text-base leading-relaxed mb-6 max-w-[480px]"
                  style={{ color: venture.name === 'Progen5' ? '#1A1410' : undefined }}
                >
                  {venture.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div>
                    <span className="font-sans text-xs text-embranix-text-secondary uppercase tracking-wide">
                      Founders:
                    </span>
                    <span className="font-sans text-sm text-embranix-text ml-2">
                      {venture.founders}
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-xs text-embranix-text-secondary uppercase tracking-wide">
                      Founded:
                    </span>
                    <span className="font-sans text-sm text-embranix-text ml-2">
                      {venture.founded}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs text-embranix-text-secondary uppercase tracking-wide">
                      Status:
                    </span>
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    <span className="font-sans text-sm text-embranix-text">
                      {venture.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link className="text-link" to={`/ventures/${venture.slug}`}>
                    View Full Details →
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <span className="font-sans text-sm text-embranix-text-secondary">
                    {venture.website}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
