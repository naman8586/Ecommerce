import React from 'react'
import ManCategory from '../assets/images/man.png'
import WomanCategory from '../assets/images/Woman.png'
import KidCategory from '../assets/images/kid.png'

const Categoriess = [
    {
        title: 'Men',
        imageUrl: ManCategory,
    },
    {
        title: 'Women',
        imageUrl: WomanCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidCategory,
    },
];

const Categories = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {Categoriess.map((category,index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} className='w-full h-full object-cover rounded-lg shadow-md' alt="" />
            <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
