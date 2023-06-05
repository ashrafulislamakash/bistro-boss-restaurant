import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import CTA from "./CTA/CTA";
import BistroBoss from "./BistroBoss/BistroBoss";
import Testimonials from "./Testimonials/Testimonials";
import Test from "../../components/Test";

const Home = () => {
  return (
    <>
      <Test></Test>
      <Banner></Banner>
      <Category></Category>

      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>

      <CTA></CTA>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
