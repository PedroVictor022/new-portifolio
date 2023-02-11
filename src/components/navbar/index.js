import NextLink from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home',
      href: '/'
    },
    {
      id: 2,
      link: 'Sobre',
      href: "/about"
    },
    {
      id: 3,
      link: 'Projetos',
      href: '/projects'
    }
  ]

  return (
    <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-black fixed border-purple-700 border-b-2">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">Pedro Victor</h1>
      </div>

      <div className="hidden md:flex ">
        {links.map(item => (
          <NextLink key={item.id} href={item.href} className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-150 duration-200">{item.link}</NextLink>
        ))}
      </div>

      <div
        className='cursor-pointer md:hidden pr-4 z-10 text-gray-600'
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav && (
          <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {
              links.map(item => (
                <NextLink href={item.href} key={item.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{item.link}</NextLink>
              ))
            }


          </div>

        )
      }


    </div>
  )
}

export default Navbar;