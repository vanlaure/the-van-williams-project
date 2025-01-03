import { useState, useEffect } from 'react';
import { AITypeSlide } from './AITypeSlide';
import { AITypeContent } from './AITypeContent';
import { aiTypes } from '../../data/aiTypes';

export function AITypesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiTypes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {aiTypes.map((type, index) => (
        <div key={type.id} className="absolute inset-0">
          <AITypeSlide type={type} isActive={currentIndex === index} />
          <AITypeContent type={type} isActive={currentIndex === index} />
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {aiTypes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}