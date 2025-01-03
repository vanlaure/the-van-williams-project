import { motion } from 'framer-motion';

export function RotatingEarth() {
  return (
    <div className="absolute inset-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Earth from Space"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}