import React from "react";
import Cover from "../Shared/cover/cover";
import TextComponent from "../../components/TextComponent";
import { FaPhoneVolume } from "react-icons/fa";
const ContactUS = () => {
  return (
    <div>
      <Cover></Cover>

      <TextComponent
        title={"OUR LOCATION"}
        subTitle={"---Visit Us---"}
      ></TextComponent>

      <div className="container grid grid-cols-3">
        <div className="bg-gold">
          <FaPhoneVolume></FaPhoneVolume>
        </div>

        <h2>PHONE</h2>
        <p>+38 (012) 34 56 789</p>
      </div>
    </div>
  );
};

export default ContactUS;
