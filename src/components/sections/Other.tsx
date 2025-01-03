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
          description="Enhance your development workflow with AI-powered tools and assistants. From intelligent code completion to automated testing, these tools help streamline your coding process and boost productivity."
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