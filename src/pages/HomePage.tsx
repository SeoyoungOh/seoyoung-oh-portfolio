import React from 'react';
import { Hero } from '../components/Hero';
import { MethodologicalScrutiny } from '../components/MethodologicalScrutiny';
import { SelectedWork } from '../components/SelectedWork';
import { PublicationsSection } from '../components/PublicationsSection';
import { ExperienceJourney } from '../components/ExperienceJourney';
import { EducationSection } from '../components/EducationSection';
import { SkillsSection } from '../components/SkillsSection';
import { ContributionSection } from '../components/ContributionSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MethodologicalScrutiny />
      <SelectedWork />
      <PublicationsSection />
      <ExperienceJourney />
      <EducationSection />
      <SkillsSection />
      <ContributionSection />
      <ContactSection />
      <Footer />
    </main>
  );
};
