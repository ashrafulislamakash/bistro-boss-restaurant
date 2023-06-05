import React from "react";

const TextComponent = ({ title, subTitle }) => {
  return (
    <div className="w-fit mx-auto mt-24 mb-12 text-center text-dark1 ">
      <p className="text-gold mb-3 ">{subTitle} </p>
      <h2 className="py-4 border-y-4 border-dark6 text-dark1 uppercase text-4xl	">
        {title}
      </h2>
    </div>
  );
};

export default TextComponent;
