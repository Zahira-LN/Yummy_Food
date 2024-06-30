import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handleSlideLeft = () => {
    currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(0);
  };
  const handleSlideRight = () => {
    currentIndex < sliders.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(sliders.length - 1);
  };

  const MoveIndex = (SlideIndex) =>{
    setCurrentIndex(SlideIndex)
  }

  return (
    <div className="max-w-[1520px]  w-full h-[500px] py-4 px-4 relative">
      <div
        className="w-full h-full rounded bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >   </div>
        <div>
          <div className="absolute top-[50%] bg-orange-500 rounded-full p-2 -translate-x-0 left-5 cursor-pointer" onClick={handleSlideLeft}>
            <BsChevronCompactLeft  />
          </div>
          <div className="absolute top-[50%] bg-orange-500 rounded-full p-2 -translate-x-0 translate-y-[-50%]  right-5 cursor-pointer"  onClick={handleSlideRight}>
            <BsChevronCompactRight />
          </div>
          <div className="flex justify-center ">
          {sliders.map((slide, index) => (
            <RxDotFilled key={index} size={25} onClick={()=>MoveIndex(index)}/>
          ))}
          </div>
        </div>
   
    </div>
  );
};

export default Featured;
