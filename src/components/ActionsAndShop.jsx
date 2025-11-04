import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Truck, Gift, ShoppingBag, Star, MapPin } from 'lucide-react';

const ActionCard = ({ icon: Icon, title, description, cta, onClick }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md dark:border-emerald-800/40 dark:bg-emerald-900/30"
  >
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-800/50 dark:text-emerald-200">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">{title}</h3>
        <p className="mt-1 text-sm text-emerald-700/70 dark:text-emerald-200/70">{description}</p>
      </div>
    </div>
    <button
      onClick={onClick}
      className="mt-4 inline-flex items-center gap-2 self-start rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      {cta}
    </button>
  </motion.div>
);

const ProductCard = ({ image, name, price, badge }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm hover:shadow-md dark:border-emerald-800/40 dark:bg-emerald-900/30"
  >
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-emerald-50 dark:bg-emerald-800/30">
      <div className="absolute right-2 top-2 z-10 rounded-full bg-amber-400/90 px-2 py-0.5 text-xs font-medium text-emerald-900 shadow">{badge}</div>
      <div className="flex h-full w-full items-center justify-center text-emerald-600 dark:text-emerald-200">
        <ShoppingBag className="h-10 w-10 opacity-70 transition group-hover:scale-110" />
      </div>
    </div>
    <div className="mt-3 flex items-start justify-between">
      <div>
        <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">{name}</h4>
        <div className="mt-1 flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-amber-500" />
          <Star className="h-4 w-4 fill-amber-500" />
          <Star className="h-4 w-4 fill-amber-500" />
          <Star className="h-4 w-4 fill-amber-500" />
          <Star className="h-4 w-4" />
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">${price}</div>
        <button className="mt-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700">
          Add to cart
        </button>
      </div>
    </div>
  </motion.div>
);

const ActionsAndShop = () => {
  const products = [
    { name: 'Recycled Notebook', price: 8.99, badge: 'Eco -10%' },
    { name: 'Bamboo Pen Set', price: 5.49, badge: 'New' },
    { name: 'Craft Paper Pack', price: 12.0, badge: 'Best Seller' },
    { name: 'Paper Planter', price: 9.5, badge: 'Eco -5%' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ActionCard
            icon={Recycle}
            title="Submit Paper Waste"
            description="Tell us the type, weight, and location. Earn eco‑points for every kg recycled."
            cta="Start recycling"
            onClick={() => alert('Open recycle form')}
          />
          <ActionCard
            icon={Truck}
            title="Schedule Pickup"
            description="Choose a convenient time. Our team will pick up from your doorstep."
            cta="Schedule now"
            onClick={() => alert('Open scheduling modal')}
          />
          <ActionCard
            icon={Gift}
            title="Redeem Points"
            description="Use eco‑points for exclusive discounts on recycled products."
            cta="View rewards"
            onClick={() => alert('Open rewards')}
          />
          <ActionCard
            icon={MapPin}
            title="Nearby Centers"
            description="Find recycling centers and pickup zones around you."
            cta="View map"
            onClick={() => alert('Show map')}
          />
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Eco‑Shop Highlights</h3>
            <button className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-200">View all</button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsAndShop;
