import React from 'react'
import Button from "./Button"
import { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='text-white bg-black '>
      <nav className='flex layout justify-between items-center h-24 p-4'>
             
      <h1 className='text-3xl font-bold text-green-400 italic'>DATALY</h1>
      <div className="hidden md:flex items-center gap-3">
      <a href="">Home</a>
      <a href="">Company</a>
      <a href="">Resources</a>
      <Button content={"Get Started"} className={"bg-green-400"} />
      </div>
      <button onClick={handleToggleMenu} className='block md:hidden'>{showMenu ? <IoCloseOutline size={20} /> : <FiMenu size={20}/>}</button>
    </nav>

    {/* mobile navigation */}
    <nav className={showMenu ? "fixed left-0 top-0 bg-black w-[60%] border-r border-gray-900 h-full ease-in-out duration-500 md:hidden" : "fixed left-[-100%] md:hidden" } >
      <h1 className='text-3xl font-bold text-green-400 italic m-4'>DATALY</h1>
      <div className='uppercase p-4 flex flex-col gap-4'>
        <a href="" className='border-b p-4 border-b-gray-600'>Home</a>
        <a href="" className='border-b p-4 border-b-gray-600'>Company</a>
        <a href="" className='border-b p-4 border-b-gray-600'>Resources</a>
        <a href="" className='border-b p-4 border-b-gray-600'>Contact</a>
        <a href="" className='border-b p-4 border-b-gray-600'>About</a>
      </div>
    </nav>
    </header>
  )
}

export default Navbar