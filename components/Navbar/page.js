// components/Navbar.js
'use client';
import Link from 'next/link';
import { IoIosBug } from "react-icons/io";
import react from 'react';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'},
    
    {label: 'About', href: '/about'},
  ]
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href="/">
          <IoIosBug className="text-aquamarine text-4xl" />
        </Link>
        <ul className='flex items-center gap-12'>
        {links.map(link =>
          <Link key={link.href}
          href={link.href}
          className={`${link.href === currentPath ? 'text-white': 'text-gray-400'}  hover:text-aquamarine`}
          >{link.label}</Link>
          )}

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
