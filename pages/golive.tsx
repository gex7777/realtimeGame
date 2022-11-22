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
        <GameSelectCard rate={1} name="hi" />
        <GameSelectCard rate={5} name="hi" />
        <GameSelectCard rate={10} name="hi" />
        <GameSelectCard rate={20} name="hi" />
        <GameSelectCard rate={100} name="hi" />
        <GameSelectCard rate={1000} name="hi" />
      </div>
    </Layout>
  );
};

export default Golive;
