import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: '3', label: 'Ventures' },
  { value: '\u221e', label: 'Possibilities' },
  { value: '100%', label: 'Founder Support' },
];

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.approach-left', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.approach-left',
        start: 'top 80%',
        once: true,
      },
    });

    gsap.from('.approach-circle', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.approach-right',
        start: 'top 80%',
        once: true,
      },
    });

    gsap.from('.approach-metric', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.approach-metrics',
        start: 'top 85%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="approach-left lg:w-1/2">
            <SectionLabel text="Our Approach" className="mb-4 block" />
            <h2 className="font-serif text-4xl lg:text-6xl text-embranix-text tracking-tight mb-6 leading-tight">
              Founder-First.
              <br />
              Always.
            </h2>
            <p className="font-sans text-lg lg:text-xl text-embranix-text-secondary max-w-[480px] leading-relaxed mb-10">
              Every decision we make starts with one question: what&apos;s best for the founder? We believe that when founders thrive, companies thrive. That&apos;s why we take only 10% equity, provide full operational support, and let founders focus on what they do best — building.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl text-embranix-red">10%</span>
              <span className="font-sans text-sm text-embranix-text-secondary">
                Equity. That&apos;s all we take.
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="approach-right lg:w-1/2 relative flex items-center justify-center min-h-[400px]">
            {/* Large blurred circle */}
            <div
              className="approach-circle absolute"
              style={{
                width: 300,
                height: 300,
                background: 'radial-gradient(circle, #C41D1D 0%, transparent 70%)',
                filter: 'blur(80px)',
                opacity: 0.4,
                borderRadius: '50%',
              }}
            />

            {/* Metric Cards */}
            <div className="approach-metrics relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[400px]">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="approach-metric bg-white rounded-lg p-6 shadow-card text-center"
                >
                  <span className="font-serif text-3xl text-embranix-red block mb-1">
                    {metric.value}
                  </span>
                  <span className="font-sans text-sm text-embranix-text-secondary">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
