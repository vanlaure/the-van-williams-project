interface NavigationItem {
  label: string;
  fullLabel: string;
  href: string;
  description: string;
  keywords: string[];
  relatedPages: string[];
  canonicalUrl: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    fullLabel: 'Home - Welcome to Our Site',
    href: '/',
    description: 'Explore the intersection of AI, music, art, and technology with Van Williams Project. Discover innovative AI tools, original music compositions, and digital art.',
    keywords: ['AI technology', 'music production', 'digital art', 'Van Williams Project', 'creative technology', 'innovation'],
    relatedPages: ['/art', '/music', '/writing'],
    canonicalUrl: 'https://vanwilliamsproject.com'
  },
  {
    label: 'History',
    fullLabel: 'Our History - Learn About Us',
    href: '/history',
    description: 'Learn about the journey and evolution of Van Williams Project, from its inception to current innovations in AI and creative technology.',
    keywords: ['project history', 'AI development', 'creative evolution', 'technology journey', 'Van Williams'],
    relatedPages: ['/', '/team', '/future'],
    canonicalUrl: 'https://vanwilliamsproject.com/history'
  },
  {
    label: 'Writing',
    fullLabel: 'Writing Projects - Explore Our Work',
    href: '/writing',
    description: 'Discover our AI-assisted writing projects, exploring the possibilities of artificial intelligence in creative writing and storytelling.',
    keywords: ['AI writing', 'creative writing', 'storytelling', 'books', 'AI literature'],
    relatedPages: ['/art', '/ai-coding', '/other-initiatives'],
    canonicalUrl: 'https://vanwilliamsproject.com/writing'
  },
  {
    label: 'Music',
    fullLabel: 'Music Collection - Listen Now',
    href: '/music',
    description: 'Experience our original music compositions and productions, blending traditional musicianship with innovative AI technology.',
    keywords: ['music production', 'original compositions', 'AI music', 'audio creation', 'sound design'],
    relatedPages: ['/art', '/writing', '/other-initiatives'],
    canonicalUrl: 'https://vanwilliamsproject.com/music'
  },
  {
    label: 'AI Art',
    fullLabel: 'AI Art Gallery - View Our AI Creations',
    href: '/art',
    description: 'Explore our AI art gallery featuring stunning artwork created using cutting-edge artificial intelligence and machine learning technologies.',
    keywords: ['AI art', 'digital art', 'art gallery', 'AI generation', 'machine learning art', 'neural art'],
    relatedPages: ['/text-to-image', '/writing', '/music'],
    canonicalUrl: 'https://vanwilliamsproject.com/art'
  },
  {
    label: 'Art Tools',
    fullLabel: 'Art Tools - AI Image Generation',
    href: '/text-to-image',
    description: 'Access our suite of AI-powered art creation tools, including text-to-image generation, style transfer, and image manipulation.',
    keywords: ['art tools', 'AI tools', 'image generation', 'text to image', 'style transfer', 'creative tools'],
    relatedPages: ['/art', '/ai-coding', '/other-initiatives'],
    canonicalUrl: 'https://vanwilliamsproject.com/text-to-image'
  },
  {
    label: 'AI Labs',
    fullLabel: 'AI Initiatives - Discover More',
    href: '/other-initiatives',
    description: 'Explore our innovative AI initiatives and experiments pushing the boundaries of artificial intelligence and creativity.',
    keywords: ['AI research', 'innovation', 'technology initiatives', 'experimental AI', 'creative technology'],
    relatedPages: ['/ai-coding', '/text-to-image', '/future'],
    canonicalUrl: 'https://vanwilliamsproject.com/other-initiatives'
  },
  {
    label: 'Code',
    fullLabel: 'AI Coding Tools - Enhance Your Skills',
    href: '/ai-coding',
    description: 'Access powerful AI coding tools and resources to enhance your development skills and productivity.',
    keywords: ['AI coding', 'development tools', 'programming', 'software development', 'coding resources'],
    relatedPages: ['/other-initiatives', '/future', '/team'],
    canonicalUrl: 'https://vanwilliamsproject.com/ai-coding'
  },
  {
    label: 'Future',
    fullLabel: 'Future Plans - What Lies Ahead',
    href: '/future',
    description: 'Discover our vision for the future of AI technology and creative innovation at Van Williams Project.',
    keywords: ['future technology', 'AI vision', 'innovation roadmap', 'creative future', 'technology planning'],
    relatedPages: ['/other-initiatives', '/ai-coding', '/team'],
    canonicalUrl: 'https://vanwilliamsproject.com/future'
  },
  {
    label: 'Team',
    fullLabel: 'Meet the Team - Our Experts',
    href: '/team',
    description: 'Meet the talented team of experts behind Van Williams Project driving innovation in AI and creative technology.',
    keywords: ['team members', 'experts', 'AI specialists', 'creative professionals', 'technology leaders'],
    relatedPages: ['/history', '/future', '/info'],
    canonicalUrl: 'https://vanwilliamsproject.com/team'
  },
  {
    label: 'Info',
    fullLabel: 'Information - Get Informed',
    href: '/info',
    description: 'Find detailed information about Van Williams Project, our mission, and how to get involved with our initiatives.',
    keywords: ['project information', 'about us', 'contact', 'resources', 'getting involved'],
    relatedPages: ['/team', '/history', '/'],
    canonicalUrl: 'https://vanwilliamsproject.com/info'
  },
];
