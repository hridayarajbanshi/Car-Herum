// components/Navbar.js
import Link from 'next/link';
import { IoIosBug } from "react-icons/io";
import react from 'react';
const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href="/">
          <IoIosBug className="text-aquamarine text-4xl" />
        </Link>
        <ul className='flex items-center gap-12'>
        <li className='text-white hover:text-xl transition-all'><Link href="/">Dashboard</Link></li>
        <li className='text-white hover:text-xl transition-all'><Link href="/">Issues</Link></li>
          <li className='text-white hover:text-xl transition-all'><Link href="/">About</Link></li>
        </ul>
        <div className="hidden md:flex space-x-4">
        
      <button className=' bg-aquamarine rounded-xl p-2'>Sign in</button>
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
