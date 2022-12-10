import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

interface ProfileProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Profile: React.FC<ProfileProps> = ({}) => {
  const router = useRouter();

  return (
    <>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 ml-40 w-56 origin-top-right rounded-md bg-[#121418] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            {({ active }) => (
              <a
                href='../../Profile/MySettings'
                className={classNames(
                  active ? 'text-main hover:text-white' : '',
                  'block px-4 py-2 text-sm text-main'
                )}
              >
                View Charts
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#'
                className={classNames(
                  active ? 'hover:text-white' : '',
                  'block px-4 py-2 text-sm text-main'
                )}
              >
                View Markets
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#'
                className={classNames(
                  active ? 'hover:text-white' : '',
                  'block px-4 py-2 text-sm text-main'
                )}
              >
                View Historical Data
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'hover:text-white' : '',
                  'block px-4 py-2 text-sm text-main'
                )}
                onClick={(e: any) => {
                }}
              >
                View Details
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </>
  );
};

export default Profile;
