import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto ">
          <div className=" bg-gold text-center text-white py-24">
            <h4 className="mb-4">CONTACT US</h4>

            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          <div className=" bg-darkgold text-center py-24 text-white">
            <h4 >Follow US</h4>

            <p className="py-4">Join us on social media</p>
            <div className="flex justify-center gap-4 mx-auto">
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark1">
        <div className=" mx-auto text-center py-4 text-white">
          <p> Copyright © Bistro Boss. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
