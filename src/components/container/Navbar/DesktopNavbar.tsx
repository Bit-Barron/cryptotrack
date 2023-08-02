import Link from "next/link";
import React from "react";

interface DesktopNavbarProps {}
const DesktopNavbar: React.FC<DesktopNavbarProps> = ({}) => {
  return (
    <div className="flex items-center px-2 lg:px-0">
      <div className="flex-shrink-0">
        <h1 className="ml-5 text-2xl font-bold ">CryptoTrack</h1>
      </div>
      <hr className="text-white" />

      <div className="hidden lg:ml-6 lg:block">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="rounded-md px-3  py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-[#87b55d]"
          >
            Dashboard
          </Link>

          <Link
            href="https://discord.gg/coding"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-[#87b55d]"
          >
            Discord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
