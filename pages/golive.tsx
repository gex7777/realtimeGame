import { Card, Carousel, Dropdown } from "flowbite-react";
import { Button, Link, Navbar } from "konsta/react";
import React from "react";
import GameSelectCard from "../components/GameSelectCard";
import Layout from "./../components/Layout";

const Golive = () => {
  return (
    <Layout>
      <Navbar title="Choose game"></Navbar>
      <div className="flex justify-center">
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
      </div>
      <div className="flex justify-center">
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
      </div>
      <div className="flex justify-center">
        <GameSelectCard rate={5} name="hi" />
      </div>
    </Layout>
  );
};

export default Golive;
