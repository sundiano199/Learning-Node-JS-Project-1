import React from 'react'
import Button from './Button'
import {cardContents} from "./data"

const Products = () => {
  return (
    <div className='w-full py-[10rem] px-2 bg-white'>
      <div className='layout grid md:grid-cols-3 gap-8'>
        {
          cardContents.map((card)=> {
            return <div key={card.id} className={`${card.cardBg} shadow-xl w-full p-4 my-4 rounded-lg hover:scale-105 duration-300`}> 
            <img src={card.image} alt="card.title" className='w-20 mx-auto mt-[-3rem]' />
            <h1 className="font-bold text-3xl text-center mt-5">
                {card.title}
              </h1>
              <p className="text-center font-bold text-2xl mt-5">
                {card.price}
              </p>
              <p className="text-center text-xl font-semibold mt-8">
                {card.storage} GB Storage
              </p>
              <hr  className="text-gray-200 mt-2"/>
              <p className="text-center text-xl font-semibold mt-3 ">
                {card.user} Granted User
              </p>
              <hr className="text-gray-200 mt-2" />
              <p className="text-center text-xl font-semibold mt-3 ">
                Send up to
                {card.gig} GB
              </p>
              <hr className="text-gray-200 mt-2" />
              <Button
                content={" Started"}
                type={"button"}
                className={
                  "bg-green-400 text-black my-6 hover:bg-green-600 hover:text-white block mx-auto"
                }
              />
            </div>
          
        })};
      </div>
    </div>
  );
};

export default Products;