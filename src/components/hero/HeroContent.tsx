import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function HeroContent() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/writing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative w-40 h-40"
      >
        <img 
          src="/VW_Logo.jpg" 
          alt="VW Logo"
          className="w-full h-full object-contain rounded-full"
        />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-6xl md:text-8xl font-bold text-center mb-6 font-space-grotesk relative"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          The Van Williams Project
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl md:text-3xl text-center max-w-4xl mx-auto text-blue-100 mb-12 font-inter relative"
      >
        Pioneering the future of AI-driven creativity through innovative applications
        and groundbreaking research
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-wrap justify-center gap-4 relative"
      >
        <motion.button
          onClick={handleExplore}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Projects
        </motion.button>
        <motion.a
          href="#about"
          className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
}
