import { Nav } from '@/components/layout/Nav';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { UnifiedWorkspace } from '@/components/sections/UnifiedWorkspace';
import { ReportUnderstanding } from '@/components/sections/ReportUnderstanding';
import { ReportToImage } from '@/components/sections/ReportToImage';
import { AIChat } from '@/components/sections/AIChat';
import { BeyondImaging } from '@/components/sections/BeyondImaging';
import { FutureCapabilities } from '@/components/sections/FutureCapabilities';
import { TargetUsers } from '@/components/sections/TargetUsers';
import { DesignPrinciples } from '@/components/sections/DesignPrinciples';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <UnifiedWorkspace />
      <ReportUnderstanding />
      <ReportToImage />
      <AIChat />
      <BeyondImaging />
      <FutureCapabilities />
      <TargetUsers />
      <DesignPrinciples />
      <FinalCTA />
      <Footer />
    </main>
  );
}
