import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='text-center bg-black'>
      <h3 className='text-green-400 font-bold text-md py-4'>GROWING WITH DATA ANALYTICS</h3>
      <h1 className='text-white font-bold text-7xl pb-5'>GROW WITH DATA.</h1>
      <h2 className='text-white font-bold text-4xl py-3'>Fast, Flexible Financing for BTB|</h2>
      <h2 className='text-gray-400 font-bold text-2xl px-60'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</h2>
      <Button content={"Get Started"} type= {"button"} className={"bg-green-400 text-black mx-0 w-[200px] py-3 rounded-md font-medium mt-8 mb-30 hover:bg-green-600 hover:text-white cursor-pointer"} />
    </div>
  )
}

export default Hero