import { Card, Dropdown } from "flowbite-react";
import React, { FC } from "react";
interface Iprops {
  rate: number;
  name: string;
}
const GameSelectCard: FC<Iprops> = ({ rate, name }) => {
  return (
    <div className="card w-44 sm:w-auto  bg-base-100 shadow-xl">
      <figure className=" ">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">${rate}</h2>

        <div className="card-actions">
          <button className="btn btn-primary">Play</button>
        </div>
      </div>
    </div>
  );
};

export default GameSelectCard;
