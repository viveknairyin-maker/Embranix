import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: '01',
    title: 'Founder First',
    description: 'Every decision starts with what\'s best for the founder. Their success is our success.',
  },
  {
    number: '02',
    title: 'Build Real Things',
    description: 'We invest in substance, not hype. Every venture solves a real problem.',
  },
  {
    number: '03',
    title: 'Move Fast',
    description: 'Speed is our advantage. We act decisively and iterate rapidly.',
  },
  {
    number: '04',
    title: 'Long-Term Thinking',
    description: 'We build for decades, not quarters. Every decision is made with a 10-year lens.',
  },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.values-header', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.values-header',
        start: 'top 85%',
        once: true,
      },
    });

    gsap.from('.value-card', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.values-grid',
        start: 'top 85%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-embranix-bg py-20 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="values-header mb-16">
          <SectionLabel text="Our Values" className="mb-4 block" />
          <h2 className="font-serif text-4xl lg:text-5xl text-embranix-text tracking-tight">
            What we believe in.
          </h2>
        </div>

        {/* Values Grid */}
        <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.number}
              className="value-card bg-white rounded-lg p-8 lg:p-10 border-t-[3px] border-embranix-red"
            >
              <span className="font-serif text-5xl text-embranix-red/30 block mb-4">
                {value.number}
              </span>
              <h3 className="font-serif text-xl font-medium text-embranix-text mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-embranix-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
