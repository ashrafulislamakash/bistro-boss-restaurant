import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import TextComponent from "../../../components/TextComponent";

const Category = () => {
  return (
    <div className="container mx-auto">
      <TextComponent
        title={"ORDER ONLINE"}
        subTitle={"---From 11:00am to 10:00pm---"}
      ></TextComponent>{" "}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mx-auto "
      >
        <SwiperSlide>
          <img className="w-full	" src={slider1} />

          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-md">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full	" src={slider2} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-md">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full	" src={slider3} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-md">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full	" src={slider4} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-md">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-full	" src={slider5} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-md">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
