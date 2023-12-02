import React from 'react';
import { Link } from 'react-router-dom'

const Success = () => {

  return (
    <div>
      <div className='max-w-md mx-auto mt-20 bg-green-600 rounded text-white p-4'>
        <h2>Payment successfull</h2>
        <Link to='/' className='text-white hover:underline text-center'>continue shopping</Link>
      </div>
    </div>
  )
}

export default Success
