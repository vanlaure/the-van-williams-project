import History from '../components/sections/History';
import { useAutoScroll } from '../hooks/useAutoScroll';

export function HistoryPage() {
  useAutoScroll();
  return <History />;
}