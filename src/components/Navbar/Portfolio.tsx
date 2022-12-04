import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SiTransportforlondon } from "react-icons/si";

interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <div className="flex items-center px-2 lg:px-0">
      <div className="hidden lg:ml-6 lg:block">
        <div className="flex space-x-4">
          <div className="mr-10 mt-1 flex">
            <div className="mt-1 flex">
              <SiTransportforlondon className="mt-1 mr-1" />
              Portfolio
            </div>
          </div>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <div className="mr-10 mt-1 flex">
              <AiFillStar className="mt-1 mr-1" />
              Watchlist
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
