import React, { useState } from "react";
import { mealData } from "../data/data";
import { FaLongArrowAltRight } from "react-icons/fa";

const Meals = () => {
  const [foods, setFoods] = useState(mealData);
  const filterCategory = (Category) => {
  const filteData= mealData.filter((meals) => {
      return meals.category === Category;
    })
    setFoods(filteData)
  };
  
 
  
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-center font-bold text-orange-500 text-2xl py-2">
        Our Meal
      </h1>
      <div className="flex justify-center gap-2 m-4">
        <button
          onClick={() => setFoods(mealData)}
          className="bg-orange-700 border-2 border-orange-700 rounded-full hover:bg-white text-white hover:text-orange-700"
        >
          All
        </button>
        <button
          onClick={() => filterCategory("pizza")}
          className="bg-orange-700 border-2 border-orange-700 rounded-full hover:bg-white text-white hover:text-orange-700"
        >
          Pizza
        </button>
        <button
          onClick={() => filterCategory("chicken")}
          className="bg-orange-700 border-2 border-orange-700 rounded-full hover:bg-white text-white hover:text-orange-700"
        >
          Chicken
        </button>
        <button
          onClick={() => filterCategory("salad")}
          className="bg-orange-700 border-2 border-orange-700 rounded-full hover:bg-white text-white hover:text-orange-700"
        >
          Salad
        </button>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cls-2 lg:grid-cols-4  gap-6">
        {foods.map((meal) => (
          <div
            key={meal.id}
            className="border-none hover:scale-105 duratin-300 relative"
          >
            <img
              src={meal.image}
              className="w-[100%] h-[200px] object-cover rounded-lg"
            />
            <div className="bg-white rounded-full p-1">
              <span className="h-18 w-18  rounded-full text-white bg-orange-700 px-2 py-3 absolute top-[72%] right-6">
                {meal.price}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">{meal.name}</span>

              <button className="border-none flex  items-center gap-2 justify-start w-[200px] pl-0">
                View More <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
