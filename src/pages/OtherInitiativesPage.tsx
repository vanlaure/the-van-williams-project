import { motion } from 'framer-motion';
import { Brain, Podcast, MessageSquare, BookOpen, Dog, Dumbbell, Sparkles } from 'lucide-react';
import { InitiativeCard } from '../components/initiatives/InitiativeCard';
import { InitiativesBackground } from '../components/backgrounds/InitiativesBackground';

const initiatives = [
  {
    icon: BookOpen,
    title: "The Memory Bible",
    description: "AI-powered Bible verse memorization assistant that generates visual mnemonics for better retention.",
    details: [
      "• GPT-powered verse analysis",
      "• Visual mnemonic generation",
      "• Interactive learning experience",
      "• Progress tracking"
    ],
    link: "https://chatgpt.com/g/g-UTkhnOYp1-memory-bible",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Podcast,
    title: "The Van Williams Project Podcast",
    description: "AI-generated podcast created by NotebookLM, featuring realistic hosts discussing project insights.",
    details: [
      "• Website content analysis",
      "• Natural voice synthesis",
      "• Emotional expression",
      "• Rapid generation (60s)",
      "• Listen to the podcast"
    ],
    link: "https://drive.google.com/file/d/1i8X7-Txg2PLJmvE9TkzdUb6wv-5ofZ4d/view?usp=drive_link",
    gradient: "from-purple-500/20 to-pink-500/20",
    audio: "/audio/TheVanWilliamsProject (1).mp3"
  },
  {
    icon: MessageSquare,
    title: "Website Chatbot",
    description: "GPT-powered chatbot that provides accurate website information through content scraping.",
    details: [
      "• Website content scraping",
      "• Flowise integration",
      "• Cloud deployment (Render)",
      "• Low-temperature responses",
      "• Cost-effective solution"
    ],
    gradient: "from-pink-500/20 to-orange-500/20"
  },
  {
    icon: Brain,
    title: "Upcoming Projects",
    description: "Exciting new initiatives in development for 2024-2025.",
    details: [
      "• Cole Adams Series finale - 'The Destruction'",
      "• The Chronicles of Cain - New thriller series",
      "• 'On Our Way' travel guide series",
      "• Business Resiliency as a Service (BRaaS)",
      "• AI Editing and Publishing Agency (AEPA)",
      "• PetDox App",
      "• Fitness App"
    ],
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: Dog,
    title: "PetDox App",
    description: "AI-powered pet health monitoring and documentation system.",
    details: [
      "• Real-time health tracking",
      "• Automated vet documentation",
      "• Behavior analysis",
      "• Nutrition recommendations",
      "• Emergency alerts"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Dumbbell,
    title: "Fitness App",
    description: "Personalized AI fitness coach and workout planner.",
    details: [
      "• Custom workout generation",
      "• Progress tracking",
      "• Form analysis",
      "• Nutrition planning",
      "• Goal optimization"
    ],
    gradient: "from-cyan-500/20 to-blue-500/20"
  }
];

export function OtherInitiativesPage() {
  return (
    <div className="relative min-h-screen">
      <InitiativesBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Other AI Initiatives
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our diverse range of AI-powered projects, from Bible verse memorization
              to automated content creation and intelligent chatbots.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <InitiativeCard
                key={index}
                initiative={initiative}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 text-blue-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg font-semibold">Stay tuned for more mind-blowing innovations!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
