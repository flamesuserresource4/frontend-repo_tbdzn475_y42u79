import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, ShoppingBag } from 'lucide-react';

const HeroSection = ({ onRecycleClick, onShopClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-amber-50 dark:from-emerald-900/30 dark:via-emerald-800/20 dark:to-amber-900/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-sm text-emerald-700 backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/30 dark:text-emerald-200">
            <Leaf className="h-4 w-4" />
            Join the eco movement
          </div>

          <h1 className="mt-6 bg-gradient-to-b from-emerald-700 to-emerald-900 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl dark:from-emerald-200 dark:to-emerald-400">
            PAPER OASIS
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-900/80 dark:text-emerald-100/80">
            Paper Waste Management and E‑Commerce Platform that rewards you for recycling. Recycle paper, earn eco‑points, and shop beautiful recycled products.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRecycleClick}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Recycle className="h-5 w-5" />
              Recycle Paper
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onShopClick}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-emerald-700 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-900/40 dark:text-emerald-100"
            >
              <ShoppingBag className="h-5 w-5" />
              Shop Recycled
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
