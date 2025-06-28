// this is a responsive nav bar for desktop (sm:flex) and mobile (sm:hidden)
// useState is used to control the mobile menu modal

// making this a client component so that it can use useState
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Button from "./button";

export default function Nav() {
  // this is to control then open and close state of mobile nav
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* mobile nav, after being tapped - showing the options */}
      <nav className="fixed block top-6 right-6 pointer-events-auto sm:hidden z-20">
        <button className="group flex w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-800/5 ring-1 ring-zinc-900/5 backdrop-blur gap-1.5" onClick={() => setModalOpen(true)}>Menu<ChevronDownIcon width={20} height={20}></ChevronDownIcon></button>
        <Dialog as="div" onClose={() => setModalOpen(false)} open={modalOpen}>
          <div className="fixed inset-0 z-50 bg-zinc-800/50 backdrop-blur opacity-100 text-sm font-medium" aria-hidden="true"/>
          <Dialog.Panel className="flex flex-row fixed inset-x-4 top-6 right-6 left-6 z-50 origin-top rounded-3xl bg-white p-4 ring-1 ring-zinc-900/5 opacity-100 scale-100 shadow-lg shadow-slate-800/5 backdrop-blur">
            <ul className="flex w-full flex-col text-sm pt-2 text-slate-700 font-medium">
              <li>
                <a className="relative block px-3 py-2 transition hover:text-blue-500" href="/">Home</a>
              </li>
              <li>
                <a className="relative block px-3 py-2 transition hover:text-blue-500" href="/about">About</a>
              </li>
              <li>
                <a className="relative block px-3 py-2 transition hover:text-blue-700" href="#">Resume</a>
              </li>
            </ul>
            <div className="flex justify-end h-fit">
              <a className="p-2">
                <button onClick={() => setModalOpen(false)}>
                  <XMarkIcon width={20} height={20} className="text-slate-600 hover:text-blue-500"></XMarkIcon>
                </button>
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    
      {/* desktop nav */}
      {/* hidden in mobile */}
      <nav className="w-full bg-[#FBFBFB] backdrop-blur-lg border-b border-[#e3e3e3] fixed z-20 h-16 hidden sm:flex justify-between items-center left-1/2 -translate-x-1/2 top-0">
        <div className="px-15 flex items-center w-full max-w mx-auto justify-between">
          <div>
            <Button link="/" variant="copy-email" text="tranndhungg@gmail.com"></Button>
          </div>
          <div className="flex items-center">
            <div className="mr-9">
              <Button link="/" variant="grey-hyperlink" text="Home"></Button>
            </div>
            <div className="mr-6">
              <Button link="/" variant="grey-hyperlink" text="About"></Button>
            </div>
            <div className="pl-1.5">
              <Button link="#" variant="blue-button" text="Resume"></Button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}