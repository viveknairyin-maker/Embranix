import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.story-text', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.story-text',
        start: 'top 80%',
        once: true,
      },
    });

    gsap.from('.story-shape', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.story-visual',
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-embranix-bg py-20 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="story-text lg:w-[55%]">
            <h2 className="font-serif text-4xl lg:text-5xl text-embranix-text tracking-tight mb-6">
              Our Story
            </h2>
            <p className="font-sans text-base text-embranix-text-secondary leading-relaxed mb-5">
              Embranix was born from a simple belief: the best ideas often come from the youngest minds. We saw brilliant student founders with groundbreaking ideas struggling to scale due to lack of resources, network, and operational support.
            </p>
            <p className="font-sans text-base text-embranix-text-secondary leading-relaxed mb-5">
              So we built Embranix — a holding company that gives student startups the infrastructure of a big company while preserving the agility and vision of a startup.
            </p>
            <p className="font-sans text-base text-embranix-text-secondary leading-relaxed">
              Today, we own and operate three ventures, with more on the way. Each one represents our commitment to turning bold ideas into thriving businesses.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="story-visual lg:w-[45%] flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              {/* Dark rectangle */}
              <div
                className="story-shape absolute bottom-4 left-4 w-[200px] h-[140px] sm:w-[240px] sm:h-[160px] rounded-lg"
                style={{ backgroundColor: 'rgba(26, 20, 16, 0.15)' }}
              />
              {/* Gold rectangle */}
              <div
                className="story-shape absolute top-8 right-8 w-[160px] h-[100px] sm:w-[200px] sm:h-[120px] rounded-lg"
                style={{ backgroundColor: 'rgba(201, 168, 76, 0.4)' }}
              />
              {/* Red circle */}
              <div
                className="story-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full"
                style={{ backgroundColor: 'rgba(196, 29, 29, 0.8)' }}
              />
              {/* Small accent circle */}
              <div
                className="story-shape absolute bottom-12 right-4 w-10 h-10 rounded-full"
                style={{ backgroundColor: 'rgba(201, 168, 76, 0.6)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
