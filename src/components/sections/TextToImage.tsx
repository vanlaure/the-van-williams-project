import { 
  ImageIcon, 
  ExternalLink,
  Zap,
  CreditCard,
  Award,
  RefreshCw,
  Sliders
} from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';

interface ImageService {
  name: string;
  url: string;
  description: string;
  requiresAccount: boolean;
}

const AI_IMAGE_SERVICES: ImageService[] = [
  {
    name: 'Leonardo.ai',
    url: 'https://leonardo.ai',
    description: 'Professional AI art generation with advanced features. Free credits after creating an account.',
    requiresAccount: true
  },
  {
    name: 'Mistral',
    url: 'https://console.mistral.ai',
    description: 'High-quality image generation powered by advanced AI. Free with account creation.',
    requiresAccount: true
  },
  {
    name: 'Stable Diffusion',
    url: 'https://stablediffusionweb.com',
    description: 'High-quality image generation with advanced controls. No account needed.',
    requiresAccount: false
  },
  {
    name: 'DALL-E Mini',
    url: 'https://www.craiyon.com',
    description: 'Fast and fun image generation, great for quick experiments. No account required.',
    requiresAccount: false
  },
  {
    name: 'Canva Text to Image',
    url: 'https://www.canva.com/your-apps/text-to-image',
    description: 'Professional image generation integrated with design tools. Free tier available.',
    requiresAccount: true
  }
];

export default function TextToImage() {
  return (
    <SectionLayout
      id="text-to-image"
      title="AI Image Generation"
      description="Transform your ideas into stunning images using AI. Choose from our recommended free text-to-image generators below."
      icon={ImageIcon}
      className="bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {AI_IMAGE_SERVICES.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>
              <p className="mt-2 text-gray-400 text-sm">
                {service.description}
                {service.requiresAccount && (
                  <span className="block mt-1 text-blue-400">
                    • Requires free account
                  </span>
                )}
              </p>
            </a>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 relative overflow-hidden max-w-3xl mx-auto">
          {/* Floating Logo Background */}
          <div className="absolute inset-y-0 right-0 w-2/3 opacity-[0.08]">
            <div className="absolute top-2 right-[5%] w-20 h-20 animate-float-slow">
              <img src="/images/services/leonardo.svg" alt="" className="w-full h-full opacity-40" />
            </div>
            <div className="absolute top-[25%] right-[45%] w-16 h-16 animate-float-slower">
              <img src="/images/services/mistral.svg" alt="" className="w-full h-full opacity-40" />
            </div>
            <div className="absolute top-[8%] right-[60%] w-18 h-18 animate-float">
              <img src="/images/services/stable-diffusion.svg" alt="" className="w-full h-full opacity-40" />
            </div>
            <div className="absolute bottom-4 right-[52%] w-16 h-16 animate-float-slow">
              <img src="/images/services/dalle.svg" alt="" className="w-full h-full opacity-40" />
            </div>
            <div className="absolute top-[70%] right-[3%] w-14 h-14 animate-float-slower">
              <img src="/images/services/canva.svg" alt="" className="w-full h-full opacity-40" />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-white mb-2">Why these services?</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                Mix of instant-access and account-based services
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-400" />
                All services have free tiers or credits
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                High-quality results across all platforms
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-400" />
                Active development and regular updates
              </li>
              <li className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-400" />
                Range of features from basic to advanced
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
