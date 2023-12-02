import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeFromCart, deleteProduct  } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';




const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)

    let totalCost = 0;
    cartItems.forEach(item => {
        // const productData = getProductData(item.id);
        totalCost += (item.price * item.quantity);
            });


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const checkout = async () => {
        try {
            const request = await fetch('http://localhost:8000/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({items: cartItems})
            })

            const response = await request.json()
            console.log(response)
            if(response.url) {
                window.location.assign(response.url) // forward user to stripe
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className=''>
      <div className='mt-12 max-w-md mx-auto md:max-w-lg lg:max-w-xl'>
        <h1 className='text-center text-indigo-800 text-2xl mb-6'>The cart</h1>
        <div className='flex flex-col gap-3'>
            {cartItems.length>0? cartItems.map(item => (
                <div key={item.id} className='border flex justify-between border-indigo-700 p-3'>
                    <span className='flex gap-5 justify-between'>
                        <span className='flex gap-6'>
                            <p>{item.title}</p>
                            <p className='font-bold'>{item.price}</p>
                        </span>
                    <span className='ml-12 flex gap-3'>
                        <p onClick={() => dispatch(removeFromCart(item))} className='cursor-pointer'>-</p>
                        <p>{item.quantity}</p>
                        <p onClick={() => dispatch(addProduct(item))} className='cursor-pointer'>+</p>
                    </span>
                    </span>
                    <span onClick={() => dispatch(deleteProduct(item))} className='text-lg text-red-800 cursor-pointer'>
                    <ion-icon name="trash"></ion-icon>
                    </span>
                </div>
            )): <p onClick={() => navigate('/')} className='text-center cursor-pointer text-blue-700'>Add some items</p>}
            <hr className='mt-6 text-cyan-900'></hr>
            <div className='mt-4 flex justify-between items-center'>
                <h3>Total: ${Math.ceil(totalCost)}</h3>
                <button onClick={checkout} className='bg-indigo-600 py-2 px-6 text-white rounded'>Checkout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
