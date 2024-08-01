import React, { useState, useEffect } from 'react';
import { useSpring, animated, useSprings } from '@react-spring/web';
import { FaTwitter, FaTelegramPlane, FaAddressCard } from 'react-icons/fa';
import './index.css'; // Import the Tailwind CSS

function App() {
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const buttonsSpring = useSpring({
    opacity: showSecondComponent ? 1 : 0,
    transform: showSecondComponent ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 170, friction: 26 },
  });

  const pizzaPositions = [
    { top: '20%', left: '20%' },
    { top: '40%', left: '70%' },
    { top: '50%', left: '40%' },
    { top: '70%', left: '10%' },
    { top: '20%', left: '50%' },
    { top: '60%', left: '80%' },
    { top: '40%', left: '30%' },
    { top: '80%', left: '60%' },
  ];

  const sizes = ['50px', '70px', '90px', '110px'];
  const randomSizes = pizzaPositions.map(() => sizes[Math.floor(Math.random() * sizes.length)]);

  const springs = useSprings(
    pizzaPositions.length,
    pizzaPositions.map((_, index) => ({
      from: { transform: 'rotate(0deg)' },
      to: { transform: index % 2 === 0 ? 'rotate(360deg)' : 'rotate(-360deg)' },
      config: { duration: 5000 },
      loop: true,
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowSecondComponent(true);
      } else {
        setShowSecondComponent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative min-h-screen">
      <div className="first-component bg-pop-1 bg-cover bg-center w-full h-screen flex items-center justify-center text-white text-4xl">
      </div>
      <div className="second-component bg-pop-2 bg-cover bg-center w-full h-screen flex items-center justify-center">
        {showSecondComponent && (
          <animated.div style={buttonsSpring} className="flex flex-col items-center space-y-4">
            <button
              className="bg-white text-black py-3 px-24 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-400 flex items-center space-x-2"
              onClick={() => handleButtonClick('https://twitter.com')}
            >
              <FaTwitter />
              <span>Twitter</span>
            </button>
            <button
              className="bg-white text-black py-3 px-24 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-400 flex items-center space-x-2"
              onClick={() => alert('Contract Address: 0xYourContractAddress')}
            >
              <FaAddressCard />
              <span>Contract Address</span>
            </button>
            <button
              className="bg-white text-black py-3 px-24 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-500 flex items-center space-x-2"
              onClick={() => handleButtonClick('https://telegram.org')}
            >
              <FaTelegramPlane />
              <span>Telegram</span>
            </button>
          </animated.div>
        )}
        {showSecondComponent && springs.map((springStyle, index) => (
          <animated.img
            key={index}
            src="/pizza.svg"
            style={{
              ...springStyle,
              position: 'absolute',
              ...pizzaPositions[index],
              width: randomSizes[index],
              height: randomSizes[index]
            }}
            alt="Pizza"
          />
        ))}
      </div>
    </div>
  );
}

export default App;

