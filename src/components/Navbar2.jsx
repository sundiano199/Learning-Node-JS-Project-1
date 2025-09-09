import React from 'react'

const Navbar2 = ({length}) => {
  return (
    <div className='nav flex justify-between'>
        <h1>NAV</h1>
        <p>Cart : {length}</p>
    </div>
  )
}

export default Navbar2