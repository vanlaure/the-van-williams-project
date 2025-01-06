import { useState } from 'react';
import { Code2 } from 'lucide-react';
import { CodingTools } from './ai-coding/CodingTools';
import { ToolDetails } from './ai-coding/ToolDetails';
import { CodingBackground } from './ai-coding/CodingBackground';

export default function Other() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <CodingBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-24">
          <div className="text-center mb-16">
            <Code2 className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <p className="text-lg text-gray-400 max-w-6xl mx-auto px-16 leading-relaxed">
              Our journey into AI-powered coding began with GPT Engineer. Since then, we've evolved to use more sophisticated tools, primarily Bolt.new (which we used to build this site) and the Cline extension for VS Code. We've created everything from simple applications to complex websites and full-stack SaaS platforms using these tools. The possibilities are endless – we encourage you to explore them yourself!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <CodingTools onSelectTool={setSelectedTool} selectedTool={selectedTool} />
            <ToolDetails toolId={selectedTool} />
          </div>
        </div>
      </div>
    </div>
  );
}
