import './App.css';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'; // Import social media icons
import { GiPineapple } from 'react-icons/gi'; // Import pineapple icon

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/goodpop.svg`}
            className="App-logo"
            alt="logo"
          />
          <div className="App-buttons">
            <a
              className="App-button"
              href="https://twitter.com/yourprofile" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} /> Twitter
            </a>
            <a
              className="App-button"
              href="https://t.me/yourprofile" // Replace with your Telegram URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={24} /> Telegram
            </a>
            <a
              className="App-button"
              href="https://yourcoinlink.com" // Replace with your Coin URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiPineapple size={24} /> Pineapple
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

