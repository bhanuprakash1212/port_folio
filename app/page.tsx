'use client';

import { useEffect, useState } from 'react';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';
import { THEME, LOADING_CONFIG } from './constants/constant';

export default function Home() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Handle initial page load
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, LOADING_CONFIG.duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen" style={{ background: THEME.colors.background }}>
      {isPageLoading && <LoadingScreen />}
      <div
        className="transition-opacity duration-500"
        style={{
          opacity: isPageLoading ? 0 : 1,
          transition: THEME.transitions.slow
        }}
      >
        <About />
      </div>
    </main>
  );
}
