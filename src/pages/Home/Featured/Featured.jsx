import React from "react";
import TextComponent from "../../../components/TextComponent";

import featuredImg from "../../../assets/home/featured.jpg";

import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item py-24 text-white bg-fixed ">
      <div className="text-white">
        <TextComponent
          subTitle={"---Check it out---"}
          title={"FROM OUR MENU"}
        ></TextComponent>
      </div>

      <div className="md:flex gap-8 container mx-auto justify-center items-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div>
          <p>March 20, 2023</p>
          <p className="py-4">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>

          <button className="  text-white bg-transparent px-6 py-2 border-b-4 border-white rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
