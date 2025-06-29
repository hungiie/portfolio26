// this is a responsive nav bar for desktop (md:flex) and mobile (md:hidden)
// useState is used to control the mobile menu modal
"use client"

import Button from "./button";
import Link from "next/link";

export default function Nav() {
  // this is to control then open and close state of mobile nav

  return (
    <div>
      <nav className="
      w-full 
      bg-[rgba(248,248,248,0.8)] 
      backdrop-blur-lg 
      border-1 
      border-[rgba(204,204,204,0.4)] 
      fixed 
      z-20 
      h-16  
      flex 
      justify-between 
      items-center 
      left-1/2 
      -translate-x-1/2 
      top-0
      ">
        <div className="
        px-10
        md:px-22 
        flex 
        items-center 
        w-full 
        justify-between
        ">
          <div className="hidden md:block">
            <Button link="/" target="_self" variant="copy-email" text="tranndhungg@gmail.com" textSize="text-sm"></Button>
          </div>
          <div className="w-full flex items-center justify-between md:w-auto md:justify-normal">
            <div className="flex">
              <div className="mr-9">
                <Button link="/" target="_self" variant="grey-hyperlink" text="Home" textSize="text-sm"></Button>
              </div>
              <div className="mr-6">
                <Button link="/about" target="_self" variant="grey-hyperlink" text="About" textSize="text-sm"></Button>
              </div>
            </div>
            <div className="pl-1.5">
              <Button link="#" target="_blank" variant="blue-button" text="Resume" textSize="text-sm"></Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}