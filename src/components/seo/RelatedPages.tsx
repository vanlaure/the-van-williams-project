import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { motion } from 'framer-motion';

export function RelatedPages() {
  const location = useLocation();
  const currentPage = navigationItems.find(item => item.href === location.pathname);
  
  if (!currentPage?.relatedPages?.length) return null;

  const relatedPageItems = currentPage.relatedPages
    .map(href => navigationItems.find(item => item.href === href))
    .filter(Boolean); // Remove any undefined items

  if (!relatedPageItems.length) return null;

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Related Content</h2>
          <p className="text-gray-400">Explore more related topics and content</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedPageItems.map((page, index) => (
            page && (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  to={page.href}
                  className="block p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700 hover:border-gray-600"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{page.fullLabel}</h3>
                  <p className="text-gray-400 text-sm mb-4">{page.description}</p>
                  <span className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
