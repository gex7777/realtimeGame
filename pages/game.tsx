import React from "react";
import Image from "next/image";
import board from "../public/Untitled design.png";
const game = () => {
  return (
    <div className="h-full w-full">
      <Image fill src={board} alt={""} />
    </div>
  );
};

export default game;
