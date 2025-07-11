import { useState, useEffect } from 'react';
import { Alert, Button, Chip } from '@heroui/react';
import GameCard from './GameCard';

interface GameCard {
  id: number;
  value: number;
  isFlipped: boolean;
  isError: boolean;
}

const TabBegginer = () => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [currentSequence, setCurrentSequence] = useState<number>(1);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Generate random sequence from 1 to 9
    const randomSequence = Array.from({ length: 9 }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    );

    const initialCards: GameCard[] = randomSequence.map((value, index) => ({
      id: index + 1,
      value: value,
      isFlipped: false,
      isError: false,
    }));
    setCards(initialCards);
    setCurrentSequence(1);
    setGameWon(false);
    setHasError(false);
  };

  const handleCardClick = (card: GameCard) => {
    if (card.isFlipped || gameWon || hasError) return;

    const newCards = [...cards];
    const cardIndex = newCards.findIndex((c) => c.id === card.id);

    // Always flip the clicked card
    newCards[cardIndex].isFlipped = true;
    setCards(newCards);

    if (card.value === currentSequence) {
      if (currentSequence === 9) {
        setGameWon(true);
      } else {
        setCurrentSequence(currentSequence + 1);
      }
    } else {
      // Wrong card clicked, mark it as error and wait a moment before resetting
      newCards[cardIndex].isError = true;
      setCards(newCards);
      setHasError(true);
      setTimeout(() => {
        const resetCards = [...newCards];
        resetCards.forEach((c) => {
          c.isFlipped = false;
          c.isError = false;
        });
        setCards(resetCards);
        setCurrentSequence(1);
        setHasError(false);
      }, 1000);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '800px',
        width: '100%',
        maxWidth: '480px',
        gap: '24px',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '0 8px' }}
      >
        {gameWon ? (
          <Alert
            variant="faded"
            color="success"
            hideIcon
            className="dark text-center"
          >
            <span
              className="text-white text-center w-full"
              style={{ fontSize: '16px', fontWeight: 'bold' }}
            >
              PARABÉNS! VOCÊ VENCEU! 🎉
            </span>
          </Alert>
        ) : (
          <Alert variant="bordered" hideIcon className="dark">
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
                gap: '8px',
              }}
            >
              <span
                className="text-white"
                style={{ fontSize: '16px', fontWeight: 'bold' }}
              >
                Próximo número:
              </span>
              <Chip color="primary" size="lg" radius="md" variant="bordered">
                <span
                  className="text-white"
                  style={{ fontSize: '16px', fontWeight: 'bold' }}
                >
                  {currentSequence}
                </span>
              </Chip>
            </span>
          </Alert>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {/* First row - 3 cards */}
        <div className="flex justify-center gap-4">
          {cards.slice(0, 3).map((card) => (
            <GameCard
              key={card.id}
              value={card.value}
              isFlipped={card.isFlipped}
              isError={card.isError}
              isPressable={!hasError}
              onPress={() => handleCardClick(card)}
            />
          ))}
        </div>

        {/* Second row - 3 cards */}
        <div className="flex justify-center gap-4">
          {cards.slice(3, 6).map((card) => (
            <GameCard
              key={card.id}
              value={card.value}
              isFlipped={card.isFlipped}
              isError={card.isError}
              isPressable={!hasError}
              onPress={() => handleCardClick(card)}
            />
          ))}
        </div>

        {/* Third row - 3 cards */}
        <div className="flex justify-center gap-4">
          {cards.slice(6, 9).map((card) => (
            <GameCard
              key={card.id}
              value={card.value}
              isFlipped={card.isFlipped}
              isError={card.isError}
              isPressable={!hasError}
              onPress={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center px-2">
        <Button
          size="lg"
          color="primary"
          variant="flat"
          onPress={initializeGame}
          fullWidth
          className="dark"
          style={{
            fontWeight: 'bold',
          }}
        >
          Reiniciar
        </Button>
      </div>
    </div>
  );
};

export default TabBegginer;
