import React from "react";

const Delivery = () => {
  return (
    <div className="max-w-[1520px] w-full  bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1520px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] h-[400px] my-4 rounded"
          src="https://images.pexels.com/photos/2878710/pexels-photo-2878710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1>Limitless Convience on-demand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
            delectus nisi quidem amet rem ipsum corrupti sunt natus fuga. Optio
            quasi vel, laudantium perspiciatis illum ipsum reiciendis aut saepe
            at incidunt exercitationem voluptatum perferendis reprehenderit
            mollitia doloribus ipsa dignissimos. Pariatur quo facilis, et
            officiis amet incidunt esse repellendus qui deserunt odio, nisi,
            impedit voluptates doloremque. Consectetur explicabo maxime et
            doloremque harum perferendis eaque porro earum totam veniam
            repudiandae labore officiis, adipisci ab nisi laborum ut inventore
            animi odit nesciunt mollitia quod repellendus! Repellat iusto,
            officia amet sint totam voluptatibus tempora alias assumenda quis
            odit optio earum harum eligendi dignissimos.
          </p>
          <button className="bg-[#00df9a] text-black my-5 rounded w-[120px] border-none py-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
