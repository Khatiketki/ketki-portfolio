import React from 'react';

function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-800 fixed top-0 z-50 flex justify-between px-6">
      <h1 className="text-xl font-bold">Ketki</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-pink-400">About</a>
        <a href="#projects" className="hover:text-pink-400">Projects</a>
        <a href="#contact" className="hover:text-pink-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
