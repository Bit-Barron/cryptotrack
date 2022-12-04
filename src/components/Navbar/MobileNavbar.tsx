import { Disclosure } from "@headlessui/react";
import React from "react";

interface mobileNavbarProps {}

const MobileNavbar: React.FC<mobileNavbarProps> = ({}) => {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <Disclosure.Button
          as="a"
          href="#"
          className=" block rounded-md px-3 py-2 text-base font-medium text-white"
        >
          Cryptocurrencies
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Exchanges
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Community
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Products
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Lern
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Watchlist
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Portfoli
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
};

export default MobileNavbar;