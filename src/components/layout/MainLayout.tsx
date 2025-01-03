import { ReactNode } from 'react';
import { NavBar } from '../navigation/NavBar';
import { BackToTop } from '../ui/BackToTop';
import { ChatBot } from '../chat/ChatBot';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="bg-black min-h-screen">
      <NavBar />
      {children}
      <BackToTop />
      <ChatBot />
    </main>
  );
}