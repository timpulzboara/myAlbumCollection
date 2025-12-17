import './App.css'
import Home from './pages/Home';
import Background from './pages/Background';
import { useState } from 'react';

type Step = 'landing' | 'input-album';

const App = () => {
  const [step, setStep] = useState<Step>('landing');
  return (
          <Background>
                <Home />
          </Background>
  )
}

export default App
