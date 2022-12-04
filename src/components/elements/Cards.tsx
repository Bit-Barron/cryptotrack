import React from "react";

interface CardsProps {}

export const Cards: React.FC<CardsProps> = ({}) => {
  return (
    <>
      <div className="flex gap-8 mt-4 mb-20">
        <div className="group flex w-96 items-center justify-between rounded-md border-b-4 border-blue-600 p-3 font-medium text-white shadow-lg dark:border-gray-600 bg-[#25262d]">
          <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">1,257</p>
            <p>Trending</p>
          </div>
        </div>
        <div className="group bg-[#25262d] flex w-96 items-center justify-between rounded-md border-b-4 border-blue-600  p-3 font-medium text-white shadow-lg dark:border-gray-600 ">
          <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">557</p>
            <p>Recently Added</p>
          </div>
        </div>
        <div className="group flex w-96 items-center justify-between rounded-md border-b-4 border-blue-600 bg-[#25262d] p-3 font-medium text-white shadow-lg dark:border-gray-600 ">
          <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">$11,257</p>
            <p>Top Community Accounts</p>
          </div>
        </div>
        <div className="group flex w-96 items-center justify-between rounded-md border-b-4 border-blue-600 bg-[#25262d] p-3 font-medium text-white shadow-lg dark:border-gray-600 ">
          <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">$75,257</p>
            <p>Balances</p>
          </div>
        </div>
      </div>
    </>
  );
};
