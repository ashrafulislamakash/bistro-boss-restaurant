import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/cover/cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");

  console.log(salad);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Order- bist bos</title>
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
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>

            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
