import React from 'react';
import SiteHeader from '../components/forge/SiteHeader';
import HeroSection from '../components/forge/HeroSection';
import ProblemSection from '../components/forge/ProblemSection';
import StagesSection from '../components/forge/StagesSection';
import TurnaroundSection from '../components/forge/TurnaroundSection';
import ClientsSection from '../components/forge/ClientsSection';
import DeliverablesSection from '../components/forge/DeliverablesSection';
import CaseStudiesSection from '../components/forge/CaseStudiesSection';
import FaqSection from '../components/forge/FaqSection';
import CtaSection from '../components/forge/CtaSection';
import NewsletterSection from '../components/forge/NewsletterSection';
import SiteFooter from '../components/forge/SiteFooter';

import useForgeStages from '../hooks/useForgeStages';
import useForgeFaqs from '../hooks/useForgeFaqs';
import useForgeClients from '../hooks/useForgeClients';
import useForgeCaseStudies from '../hooks/useForgeCaseStudies';
import useForgeStats from '../hooks/useForgeStats';

export const ForgeSystemPage: React.FC = () => {
  const { data: stages } = useForgeStages();
  const { data: faqs } = useForgeFaqs();
  const { data: clients } = useForgeClients();
  const { data: caseStudies } = useForgeCaseStudies();
  const { data: stats } = useForgeStats();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <StagesSection stages={stages} />
        <TurnaroundSection stats={stats} stages={stages} />
        <ClientsSection clients={clients} />
        <DeliverablesSection />
        <CaseStudiesSection caseStudies={caseStudies} />
        <FaqSection faqs={faqs} />
        <CtaSection />
      </main>
      <NewsletterSection />
      <SiteFooter />
    </>
  );
};

export default ForgeSystemPage;
