import { useState } from 'react';
import type { Message } from '../types/chat';
import { useAIConfig } from './useAIConfig';

export function useChatState() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { isConfigured } = useAIConfig();

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);

    if (!isConfigured) {
      // Add default response if AI is not configured
      const defaultResponse: Message = {
        role: 'assistant',
        content: 'Hi! To enable AI chat, please add your API configuration.'
      };
      setMessages(prev => [...prev, defaultResponse]);
      return;
    }

    // TODO: Implement AI response logic when configured
    // For now, just echo back
    const response: Message = {
      role: 'assistant',
      content: `Hi! I received your message: "${content}"`
    };
    setMessages(prev => [...prev, response]);
  };

  return { messages, sendMessage };
}