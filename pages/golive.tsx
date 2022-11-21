import { Card, Carousel, Dropdown } from "flowbite-react";
import { Button, Link, Navbar } from "konsta/react";
import React from "react";
import GameSelectCard from "../components/GameSelectCard";
import Layout from "./../components/Layout";

const Golive = () => {
  return (
    <Layout>
      <Navbar className="" title="Choose game"></Navbar>

      <div className="mx-4  gap-4  grid grid-cols-2 place-content-center">
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={5} name="hi" />
      </div>
    </Layout>
  );
};

export default Golive;
