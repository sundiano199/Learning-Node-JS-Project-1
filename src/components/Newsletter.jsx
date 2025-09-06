import React from 'react'
import Button from './Button';

const Newsletter = () => {
  return  (
    <div className='bg-black' >
      <div>
        <h1 className='text-white'>Want tips & tricks to <span>optimize</span> your flow?</h1>
        <p className='text-white'>Sign up to our newsletter and stay up to date..</p>
      </div>
      <div>
        <div>
          <input type="email" name="" id="" />
          <Button content={"Notify Me"} type= {"button"} className={"bg-green-400 text-black mx-0 w-[200px] py-3 rounded-md font-medium my-6 hover:bg-green-600 hover:text-white cursor-pointer"} />

        </div>
        <div><p>We care bout the protection of your data. Read our Privacy Policy.</p></div>
      </div>
    </div>
  )
}

export default Newsletter;

