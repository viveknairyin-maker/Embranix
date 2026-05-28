import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

export default function JoinCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.cta-content', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-embranix-text py-20 px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Background decorative mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, #C41D1D 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.2,
          borderRadius: '50%',
        }}
      />

      <div className="cta-content max-w-[700px] mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl lg:text-6xl text-white tracking-tight mb-6 leading-tight">
          Got a startup idea?
          <br />
          We&apos;ll back you.
        </h2>
        <p className="font-sans text-lg lg:text-xl text-white/70 max-w-[600px] mx-auto leading-relaxed mb-8">
          Embranix is actively looking to acquire student-led startups. We bring funding, a full team, and the infrastructure to make your vision real. Only 10% equity — because your vision deserves more.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-secondary inline-block">
            Submit Your Startup
          </Link>
        </div>
        <p className="font-sans text-sm text-white/50 mt-6 hover:text-white/80 transition-colors">
          Or email us at hello@embranix.com
        </p>
      </div>
    </section>
  );
}
