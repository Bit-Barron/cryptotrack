import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import {useRouter} from "next/router";

export default function Example() {
  const router = useRouter();

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
                  <div>
                    <div className="mt-3 flex justify-center">
                      <button
                        type="button"
                        className="mr-2 mb-2 rounded-lg border border-gray-200 py-2.5 px-5 text-sm font-medium text-white hover:bg-gray-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                      onClick={() => router.push("/login")}
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        className="mr-2 mb-2 rounded-lg border border-gray-200  py-2.5 px-5 text-sm font-medium text-white hover:bg-gray-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                      onClick={() => router.push("/register")}
                      >
                        Register
                      </button>
                    </div>
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
