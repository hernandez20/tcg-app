
import type { NextApiRequest, NextApiResponse } from 'next';
import { CardObject } from '@/utils/interfaces/types';

const images: CardObject[] = [
  {
    id:'1',
    frontImage: 'https://cdn.europosters.eu/image/750/218330.jpg',

  },
  {
    id:'2',
    frontImage: 'https://cdn.europosters.eu/image/750/218330.jpg',
   
  },
  {
    id:'3',

    frontImage: 'https://cdn.europosters.eu/image/750/218330.jpg',
   
  },
];


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (id) {
      const selectedImage = images.find(image => image.id === id);
      if (selectedImage) {
        res.status(200).json(selectedImage);
      } else {
        res.status(404).json({ error: 'Image not found' });
      }
    } 
    else{
  
    const { page = 1, size = 12 } = req.query;
    const startIndex = (Number(page) - 1) * Number(size);
    const endIndex = startIndex + Number(size);
    const paginatedImages = images.slice(startIndex, endIndex);
    res.status(200).json(paginatedImages);
        
  }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}