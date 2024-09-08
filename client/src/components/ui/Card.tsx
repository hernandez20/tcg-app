// components/Card.tsx
'use client'

interface ImageObject {
    id: string;
    frontImage: string;
    backImage: string;
}

interface CardProps {
  id: string;
  frontImage: string;
  onClick: (image: ImageObject) => void;
}

const Card: React.FC<CardProps> = ({ id, frontImage, onClick }) => {
  return (
    <div
    onClick={() => onClick({ id, frontImage, backImage: '' })}
      className="w-32 h-40 bg-gray-400 shadow-md rounded-md flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${frontImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <p className="text-white font-bold">Card {id}</p>
    </div>
  );
};

export default Card;