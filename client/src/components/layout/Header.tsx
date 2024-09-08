import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className="
     
shadow-md
 bg-gray-100 text-white fixed top-0 left-0 right-0  py-5">
            <div className="container mx-auto flex justify-between items-center px-2" >
                <Link href={'/profile'}>

                    <Button variant='secondary'><svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                        </svg>

                    </Button>
                </Link>
                <button >

                </button>
            </div>
        </div>
    );
};

export default Header;