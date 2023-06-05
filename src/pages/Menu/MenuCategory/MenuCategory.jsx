import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className=" gap-12 grid grid-cols-1 lg:grid-cols-2 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex justify-center items-center">
          <button className="py-5 font-bold text-lg px-16 border-b-4 rounded-xl hover:bg-dark1 hover:text-white  ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
