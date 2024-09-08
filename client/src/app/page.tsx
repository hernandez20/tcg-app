/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex justify-center h-screen">

<div className='flex items-end  mb-5 justify-center'>


      <Link href="/login">
        <button className="   sm: min-w-24 md:min-w-80  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <p>Let's Login!</p>
        </button>
      </Link>
    </div>

    </div>
  );
}