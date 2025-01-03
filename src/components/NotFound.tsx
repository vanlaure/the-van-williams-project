import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">404 - Not Found</h1>
        <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}