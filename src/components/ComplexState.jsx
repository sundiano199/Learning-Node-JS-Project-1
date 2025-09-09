import React, { use } from 'react'
import { useState } from 'react'


//working with object data type
const ComplexState = () => {
    const [customer, setCustomer] = useState({
        name: 'Mr John', 
        address: 'Lagos', 
        email:'john@gmail.com',
    });
    // onclick button to handle the change
    // NOTE: make sure to unpack object first to ensure only seected value changes and leave therest untouched
    const handleChange = () => {
        setCustomer({...customer, address: "London", name: "John Doe"})
    }
  return (
    <div>
        <div>
            <h1 className='text-2xl '>{customer.name}</h1>
            <p>Address : {customer.address}</p>
            <p>Email : {customer.email}</p>
            <button onClick={handleChange} className='bg-blue-500 text-white p-2 rounded-md'>Change Customer</button>
        </div>
    </div>
  )
}

export default ComplexState