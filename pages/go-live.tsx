import React from "react";
import GameSelectCard from "../components/GameSelectCard";

import oneDollar from "../public/1-12-12-2022.png";
import fiveDollar from "../public/5-12-12-2022.png";
import tenDollar from "../public/10-12-12-2022.png";
import twentyDollar from "../public/20-12-12-2022.png";
import hundredDollar from "../public/100-12-12-2022.png";
import thousandDollar from "../public/1000-12-12-2022.png";
const Golive = () => {
  return (
    <div className="w-full  gap-2  grid grid-cols-2 place-items-center place-content-stretch">
      <GameSelectCard rate={1} src={oneDollar} name="sample" userCount={890} />
      <GameSelectCard rate={5} src={fiveDollar} name="sample" userCount={786} />
      <GameSelectCard rate={10} src={tenDollar} name="sample" userCount={343} />
      <GameSelectCard
        rate={20}
        src={twentyDollar}
        name="sample"
        userCount={4435}
      />
      <GameSelectCard
        rate={100}
        src={hundredDollar}
        name="hi"
        userCount={574}
      />
      <GameSelectCard
        rate={1000}
        src={thousandDollar}
        name="hi"
        userCount={3453}
      />
    </div>
  );
};

export default Golive;
