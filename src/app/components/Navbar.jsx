import React from "react";
import Image from "next/image";

export default function Navbar({ className = "" }) {
  return (
    <header className={`lined text-xl ${className}`}>
      <div className="grid grid-cols-12 h-full ">
        <div
          className="lined col-span-3 md:col-span-2 
        p-2
        flex justify-center items-center"
        >
          <Image
            className="Logo"
            src="/logo.svg"
            alt="Sunshot logo"
            width={130}
            height={38}
            priority
          />
        </div>
        <div className="hidden md:flex col-span-8 justify-between items-center">
          <NavItem className="active">Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
        </div>
        <div className="flex md:hidden place-self-center">☰</div>
        <div className="linedLeft col-span-3 md:col-span-2 col-end-13 flex gap-2 justify-center items-center text-[var(--navy)]">
          EN
          <Image
            className="buttonIcon"
            src="dropdown icon.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
}

export function NavItem({ children, href = "#", className = "" }) {
  return (
    <a
      className={`${className} text-[var(--red)] border-solid transition-colors flex items-center justify-center gap-2 hover:text-[var(--babyblue)] font-regular capitalize h-10 sm:h-12 px-4 sm:px-5 sm:w-auto`}
      href="#"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
