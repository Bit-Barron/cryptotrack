import BellIcon from "@heroicons/react/outline/BellIcon";
import React from "react";

interface BellProps {}

const Bell: React.FC<BellProps> = ({}) => {
  return (
    <div className="hidden lg:ml-4 lg:block">
      <div className="flex items-center">
        <button
          type="button"
          className="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Bell;