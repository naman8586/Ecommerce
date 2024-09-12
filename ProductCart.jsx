import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCart = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className=' bg-white  transform transition-transform duration-300 hover:scale-105 
    p-4 shadow relative rounded border' >
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-48 object-contain mb-4'
      />
      <h3 className='text-lg font-semibold' >{product.name}</h3>
      <p className='text-gray-500'>${product.price.toFixed(2)}</p>
      <div  className='flex items-center mt-2'>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
        
      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all' >
        <span className=' group-hover:hidden'>+</span>
        <span className='hidden group-hover:block' >Add to Cart</span>
      </div>
    </div>
  );
};

export default ProductCart;
