import { useState } from 'react';
import { Code2 } from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';
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
        <SectionLayout
          id="other"
          title="AI Coding Assistants"
          description="Our journey into AI-powered coding began with GPT Engineer. Since then, we've evolved to use more sophisticated tools, primarily Bolt.diy (which we used to build this site) and the Cline extension for VS Code. We've created everything from simple applications to complex websites and full-stack SaaS platforms using these tools. The possibilities are endless – we encourage you to explore them yourself!"
          icon={Code2}
          className="bg-transparent pt-24"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <CodingTools onSelectTool={setSelectedTool} selectedTool={selectedTool} />
            <ToolDetails toolId={selectedTool} />
          </div>
        </SectionLayout>
      </div>
    </div>
  );
}
