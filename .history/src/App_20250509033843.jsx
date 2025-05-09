import React, { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
     { !isLoaded &&<LoadingScreen onComplete={()=>setIsLoaded/> }
    </>
  );
}

export default App;
