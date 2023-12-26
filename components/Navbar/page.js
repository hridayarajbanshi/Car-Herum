// components/Navbar.js
import Link from 'next/link';
import react from 'react';
const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h2 className="text-aquamarine text-lg font-semibold">Car Herum</h2>
        </Link>

        <div className="hidden md:flex space-x-4">
        
      <button className=' bg-aquamarine rounded-xl p-2'>Sign In</button>
        </div>

        {/* Add responsive menu button */}
        <div className="md:hidden">
          {/* Add your responsive menu button component here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
