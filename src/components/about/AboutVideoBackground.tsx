import { motion } from 'framer-motion';

export function AboutVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-loop-animation-8902-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
    </div>
  );
}