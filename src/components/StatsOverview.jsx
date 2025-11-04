import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Leaf, BarChart3, Users } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative overflow-hidden rounded-xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-emerald-800/40 dark:bg-emerald-900/30"
  >
    <div className={`absolute inset-x-0 top-0 h-1 ${accent}`} />
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-800/50 dark:text-emerald-200">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-2xl font-semibold text-emerald-900 dark:text-emerald-100">{value}</div>
        <div className="text-sm text-emerald-700/70 dark:text-emerald-200/70">{label}</div>
      </div>
    </div>
  </motion.div>
);

const StatsOverview = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Recycle} label="Paper Collected (kg)" value={"12,480"} accent="bg-emerald-500" />
        <StatCard icon={Leaf} label="Trees Saved" value={"1,740"} accent="bg-emerald-400" />
        <StatCard icon={Users} label="Active Recyclers" value={"8,215"} accent="bg-emerald-500/80" />
        <StatCard icon={BarChart3} label="Orders of Eco Goods" value={"3,092"} accent="bg-amber-400" />
      </div>
    </section>
  );
};

export default StatsOverview;
