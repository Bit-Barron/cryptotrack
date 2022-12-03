/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SiTransportforlondon } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-[#181a1b]'>
      {({ open }) => (
        <>
          <div className=''>
            <div className='relative flex items-center justify-between h-16 '>
              <div className='flex items-center px-2 lg:px-0'>
                <div className='flex-shrink-0'>
                  <h1 className='text-2xl font-bold ml-3'>CRYPTOTRACK</h1>
                </div>
                <div className='hidden lg:block lg:ml-6'>
                  <div className='flex space-x-4'>
                    <a
                      href='#'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Cryptocurrencies
                    </a>
                    <a
                      href='#'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Exchanges
                    </a>
                    <a
                      href='#'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Community
                    </a>
                    <a
                      href='#'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Products
                    </a>
                    <a
                      href='#'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Learn
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end'>
                <div className='flex'>
                  <div className='mr-10 flex mt-1'>
                    <div className='mr-10 flex mt-1'>
                      <AiFillStar className='mt-1 mr-1' />
                      Watchlist
                    </div>
                    <div className='flex mt-1'>
                      <SiTransportforlondon className='mt-1 mr-1' />
                      Portfolio
                    </div>
                  </div>
                </div>
                <div className='max-w-lg w-full lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative flex'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <SearchIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:block lg:ml-4'>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as='div' className='ml-4 relative flex-shrink-0'>
                    <div></div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='#'
                className=' text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Cryptocurrencies
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Exchanges
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Community
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Products
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Lern
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
