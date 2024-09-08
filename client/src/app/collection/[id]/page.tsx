'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CollectibleCard from "@/components/CollectibleCard/CollectibleCard"
import  HomeLayout from "@/components/layout/HomeLayout"

interface ImageObject {
  frontImage: string;
  backImage: string;
}
export default function CardsPage() {
  const params = useParams(); // Obtiene los parámetros de la ruta
  const [selectedImage, setSelectedImage] = useState<ImageObject | null>(null);

  // Verifica que el ID esté presente y sea una cadena
  const id = typeof params?.id === 'string' ? params?.id : null;

  useEffect(() => {
    const fetchImage = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/cards/cards?id=${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSelectedImage(data);
        } catch (error) {
          console.error('Error fetching the selected image:', error);
        }
      }
    };

    fetchImage();
  }, [id]); // Dependencia en id

  return (
    <>
     <HomeLayout>
        {selectedImage ? (
          <div className="flex justify-center items-center m-5">
            <CollectibleCard frontImage={selectedImage.frontImage} backImage={selectedImage.backImage} />
          </div>

        ) : (
          <p>Cargando...</p>
        )}
      </HomeLayout>
    </>
  );
}