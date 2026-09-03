import React from 'react';
import { PresentationShell } from '../components/presentation/PresentationShell';
import { presentationSlides } from '../components/presentation/slidesData';

export const PhDPresentationPage: React.FC = () => {
  return <PresentationShell slides={presentationSlides} initialSlide={0} />;
};

export default PhDPresentationPage;
