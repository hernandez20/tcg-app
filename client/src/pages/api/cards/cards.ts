
import type { NextApiRequest, NextApiResponse } from 'next';
 import { CardObject } from '@/utils/interfaces/types';

const images: CardObject[] = [
  {
    id:'1',
    frontImage: 'https://m.media-amazon.com/images/I/51Hr7XQYs5L._AC_UF894,1000_QL80_.jpg',
    backImage: 'https://preview.redd.it/t9ly7ltc9un81.png?auto=webp&s=9ea7f72591fc13ba78772f7e926e9763ef705675',
  },
  {
    id:'2',
    frontImage: 'https://m.media-amazon.com/images/I/41qd2gHPkbL._AC_UF894,1000_QL80_.jpg',
    backImage: 'https://preview.redd.it/t9ly7ltc9un81.png?auto=webp&s=9ea7f72591fc13ba78772f7e926e9763ef705675',
  },
  {
    id:'3',

    frontImage: 'https://cardotaku.com/cdn/shop/files/043491_P_ZENIGAME.jpg?v=1687056251&width=2048',
    backImage: 'https://preview.redd.it/t9ly7ltc9un81.png?auto=webp&s=9ea7f72591fc13ba78772f7e926e9763ef705675',
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