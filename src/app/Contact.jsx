import React from "react";
import Image from "next/image";

import { ButtonSecondary } from "@/app/components/Buttons";

export default function SupportSection() {
  return (
    <div
      className="col-span-12 flex flex-col lg:flex-row"
      style={{ minHeight: "70vh" }}
    >
      <div
        className="lined flex-1 flex flex-col gap-6 sm:p-8 
        text-4xl font-light capitalize tracking-wide
        justify-center items-center
        bg-[var(--navy)] text-[var(--offwhite)]"
      >
        {/* Left side */}
        <Image
          className="buttonIcon"
          src="flower.svg"
          alt="arrow"
          width={30}
          height={24}
        />
        <p>Got a question?</p>
        <p>Need a shade match?</p>
        <p>Or just say hello?</p>
      </div>
      {/* Right side */}
      <div
        className="lined flex-1 p-8 
        flex flex-col items-center justify-center gap-8
        bg-[var(--babyblue)] text-[var(--navy)]"
      >
        <h4 className="text-2xl tracking-wide">
          We're here to help you shine.
        </h4>
        <ButtonSecondary className="w-100" withIcon>
          Send Us A Message
        </ButtonSecondary>
      </div>
    </div>
  );
}
