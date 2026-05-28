import AboutHeroSection from '@/sections/about/AboutHeroSection';
import StorySection from '@/sections/about/StorySection';
import TeamSection from '@/sections/about/TeamSection';
import ValuesSection from '@/sections/about/ValuesSection';

export default function About() {
  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <TeamSection />
      <ValuesSection />
    </main>
  );
}
