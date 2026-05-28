import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-label', { opacity: 0, y: 20, duration: 0.6 })
      .from('.hero-headline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
      .from('.hero-subtext', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from('.hero-mark', { opacity: 0, scale: 0.8, duration: 1.2 }, '-=0.8')
      .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.3');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen h-screen flex flex-col items-center justify-center relative bg-embranix-bg box-border px-6 pt-20 pb-[60px] md:px-[60px]"
    >
      {/* Geometric Mark - upper right */}
      <div
        className="hero-mark absolute top-20 right-0 lg:right-20 pointer-events-none"
        style={{
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, #C41D1D 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: 0.6,
          borderRadius: '50%',
        }}
      />

      <div className="max-w-[700px] text-center relative z-10">
        {/* Label */}
        <p className="hero-label section-label mb-6">
          Founder-First Holding Company
        </p>

        {/* Headline */}
        <h1 className="hero-headline font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[0.95] tracking-tight text-embranix-text mb-6">
          Embranix builds and
          <br />
          acquires startups.
        </h1>

        {/* Subtext */}
        <p className="hero-subtext font-sans text-lg sm:text-xl text-embranix-text-secondary max-w-[560px] mx-auto mb-8 leading-relaxed">
          We own and operate three innovative startups — providing capital, strategy, and the operational foundation to turn ideas into thriving businesses.
        </p>

        {/* CTA Button */}
        <div className="hero-cta">
          <Link to="/ventures" className="btn-primary inline-block">
            Explore Our Ventures
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B6560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
