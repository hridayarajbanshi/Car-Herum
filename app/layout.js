import './globals.css'
// import {Poppins} from 'next/font/google';
import Footer from '../components/Footer/page'
import Navbar from '../components/Navbar/page'
export const metadata = {
  title: 'Car Herum',
  description: 'Website for car rental and bookings to make your life easier.',
}
// const poppins = Poppins({
//   weight: 500,
//   subsets: ['latin'],
// })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>

    </html>
  )
}
