import React from 'react'
import Products from './Products.component';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()


  return (
    <div>
      <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-20">
        <div className="flex justify-between">
        <h1 className="text-center text-2xl text-indigo-800 mb-6">The greate Cart</h1>
        <span onClick={() => navigate('/cart')} className="cursor-pointer text-indigo-800 text-4xl">
           <ion-icon name="cart-outline"></ion-icon>
        </span>
        </div>
        <Products/>
      </div>
    </div>
  )
}

export default Home
