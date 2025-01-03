import { useEffect, useRef } from 'react';

export function useAutoScroll() {
  const scrollSpeedRef = useRef(0);
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowHeight = window.innerHeight;
      const mouseY = e.clientY;
      const threshold = 200; // Pixels from top/bottom to trigger scrolling
      
      if (mouseY < threshold) {
        // Mouse near top - scroll up
        const intensity = 1 - (mouseY / threshold);
        scrollSpeedRef.current = -intensity;
        isScrollingRef.current = true;
      } else if (mouseY > windowHeight - threshold) {
        // Mouse near bottom - scroll down
        const intensity = (mouseY - (windowHeight - threshold)) / threshold;
        scrollSpeedRef.current = intensity;
        isScrollingRef.current = true;
      } else {
        // Mouse in middle - stop scrolling
        isScrollingRef.current = false;
        scrollSpeedRef.current = 0;
      }
    };

    const handleScroll = () => {
      if (isScrollingRef.current) {
        window.scrollBy({
          top: scrollSpeedRef.current * 15,
          behavior: 'auto'
        });
        animationFrameRef.current = requestAnimationFrame(handleScroll);
      }
    };

    const handleMouseLeave = () => {
      isScrollingRef.current = false;
      scrollSpeedRef.current = 0;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const startScrolling = () => {
      if (isScrollingRef.current && !animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(handleScroll);
      }
    };

    const scrollInterval = setInterval(startScrolling, 16);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(scrollInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
}