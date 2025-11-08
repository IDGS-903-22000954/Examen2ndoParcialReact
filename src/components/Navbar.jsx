import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between gap-6">
      <img src="/tic.png" alt="TIC Logo" className="w-24 h-auto rounded" />
      <img src="/images.png" alt="Images Logo" className="w-24 h-auto rounded" />
    </nav>
  );
};

export default Navbar;
