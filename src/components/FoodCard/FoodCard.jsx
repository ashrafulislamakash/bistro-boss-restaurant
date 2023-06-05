import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className=" text-center relative border border-dark6 rounded-2xl">
        <img src={image} alt="" className="    w-full " />

        <div className="absolute top-4  right-4 bg-gold p-2 rounded text-white ">
          {" "}
          <p>{price}</p>
        </div>

        <div className="p-4 ">
          <h3 className="text-lg text-dark1 font-semibold">{name}</h3>

          <p className="my-4">{recipe}</p>

          <button className="py-2  px-8  rounded-xl text-white bg-dark1   ">
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
