import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}