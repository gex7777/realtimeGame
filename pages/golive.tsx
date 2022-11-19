import { Card, Carousel, Dropdown } from "flowbite-react";
import { Button, Link, Navbar } from "konsta/react";
import React from "react";
import GameSelectCard from "../components/GameSelectCard";
import Layout from "./../components/Layout";

const Golive = () => {
  return (
    <Layout>
      <Navbar title="Choose game"></Navbar>
      <Carousel className="h-[80%]" slide={false}>
        <div className="flex h-full items-center justify-center bg-md-light-surface-2 dark:bg-md-dark-surface-2 dark:text-white">
          <GameSelectCard rate={1} name="1 dollar table" />
        </div>
        <div className="flex h-full items-center justify-center bg-md-light-surface-2 dark:bg-md-dark-surface-2 dark:text-white">
          <GameSelectCard rate={5} name="5 dollar table" />
        </div>
        <div className="flex h-full items-center justify-center bg-md-light-surface-2 dark:bg-md-dark-surface-2  dark:text-white">
          <GameSelectCard rate={10} name="10 dollar table" />
        </div>
      </Carousel>
    </Layout>
  );
};

export default Golive;
