import axios from "axios";
import React, { useState } from "react";

interface testProps {}

const test: React.FC<testProps> = ({}) => {
  const [click, setClick] = useState("");

  const price = async () => {
    const response = await axios.get("/api/price", {
      params: {
        click,
      },
    });
    console.log(response.data);
  };

  return (
    <div onClick={() => price()}>
      <div onClick={() => setClick("BTC")}>BTC</div>
      <div onClick={() => setClick("EUR")}>EURO</div>
      <div onClick={() => setClick("ETH")}>ETH</div>
    </div>
  );
};

export default test;