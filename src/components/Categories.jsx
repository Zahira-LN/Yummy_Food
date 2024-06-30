import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
  return (
    <div className='max-w-[1580px] m-auto px-4 py-4'>
         <h3 className="text-orange-500 font-bold text-2xl text-center py-10">
             Our Categories
      </h3>
        <div className='flex flex-wrap justify-center items-center gap-10 duration-300'>
        {categories.map((category)=>(
            <div key={category.id} className='flex justify-center items-centerbg-white shadow-2xl rounded-full w-[150px] h-[40px] hover:scale-105'>
                  <img src={category.image} className=' rounded-full bg-cover'/>
                </div>
        ))

        }
</div>
    </div>
  )
}

export default Categories