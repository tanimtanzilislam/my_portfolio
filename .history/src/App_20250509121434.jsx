import React, { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {
        !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />
      }
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" :"opacity-0" } bg-black text-gray-100`}>
        {/* Your other content goes here */}

        <Navbar/>
      </div>
    </>
  );
}

export default App
