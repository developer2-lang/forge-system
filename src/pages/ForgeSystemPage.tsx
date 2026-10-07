import React from 'react';
import SiteHeader from '../components/forge/SiteHeader';
import HeroSection from '../components/forge/HeroSection';
import ProblemSection from '../components/forge/ProblemSection';
import StagesSection from '../components/forge/StagesSection';
import TurnaroundSection from '../components/forge/TurnaroundSection';

import useForgeStages from '../hooks/useForgeStages';
import useForgeStats from '../hooks/useForgeStats';

export const ForgeSystemPage: React.FC = () => {
  const { data: stages } = useForgeStages();
  const { data: stats } = useForgeStats();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <StagesSection stages={stages} />
        <TurnaroundSection stats={stats} stages={stages} />
      </main>
    </>
  );
};

export default ForgeSystemPage;
