import Link from "next/link";
import React, { Fragment, forwardRef } from "react";
import tw, { css } from "twin.macro";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Image from "next/image";
import logo from "../../assets/dynamint.png";

import ConnectedButton from "./ConnectedButton";

export default function Header({}) {
  return (
    <header tw="sticky w-full top-0 z-10 container mx-auto my-4 flex items-center transition duration-300 ease-in-out backdrop-filter backdrop-blur-sm md:backdrop-blur-sm">
      <Popover
        tw="relative w-full lg:static lg:overflow-y-visible"
        /** 
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }*/
      >
        {({ open }) => (
          <>
            <nav tw="relative mx-auto flex items-center justify-between pt-2 px-6 xl:px-8">
              <div tw="flex items-center flex-1">
                <div tw="flex items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <a tw="flex items-center mr-8">
                      <Image
                        src={logo}
                        alt="Dynamint"
                        width={40}
                        height={40}
                      />
                      <span tw="ml-4 uppercase text-lg font-black select-none">
                        Dynamint
                      </span>
                    </a>
                  </Link>
                </div>
                <ul tw="hidden space-x-4 lg:flex lg:ml-10 flex-grow">
                  <li>
                    
                  </li>
                </ul>
                <div tw="-mr-2 flex items-center ">
                  <ConnectedButton />
                </div>
                <div tw="-mr-2 flex items-center lg:hidden">
                  <Popover.Button tw="rounded-md p-2 inline-flex items-center mr-4 justify-center text-gray-400 focus:outline-none">
                    <span tw="sr-only">Open main menu</span>
                    <MenuIcon tw="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </nav>
            {/** 
            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                tw="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
              >
                <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div tw="px-5 pt-4 flex items-center justify-between">
                    <div tw="-mr-2">
                      <Popover.Button tw="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2">
                        <span tw="sr-only">Close menu</span>
                        <XIcon tw="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div tw="pt-5 pb-6">
                    <div tw="flex items-center mr-8">
                      
                    </div>
                    <ul tw="px-2 space-y-1">
                      <li>
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>*/}
          </>
        )}
      </Popover>
    </header>
  );
}
