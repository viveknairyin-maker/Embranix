import HeroSection from '@/sections/home/HeroSection';
import WhatWeDoSection from '@/sections/home/WhatWeDoSection';
import VenturesPreviewSection from '@/sections/home/VenturesPreviewSection';
import ApproachSection from '@/sections/home/ApproachSection';
import JoinCtaSection from '@/sections/home/JoinCtaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <VenturesPreviewSection />
      <ApproachSection />
      <JoinCtaSection />
    </main>
  );
}
