import { Rocket, Sparkles, Brain, Cpu, Network, Globe, Bot, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionLayout } from '../layout/SectionLayout';
import { FutureCard } from './future/FutureCard';

const initiatives = [
  {
    icon: Brain,
    title: "Advanced Neural Networks",
    description: "Pushing the boundaries of deep learning with quantum-inspired neural architectures and self-evolving AI systems.",
    highlights: [
      "Quantum Neural Networks",
      "Self-Evolving AI Systems",
      "Biomimetic Computing"
    ],
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Network,
    title: "Hybrid Intelligence Systems",
    description: "Pioneering the fusion of multiple AI models to create more robust and adaptable intelligent systems.",
    highlights: [
      "Multi-Model Integration",
      "Cross-Domain Learning",
      "Adaptive AI Frameworks"
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Cpu,
    title: "Edge AI Innovation",
    description: "Developing next-generation AI systems that operate efficiently on edge devices with minimal latency.",
    highlights: [
      "Edge Computing Solutions",
      "Real-Time Processing",
      "Optimized AI Models"
    ],
    gradient: "from-emerald-500/20 to-blue-500/20"
  },
  {
    icon: Globe,
    title: "Global AI Integration",
    description: "Creating seamless AI experiences that transcend traditional boundaries and enhance human capabilities.",
    highlights: [
      "Cross-Platform AI",
      "Universal AI Access",
      "Ethical AI Development"
    ],
    gradient: "from-pink-500/20 to-orange-500/20"
  },
  {
    icon: Bot,
    title: "Autonomous Systems",
    description: "Building self-learning AI systems capable of independent decision-making and adaptation.",
    highlights: [
      "Self-Learning Algorithms",
      "Autonomous Decision Making",
      "Adaptive Behavior Systems"
    ],
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: Zap,
    title: "AI Acceleration",
    description: "Developing specialized hardware and software solutions to speed up AI processing and inference.",
    highlights: [
      "Custom AI Processors",
      "Optimized Algorithms",
      "High-Performance Computing"
    ],
    gradient: "from-yellow-500/20 to-green-500/20"
  }
];

export default function Future() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black" />
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SectionLayout
          id="future"
          title="Future Initiative: Pioneering Tomorrow's AI"
          description="What began as an exploration into artificial intelligence has evolved into a comprehensive understanding of its transformative potential. Through rigorous testing and real-world applications, we've discovered AI's capacity to solve complex business challenges and create measurable value across industries. From streamlining operations to enhancing customer experiences, our implementations have consistently delivered quantifiable results. Looking ahead, we're focused on translating tomorrow's AI breakthroughs into today's practical solutions. Our team combines deep technical expertise with industry knowledge to develop AI systems that address specific business needs. We're committed to responsible innovation, ensuring our AI solutions are not only powerful but also transparent, ethical, and aligned with our clients' objectives. We invite you to collaborate with us in shaping the future of AI-driven business transformation. Together, we can turn technological potential into tangible outcomes."
          icon={Rocket}
          className="bg-transparent"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <FutureCard
                key={index}
                initiative={initiative}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Our Vision</span>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Together, we're crafting an AI-enabled future that amplifies human potential,
              fosters innovation, and ensures technology serves humanity with intelligence,
              ethics, and purpose.
            </p>
          </motion.div>
        </SectionLayout>
      </div>
    </div>
  );
}
