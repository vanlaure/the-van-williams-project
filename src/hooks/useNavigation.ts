import { useNavigate } from 'react-router-dom';

export function useNavigation() {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { handleNavigation };
}