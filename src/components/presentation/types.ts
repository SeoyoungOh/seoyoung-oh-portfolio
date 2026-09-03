import React from 'react';

export interface SlideData {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle?: string;
  component: React.ComponentType<{ isActive: boolean }>;
}
