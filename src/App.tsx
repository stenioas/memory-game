import { HeroUIProvider } from '@heroui/react';
import MemoryGame from './components/MemoryGame';

function App() {
  return (
    <HeroUIProvider className="h-screen w-screen">
      <MemoryGame />
    </HeroUIProvider>
  );
}

export default App;
