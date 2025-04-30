import { Card } from '@heroui/react';
import './GameCard.css';
import { CircleArrowIcon } from './CircleArrowIcon';

interface GameCardProps {
  value: number;
  isFlipped: boolean;
  isError: boolean;
  isPressable: boolean;
  onPress: () => void;
}

const GameCard = ({
  value,
  isFlipped,
  isError,
  isPressable,
  onPress,
}: GameCardProps) => {
  const getCardColor = () => {
    if (isError) return 'red';
    if (isFlipped) return 'green';
    return '#28272c';
  };

  return (
    <div
      className="card-container"
      style={{
        perspective: '1000px',
        height: '72px',
        width: '88px',
      }}
    >
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
        }}
      >
        <Card
          isPressable={isPressable}
          className="card-face card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#28272c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPress}
          shadow="sm"
        >
          <CircleArrowIcon size={24} color="white" />
        </Card>
        <Card
          className="card-face card-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: getCardColor(),
            transform: 'rotateY(180deg)',
          }}
          shadow="sm"
        >
          {isFlipped && (
            <span
              className="text-white font-bold"
              style={{ fontSize: '24px' }}
            >
              {value}
            </span>
          )}
        </Card>
      </div>
    </div>
  );
};

export default GameCard;
