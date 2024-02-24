import React from 'react';

const Navbar = () => {
  return (
    // Changed background to transparent and added a white bottom border
    <nav className="bg-transparent text-white p-4 border-b border-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Heal And Hope</div>
       
      </div>
    </nav>
  );
};

export default Navbar;
