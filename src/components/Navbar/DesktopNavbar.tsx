import React from "react";

interface DesktopNavbarProps {}
const DesktopNavbar: React.FC<DesktopNavbarProps> = ({}) => {
  return (
    <div className="flex items-center px-2 lg:px-0">
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold ml-5">CryptoTrack</h1>
      </div>
      <div className="hidden lg:ml-6 lg:block">
        <div className="flex space-x-4">
          <a
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Dashboard
          </a>

          <a
            href="/discord"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
