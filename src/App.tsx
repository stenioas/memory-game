import { HeroUIProvider } from '@heroui/react';
import MemoryGame from './components/MemoryGame';

function App() {
  return (
    <HeroUIProvider
      className="h-screen w-screen"
      style={{ maxHeight: '800px' }}
    >
      <MemoryGame />
    </HeroUIProvider>
  );
}

export default App;
