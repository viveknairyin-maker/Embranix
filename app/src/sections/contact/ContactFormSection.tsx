import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from('.contact-form-col', {
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

    gsap.from('.contact-info-col', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="bg-embranix-bg py-20 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left - Form */}
          <div className="contact-form-col lg:w-[55%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent border-0 border-b border-embranix-border-dark py-4 font-sans text-base text-embranix-text placeholder:text-embranix-text-secondary/50 outline-none focus:border-embranix-red transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-0 border-b border-embranix-border-dark py-4 font-sans text-base text-embranix-text placeholder:text-embranix-text-secondary/50 outline-none focus:border-embranix-red transition-colors duration-200"
                />
              </div>
              <div>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-0 border-b border-embranix-border-dark py-4 font-sans text-base text-embranix-text outline-none focus:border-embranix-red transition-colors duration-200 cursor-pointer"
                >
                  <option value="" disabled className="text-embranix-text-secondary">
                    Select Subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="acquisition">Startup Acquisition</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-0 border-b border-embranix-border-dark py-4 font-sans text-base text-embranix-text placeholder:text-embranix-text-secondary/50 outline-none focus:border-embranix-red transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-secondary w-full mt-4"
              >
                Send Message
              </button>

              {submitted && (
                <p className="font-sans text-sm text-embranix-red mt-2 text-center">
                  Your message has been sent. We&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="contact-info-col lg:w-[45%]">
            <div className="flex flex-col gap-10">
              {/* Email */}
              <div>
                <span className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase block mb-2">
                  Email Us
                </span>
                <span className="font-serif text-xl text-embranix-text">
                  hello@embranix.com
                </span>
              </div>

              {/* Location */}
              <div>
                <span className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase block mb-2">
                  Location
                </span>
                <span className="font-serif text-xl text-embranix-text">
                  India
                </span>
              </div>

              {/* For Student Founders */}
              <div>
                <span className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase block mb-2">
                  For Student Founders
                </span>
                <p className="font-sans text-base text-embranix-text-secondary leading-relaxed">
                  If you&apos;re a student founder looking to get acquired, use the form with subject &quot;Startup Acquisition&quot; and tell us about your venture.
                </p>
              </div>

              {/* Venture Websites */}
              <div>
                <span className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase block mb-3">
                  Our Ventures
                </span>
                <ul className="space-y-2">
                  <li>
                    <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                      lettrblack.com
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                      progen5.com
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                      fusecake.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
