// components/Card.tsx
'use client'
import { EnvelopeProps } from "@/utils/interfaces/types";


const Envelope: React.FC<EnvelopeProps> = ({ id, frontImage, onClick }) => {
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

export default Envelope;