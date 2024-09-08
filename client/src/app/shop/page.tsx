'use client'
import HomeLayout from "@/components/layout/HomeLayout"
import { usePathname, useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';
import Envelope from "@/components/ui/Envelope";
interface shopObject {
    id: string;
    frontImage: string;
    backImage: string;
}
export default function Shop() {
    const pathname = usePathname();
    const router = useRouter();

    const [products, setproducts] = useState<shopObject[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [batchSize, setBatchSize] = useState(2);

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch(`/api/shop/shop?page=${currentPage}&size=${batchSize}`);
                const data = await response.json();
                setproducts(data);
                setBatchSize(batchSize)

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchproducts();
    }, [currentPage, batchSize]);
    const handleCardClick = (image: shopObject) => {
        router.push(`${pathname}/${image.id}`);
    };


    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    return (
        <>
            <HomeLayout>
           
                    <div className="h-96 mt-20 w-full">
                        <div className="grid xs:grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-6 gap-4 mt-8 ml-8">
                            {products.map((image) => (
                                <Envelope
                                    id={String(image.id)}
                                    key={image.id}
                                    frontImage={image.frontImage}
                                    onClick={handleCardClick}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                className={`px-4 py-2 rounded-md text-black ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                            <button
                                className="px-4 py-2 text-black rounded-md ml-2"
                                onClick={handleNextPage}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                


          
            </HomeLayout>

        </>
    )
}