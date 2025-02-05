'use client';
import React from 'react'
import AddToCart from '../AddToCart';




export const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
        <AddToCart/>
    </div>
  )
}
