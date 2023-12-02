import React from 'react';
import { productsArray } from '../data/products';
import Product from './product';

const Products = () => {
  return (
    <div className='mb-4'>
      <h2 className='mb-3 text-slate-600'>Add products to cart</h2>
      <div className='grid md:grid-cols-3 grid-cols-2  gap-2'>
      {productsArray?.map(product =>(
        <Product key={product.id} item={product}/>
      ))}
      </div>
    </div>
  )
}

export default Products
