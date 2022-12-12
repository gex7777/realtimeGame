import { Card, Dropdown } from "flowbite-react";
import Image, { StaticImageData } from "next/image";
import { ImUsers } from "react-icons/im";
import React, { FC } from "react";
interface Iprops {
  rate: number;
  name: string;
  src: StaticImageData;
  userCount: number;
}
const GameSelectCard: FC<Iprops> = ({ rate, name, src, userCount }) => {
  return (
    <div className="card w-44 sm:w-auto  bg-base-100 shadow-xl">
      <figure className="mt-8 pt-2">
        <Image alt={name} height={100} width={100} src={src}></Image>
      </figure>
      <div className="card-body items-center text-center">
        <div className="card-actions">
          <button className="btn btn-primary">Play</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Live users</div>
        <div className="stat-value flex">{userCount}</div>
      </div>

      <div className="btn btn-md rounded-b-lg btn-secondary ">
        Invite Friends
      </div>
    </div>
  );
};

export default GameSelectCard;
