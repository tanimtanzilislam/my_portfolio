import React, { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoaded, set] = useState(0);

  return (
    <>
      <LoadingScreen />
    </>
  );
}

export default App;
