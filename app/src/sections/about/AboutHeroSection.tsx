import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionLabel from '@/components/SectionLabel';

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.about-hero-label', { opacity: 0, y: 20, duration: 0.6 })
      .from('.about-hero-headline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
      .from('.about-hero-body', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-[120px] pb-20 px-6 lg:px-16"
    >
      <div className="max-w-[700px] mx-auto text-center">
        <SectionLabel text="About Embranix" className="about-hero-label mb-4 block" />
        <h1 className="about-hero-headline font-serif text-4xl sm:text-5xl lg:text-6xl text-embranix-text tracking-tight mb-6 leading-tight">
          We&apos;re building the future,
          <br />
          one startup at a time.
        </h1>
        <p className="about-hero-body font-sans text-lg lg:text-xl text-embranix-text-secondary max-w-[640px] mx-auto leading-relaxed">
          Embranix is a founder-first holding company that builds, acquires, and scales student-led startups. We provide the capital, team, and infrastructure so founders can focus on what matters most — building exceptional products.
        </p>
      </div>
    </section>
  );
}
