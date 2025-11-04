import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Leaf } from 'lucide-react';

const LeaderRow = ({ rank, name, points }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: rank * 0.03 }}
    className="flex items-center justify-between rounded-lg border border-emerald-100 bg-white p-3 dark:border-emerald-800/40 dark:bg-emerald-900/30"
  >
    <div className="flex items-center gap-3">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold text-white ${
        rank === 1 ? 'bg-amber-500' : rank === 2 ? 'bg-emerald-500' : rank === 3 ? 'bg-emerald-600' : 'bg-emerald-700'
      }`}>
        {rank}
      </div>
      <div className="text-sm font-medium text-emerald-900 dark:text-emerald-100">{name}</div>
    </div>
    <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-200">
      <Leaf className="h-4 w-4 text-emerald-500" />
      {points.toLocaleString()} pts
    </div>
  </motion.div>
);

const LeaderboardPreview = () => {
  const leaders = [
    { name: 'Ava Green', points: 4820 },
    { name: 'Noah Rivers', points: 4510 },
    { name: 'Mila Forest', points: 4330 },
    { name: 'Leo Earth', points: 3890 },
    { name: 'Zoe Bloom', points: 3650 },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-800/40 dark:bg-emerald-900/30">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">Leaderboard</h3>
          </div>
          <div className="text-sm text-emerald-700/70 dark:text-emerald-200/70">Top recyclers this week</div>
        </div>
        <div className="grid gap-2">
          {leaders.map((l, i) => (
            <LeaderRow key={l.name} rank={i + 1} name={l.name} points={l.points} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
