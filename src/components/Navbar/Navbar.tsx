import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import SearchIcon from "@heroicons/react/solid/SearchIcon";
import axios from "axios";
import { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Example() {
  const [search, setSearch] = useState("");

  const handleSearch = async (e: any) => {
    const res = await axios.get("/api/search", {
      params: {
        search,
      },
    });
    setSearch(res.data);

    console.log(e.target.value);
  };

  return (
    <Disclosure as="nav" className="bg-[#181a1b]">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex h-16 items-center justify-between">
              <DesktopNavbar />
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative flex">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      onChange={(e) => handleSearch(e)}
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              <div className="flex lg:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <MobileNavbar />
        </>
      )}
    </Disclosure>
  );
}
