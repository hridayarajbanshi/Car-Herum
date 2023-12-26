// components/Footer.js
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-black text-aquamarine py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          Car Herum &copy; {new Date().getFullYear()}
        </p>
        <div className="mt-4 flex space-x-4">
          <Link href="/" className="text-aquamarine hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/" className="text-aquamarine hover:text-gray-400">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
