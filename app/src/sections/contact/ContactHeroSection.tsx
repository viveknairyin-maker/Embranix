import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionLabel from '@/components/SectionLabel';

export default function ContactHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.contact-hero-label', { opacity: 0, y: 20, duration: 0.6 })
      .from('.contact-hero-headline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
      .from('.contact-hero-body', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-[120px] pb-20 px-6 lg:px-16"
    >
      <div className="max-w-[700px] mx-auto text-center">
        <SectionLabel text="Get In Touch" className="contact-hero-label mb-4 block" />
        <h1 className="contact-hero-headline font-serif text-4xl sm:text-5xl lg:text-6xl text-embranix-text tracking-tight mb-6 leading-tight">
          Let&apos;s build
          <br />
          something together.
        </h1>
        <p className="contact-hero-body font-sans text-lg lg:text-xl text-embranix-text-secondary max-w-[560px] mx-auto leading-relaxed">
          Whether you&apos;re a student founder with a bold idea, an investor looking to partner, or just curious about what we do — we&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}
