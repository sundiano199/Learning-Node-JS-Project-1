import React from 'react'
import Button from './Button';

const Newsletter = () => {
  return  (
    <div className='bg-black py-16 px-3 md:flex md:justify-between' >
      <div className='flex flex-col justify-center my-5 md:my-0 '>
        <h1 className='text-white font-bold text-2xl md:text-4xl '>Want tips & tricks to <span className='text-green-400'>optimize</span> your flow?</h1>
        <p className='text-white my-2 md:my-0'>Sign up to our newsletter and stay up to date..</p>
      </div>
      <div className=' md:ml-20  md:flex-1'>
        <div className=' md:flex md:gap-5 '>
          <input type="email" name="" id="" placeholder='Enter Email'
          className='bg-white py-3 my-1 md:my-6 rounded-md pl-3 w-[205px] md:w-[200px]'/>
          <Button content={"Notify Me"} type= {"button"} className={"bg-green-300 text-black mx-0 w-[200px] py-3 rounded-md font-medium my-2 md:my-6 hover:bg-green-600 hover:text-white cursor-pointer"} />

        </div>
        <div className='mr-15'><p className='text-white'>We care bout the protection of your data. Read our <span className='text-green-400'>Privacy Policy</span>.</p></div>
      </div>
    </div>
  )
}

export default Newsletter;

