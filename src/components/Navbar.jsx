import React from 'react';

const Navbar = () => {
  return (
    <nav className=" absolute z-[100] w-full p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center space-x-20">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <a href="#menu" className="text-white hover:text-gray-400">Menu</a>
          <img src="./assets/res_logo.png" alt="Logo" className="w-36"/>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
          <a href="#mycart" className="text-white hover:text-gray-400">My Cart</a>
          <a href="#login" className="text-white hover:text-gray-400">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
