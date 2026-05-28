import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Yash Narde',
    role: 'Founder & CEO',
    initials: 'YN',
    bio: 'Serial entrepreneur with a passion for building and scaling student-led startups.',
  },
  {
    name: 'Alex Chen',
    role: 'Co-Founder & COO',
    initials: 'AC',
    bio: 'Operations expert focused on streamlining processes and maximizing efficiency.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Ventures',
    initials: 'PS',
    bio: 'Strategic leader overseeing portfolio growth and founder relationships.',
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.team-header', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.team-header',
        start: 'top 85%',
        once: true,
      },
    });

    gsap.from('.team-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 85%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="team-header text-center mb-16">
          <SectionLabel text="Leadership" className="mb-4 block" />
          <h2 className="font-serif text-4xl lg:text-5xl text-embranix-text tracking-tight">
            The minds behind
            <br />
            the mission.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card bg-embranix-bg rounded-2xl p-10 lg:p-12 text-center"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full bg-embranix-border mx-auto flex items-center justify-center mb-6">
                <span className="font-serif text-2xl text-embranix-text-secondary">
                  {member.initials}
                </span>
              </div>

              <h3 className="font-serif text-xl font-medium text-embranix-text mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-xs font-medium tracking-wide text-embranix-red uppercase mb-4">
                {member.role}
              </p>
              <p className="font-sans text-sm text-embranix-text-secondary leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
