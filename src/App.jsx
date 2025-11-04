import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Leaf } from 'lucide-react';
import HeroSection from './components/HeroSection';
import StatsOverview from './components/StatsOverview';
import ActionsAndShop from './components/ActionsAndShop';
import LeaderboardPreview from './components/LeaderboardPreview';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('po-theme');
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefers;
    setDarkMode(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('po-theme', next ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900 antialiased dark:bg-emerald-950 dark:text-emerald-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-100/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-emerald-800/40 dark:bg-emerald-900/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow shadow-emerald-600/30">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-emerald-700 dark:text-emerald-200">Sustainable Commerce</div>
              <div className="text-lg font-bold tracking-wide text-emerald-900 dark:text-emerald-100">PAPER OASIS</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-emerald-800 md:flex dark:text-emerald-100">
            <button className="hover:text-emerald-600 dark:hover:text-emerald-300">Home</button>
            <button className="hover:text-emerald-600 dark:hover:text-emerald-300">Dashboard</button>
            <button className="hover:text-emerald-600 dark:hover:text-emerald-300">Shop</button>
            <button className="hover:text-emerald-600 dark:hover:text-emerald-300">Leaderboard</button>
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-800 shadow-sm hover:bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-800/40 dark:text-emerald-100"
          >
            {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="hidden sm:inline">{darkMode ? 'Dark' : 'Light'} mode</span>
          </button>
        </div>
      </header>

      <main>
        <HeroSection onRecycleClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} onShopClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })} />
        <StatsOverview />
        <ActionsAndShop />
        <LeaderboardPreview />
      </main>

      <footer className="border-t border-emerald-100 bg-white py-8 dark:border-emerald-800/40 dark:bg-emerald-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-emerald-700/70 dark:text-emerald-200/70">
              © {new Date().getFullYear()} Paper Oasis. Building a greener future.
            </div>
            <div className="text-sm text-emerald-700/70 dark:text-emerald-200/70">
              Earn points by recycling • Redeem in the eco‑shop • Celebrate progress
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
