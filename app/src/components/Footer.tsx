import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-embranix-bg relative overflow-hidden">
      {/* Subtle geometric mark in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, #C41D1D 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.08,
          borderRadius: '50%',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 pt-20 pb-10 relative z-10">
        {/* Top Section - Logo */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-5xl text-embranix-text tracking-tight">
            Embranix
          </h3>
          <p className="font-sans text-sm text-embranix-text-secondary mt-3">
            Building tomorrow&apos;s ventures, today.
          </p>
        </div>

        {/* Middle Section - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Ventures */}
          <div className="text-center md:text-left">
            <h4 className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase mb-5">
              Ventures
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  Lettrblack
                </span>
              </li>
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  Progen5
                </span>
              </li>
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  FuseCake
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <Link to="/contact" className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center md:text-left">
            <h4 className="font-sans text-[11px] font-medium tracking-[1.5px] text-embranix-text-secondary uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  LinkedIn
                </span>
              </li>
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  Twitter
                </span>
              </li>
              <li>
                <span className="font-sans text-sm text-embranix-text hover:text-embranix-red transition-colors cursor-pointer">
                  Instagram
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-embranix-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-embranix-text-secondary">
            &copy; 2025 Embranix. All rights reserved.
          </p>
          <p className="font-sans text-xs text-embranix-text-secondary">
            hello@embranix.com
          </p>
        </div>
      </div>
    </footer>
  );
}
