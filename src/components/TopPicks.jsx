import React from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
  return (
    <div className='max-w-[1520px]'>
        <h1 className='text-center font-bold text-orange-500 text-2xl py-2'>Top Picks</h1>

        <div className='lg:flex gap-1   '>
        <Splide
       options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          gap: '1rem',
          breakpoints: {
            640: {
              perPage: 1,
              gap: '0.5rem',
            },
            1024: {
              perPage: 2,
              gap: '0.75rem',
            },
          },
        }}>
        {
            topPicks.map((data)=>(
                <SplideSlide key={data.id}>
              <div  className='w-full h-full relative rounded-3xl'>
                <div className='absolute w-full h-full  bg-black/50 rounded-3xl'>
                                <span className=''>{data.title}</span>
                                </div>
                <img src={data.img} className=' w-full h-[200px] object-cover rounded-3xl hover:scale-105 ease-out duration-300'/>


                 </div>
                 </SplideSlide>
            ))
        }
        </Splide>
</div>

    </div>
  )
}

export default TopPicks