import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionLabel from '@/components/SectionLabel';

export default function VenturesHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.v-hero-label', { opacity: 0, y: 20, duration: 0.6 })
      .from('.v-hero-headline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
      .from('.v-hero-body', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-[120px] pb-20 px-6 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel text="Our Portfolio" className="v-hero-label mb-4 block" />
        <h1 className="v-hero-headline font-serif text-4xl sm:text-5xl lg:text-6xl text-embranix-text tracking-tight mb-6 leading-tight">
          Three ventures.
          <br />
          Infinite potential.
        </h1>
        <p className="v-hero-body font-sans text-lg lg:text-xl text-embranix-text-secondary max-w-[520px] leading-relaxed">
          Each Embranix venture is carefully chosen, strategically built, and passionately scaled. Explore our companies below.
        </p>
      </div>
    </section>
  );
}
