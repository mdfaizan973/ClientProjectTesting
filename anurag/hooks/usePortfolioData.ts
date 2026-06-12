import { useEffect, useState } from 'react';

export interface PortfolioData {
  profile: any;
  hero: any;
  about: any;
  skills: any;
  experience: any[];
  projects: any[];
  education: any[];
  certifications: any[];
  contact: any;
  metadata: any;
}

export function usePortfolioData(): PortfolioData | null {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data/portfolio.json');
        const portfolioData = await response.json();
        setData(portfolioData);
      } catch (error) {
        console.error('[v0] Failed to load portfolio data:', error);
      }
    };

    loadData();
  }, []);

  return data;
}
