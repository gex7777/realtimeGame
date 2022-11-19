import { Card, Dropdown } from "flowbite-react";
import React, { FC } from "react";
interface Iprops {
  rate: number;
  name: string;
}
const GameSelectCard: FC<Iprops> = ({ rate, name }) => {
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col h-5/6 w-5/6">
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex flex-col  items-center ">
          <h5 className="pt-[40%] text-6xl font-medium text-gray-900 dark:text-white">
            ${rate}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {name}
          </span>
          <a
            href="#"
            className="mt-[20%] inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-6xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Play
          </a>
        </div>
        <div className=" flex justify-between ">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameSelectCard;
