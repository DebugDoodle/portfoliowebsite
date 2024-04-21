// NavigationBar.js
import React from 'react';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="p-8">
      <div className=" cursor-pointer max-w-xs mx-auto flex justify-around items-center   rounded-full">
        <div>
          <Link href="/" className="text-white font-bold hover:bg-gray-800 ease-in-out duration-300 p-2 rounded-xl">HOME</Link>
        </div>
        <div>
          <Link href="/work" className="text-white  hover:bg-gray-800 ease-in-out duration-300 rounded-xl p-2 font-bold">WORK</Link>
        </div>
        <div>
          <Link href="/" className="text-white hover:bg-gray-800 ease-in-out duration-300 rounded-xl p-2 font-bold">CONTACT</Link>
        </div>
        <div>
          <Link href="/about" className="text-white hover:bg-gray-800 ease-in-out duration-300 rounded-xl p-2 font-bold">ABOUT</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
