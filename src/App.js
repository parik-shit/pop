import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './index.css'; // Import the Tailwind CSS

function App() {
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const buttonsSpring = useSpring({
    opacity: showSecondComponent ? 1 : 0,
    transform: showSecondComponent ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 2000 }, // Set duration to 2000ms for a slower animation
  });

  useEffect(() => {
    const handleScroll = (event) => {
      // Prevent default scroll behavior
      event.preventDefault();

      if (window.scrollY > lastScrollY && !showSecondComponent) {
        // Scrolling down
        setShowSecondComponent(true);
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      } else if (window.scrollY < lastScrollY && showSecondComponent) {
        // Scrolling up
        setShowSecondComponent(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, showSecondComponent]);

  return (
    <div className="relative min-h-screen">
      <div className="first-component bg-pop-1 bg-cover bg-center w-full h-screen flex items-center justify-center text-white text-4xl">
        First Component
      </div>
      <div className="second-component bg-pop-2 bg-cover bg-center w-full h-screen flex items-center justify-center">
        {showSecondComponent && (
          <animated.div style={buttonsSpring} className="flex flex-col items-center space-y-4">
            <button className="bg-white text-black py-2 px-4 rounded">Button 1</button>
            <button className="bg-white text-black py-2 px-4 rounded">Button 2</button>
            <button className="bg-white text-black py-2 px-4 rounded">Button 3</button>
          </animated.div>
        )}
      </div>
    </div>
  );
}

export default App;

