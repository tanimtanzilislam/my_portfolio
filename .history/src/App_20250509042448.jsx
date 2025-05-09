import React, { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {
        !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />
      }
      <div class>
        {/* Your other content goes here */}
      </div>
    </>
  );
  

export default App;
