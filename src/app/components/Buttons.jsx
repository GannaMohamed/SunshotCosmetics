import React from "react";
import Image from "next/image";

export default function Button({ children, className, withIcon = false }) {
  return (
    <button className={`{primary ${className}}`} style={{ width: "100%" }}>
      <a
        className="whitespace-nowrap text-lg border-2 border-[var(--red)] text-[var(--red)] border-solid transition-colors flex items-center justify-center gap-2
        hover:bg-[var(--yellow)] hover:border-[var(--navy)] hover:text-[var(--navy)] 
        font-regular capitalize h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="#"
        style={{ width: "100%" }}
        rel="noopener noreferrer"
      >
        {children}
        {withIcon && (
          <Image
            className="buttonIcon"
            src="button icon.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        )}
      </a>
    </button>
  );
}

export function ButtonSecondary({ children, className, withIcon = false }) {
  return (
    <button className={`{secondary ${className}`}>
      <a
        className="text-lg  text-[var(--navy)] font-regular capitalize 
        border-2 border-[var(--navy)] bg-[var(--offwhite)] 
        transition-colors duration-300 ease-in-out 
        flex items-center justify-center gap-2 
        hover:border-[var(--navy)] hover:text-[var(--navy)] hover:bg-[var(--yellow)]
        h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="#"
        rel="noopener noreferrer"
      >
        {children}
        {withIcon && (
          <Image
            className="buttonIcon"
            style={{ filter: "var(--bluefilter)" }}
            src="button icon.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        )}
      </a>
    </button>
  );
}
