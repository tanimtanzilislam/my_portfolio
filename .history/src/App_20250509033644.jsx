import React, { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(0);

  return (
    <>
      <LoadingScreen />
    </>
  );
}

export default App;
