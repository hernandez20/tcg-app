
'use client'

import React, { useRef } from 'react';
interface CollectibleCardProps {
  frontImage: string;
  backImage: string;
}
import '@/styles/CollectibleCard.css';
const CollectibleCard: React.FC<CollectibleCardProps> = ({ frontImage, backImage }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    
      const tarjeta = cardRef.current;
      const shine = shineRef.current;

      if (tarjeta && shine) {
        const rect = tarjeta.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
  

        const movimientoX = (mouseX / tarjeta.offsetWidth - 0.5) * 20;
        const movimientoY = (mouseY / tarjeta.offsetHeight - 0.5) * 20;
        
        tarjeta.style.transform = `rotateX(${movimientoY}deg) rotateY(${movimientoX}deg)`;
        
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const radianAngle = Math.atan2(deltaY, deltaX);
        const degreeAngle = radianAngle * (180 / Math.PI);
        const oppositeAngle = (degreeAngle + 180) % 360;
        
        shine.style.backgroundImage = `linear-gradient(${oppositeAngle}deg, rgba(0,0,0,0.1), rgba(255,255,255,0.3))`;
        shine.style.opacity = '1';
      }
    };
  
    const handleMouseLeave = () => {
      const tarjeta = cardRef.current;
      const shine = shineRef.current;
  
      if (tarjeta) {
        tarjeta.style.transform = '';
      }
      if (shine) {
        shine.style.opacity = '0';
      }
    };

    const handleClick = () => {
      const tarjeta = cardRef.current;
      if (tarjeta) {
        console.log('hola');
        tarjeta.classList.toggle('flipped');
      }
    };

    return (
      <div className="card"
       onMouseMove={handleMouseMove} 
       onMouseLeave={handleMouseLeave}
       onClick={handleClick} 
       ref={cardRef} >
        <div className="front">
          <img src={frontImage} alt="" />
          <div className="shine" ref={shineRef}></div>
        </div>
        <div className="back">
          <img src={backImage} alt="" />
        </div>
      </div>
    );
  };
  export default CollectibleCard;

