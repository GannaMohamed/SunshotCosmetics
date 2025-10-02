import React from "react";
import Image from "next/image";
import Button from "./components/Buttons";

export default function Story() {
  return (
    <section className="col-span-12 py-16 flex flex-col md:flex-row items-center place-self-center justify-center gap-10">
      {/* Left: Logo */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <Image
          src="/logo.svg"
          alt="Sunshot logo"
          width={220}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Right: Text */}
      <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
        <p className="text-xl capitalize font-light tracking-wider">
          We Started With A
        </p>
        <h2 className="text-6xl flex items-center gap-4">
          <Image src="/flower.svg" alt="flower" width={30} height={50} />
          Feeling
        </h2>
        <p className="font-extralight text-lg max-w-md">
          That rush you get from the first spark of an idea. Sunshot is simple,
          high-impact beauty built for your every day.
        </p>
        <Button className="w-max" withIcon={true}>
          More About Sunshot
        </Button>
      </div>
    </section>
  );
}
