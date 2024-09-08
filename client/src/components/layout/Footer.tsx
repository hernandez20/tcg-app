import { useState } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Footer() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const pathname = usePathname();


  const handleButtonClick = (button: string, href: string) => {
    window.location.href = href;

    setActiveButton(button);
  };

  return (
    <nav className="bg-gray-100   
     
      shadow-inner 
             fixed 
             inset-x-0 
             bottom-0 
             p-4">
      <div className="container flex justify-between ">


        <Button
          className={`w-1/4 ${activeButton === 'coleccion' ? 'transform scale-110' : ''} ${pathname === '/collection' ? 'bg-gray-300 ring-gray-500' : ''}`}
          variant="primary"
          onClick={() => handleButtonClick('coleccion', '/collection')}>

          <Link href="/collection">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-500">
              <rect x="2" y="3" width="7" height="12" rx="2" ry="2" />
              <rect x="9" y="3" width="7" height="12" rx="2" ry="2" />
              <rect x="16" y="3" width="7" height="12" rx="2" ry="2" />
              <path d="M2 10h7M9 10h7M16 10h7" />
              <path d="M2 21h7M9 21h7M16 21h7" />
            </svg>
          </Link>
        </Button>


        <Button
          className={`w-1/4 ${activeButton === 'home' ? 'transform scale-110' : ''} ${pathname === '/home' ? 'bg-gray-300 ring-gray-500' : ''}`}
          variant="primary"
          onClick={() => handleButtonClick('home', '/home')}
        >


          <Link href="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-500" 
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </Link>

        </Button>
        <Button
          className={`w-1/4 ${activeButton === 'tienda' ? 'transform scale-110' : ''} ${pathname === '/shop' ? 'bg-gray-300 ring-gray-500' : ''}`}
          variant="primary"
          onClick={() => { handleButtonClick('tienda', '/shop') }}
        >

          <Link href="/shop">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-500"
            >
              <path d="M3 3h18l-1.5 9H4.5L3 3z" />
              <path d="M1 1h22v2H1z" />
              <path d="M3 13h18v8H3z" />
              <path d="M9 21v-6h6v6" />
              <path d="M9 21h6" />
            </svg>
          </Link>
        </Button>
      </div>
    </nav>
  );
}