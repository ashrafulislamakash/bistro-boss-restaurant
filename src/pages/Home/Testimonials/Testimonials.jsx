import React, { useRef, useState } from "react";
import TextComponent from "../../../components/TextComponent";
import { Rating } from "@smastrom/react-rating";

import "../Common.css";
import "@smastrom/react-rating/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <section className=" my-24 container mx-auto marker:">
      <TextComponent
        title={"TESTIMONIALS"}
        subTitle={"---What Our Clients Say---"}
      ></TextComponent>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />{" "}
                <p className="my-4">{review.details}</p>
                <p className="text-4xl text-gold">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
