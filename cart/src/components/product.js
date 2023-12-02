import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cartSlice';
import toast, { Toaster } from 'react-hot-toast'

const Product = ({ item }) => {

    const dispatch = useDispatch()

    const notify = () => toast.success('Product added successfully')

    const addProductToCart = (prod) =>  {
      dispatch(addProduct(prod))
      notify()
    }

  return (
    <div className='border mb-3 border-cyan-400 transition-all duration-700 hover:border-cyan-700'>
      <Toaster/>
      <div className='flex p-4 flex-col gap-4'>
        <span className='flex gap-4 justify-between'>
            <p>{item.title}</p>
            <p className='font-bold'>{item.price}</p>
        </span>
        <button onClick={() => addProductToCart(item)} className='bg-indigo-600 cursor-pointer rounded text-white px-6 py-1'>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
