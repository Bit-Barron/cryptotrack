import React from "react";
import Navbar from "../components/NavbarContainer";

interface DiscordProps {}

const Discord: React.FC<DiscordProps> = ({}) => {
  return (
    <>
      <Navbar />
      <h1 className="mt-40 flex justify-center text-3xl font-bold text-white ">
        Coming Soon ....
      </h1>
    </>
  );
};

export default Discord;
