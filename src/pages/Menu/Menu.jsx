import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/cover/cover";
import MenuItem from "../../pages/Shared/MenuItem/MenuItem";

import useMenu from "../../hooks/useMenu";
import TextComponent from "../../components/TextComponent";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Menu- bist bos</title>
        <meta
          name="description"
          content="Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

"
        />
      </Helmet>
      {/* offered */}
      <div>
        <Cover></Cover>

        <div className="container mx-auto my-24">
          <TextComponent
            subTitle={"---Don't miss---"}
            title={"TODAY'S OFFER"}
          ></TextComponent>

          <MenuCategory items={offered} title={"offered"}>
            {" "}
          </MenuCategory>
        </div>
      </div>

      {/* DESSERTS */}
      <div>
        <Cover></Cover>

        <div className="container mx-auto my-24">
          <MenuCategory items={desserts} title="desserts"></MenuCategory>
        </div>
      </div>

      {/* PIZZA */}
      <div>
        <Cover></Cover>

        <div className="container mx-auto my-24">
          <MenuCategory items={pizza} title={"pizza"}>
            {" "}
          </MenuCategory>
        </div>
      </div>

      {/* SALADS */}
      <div>
        <Cover></Cover>

        <div className="container mx-auto my-24">
          <MenuCategory items={salad} title={"salad"}></MenuCategory>
        </div>
      </div>
      {/* soup */}
      <div>
        <Cover></Cover>

        <div className="container mx-auto my-24">
          <MenuCategory items={soup} title={"soup"}>
            {" "}
          </MenuCategory>
        </div>
      </div>
    </div>
  );
};

export default Menu;
