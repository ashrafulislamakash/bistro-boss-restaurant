import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(item);

  return (
    <div className="flex gap-4 mb-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-28 h-28"
        src={image}
        alt=""
      />
      <div className="gap-4">
        <h3 className="text-dark1  text-2xl">{name}</h3>
        <p className=" text-dark3">{recipe}</p>
      </div>

      <p className="text-gold"> ${price}</p>
    </div>
  );
};

export default MenuItem;
