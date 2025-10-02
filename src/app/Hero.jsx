import React from "react";
import Image from "next/image";
import Button from "@/app/components/Buttons";
import Navbar from "@/app/components/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar className="lined col-span-12" />

      <section className="lined col-span-12 min-h-[85vh]">
        <div
          className="grid grid-cols-12 md:grid-rows-[60px_1fr_60px] 
        min-h-[85vh]"
        >
          {/* Left image (desktop only) */}
          <div className="hidden md:block col-span-2 row-span-2">
            <Image
              className="lined"
              src="/girl hero.png"
              alt="Descriptive alt text"
              width={600}
              height={300}
            />
          </div>

          {/* Top navy bar (desktop only) */}
          <div className="hidden md:block bg-[var(--navy)] col-span-2 col-start-11"></div>

          {/* Main content */}
          <div
            className="lined
            px-8 md:px-0
        col-span-12 md:col-span-8 
        flex flex-col justify-center items-center text-center gap-6
        py-8
      "
          >
            <h1 className="text-4xl lg:text-7xl font-thin capitalize leading-snug tracking-wider">
              <strong>Light</strong> Up. Your{" "}
              <br className="hidden md:inline" /> Glow,
              <strong>Amplified.</strong>
            </h1>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto max-w-lg">
              <Button className="grow" withIcon>
                Discover Our Range
              </Button>
              <Button className="grow" withIcon>
                More About Sunshot
              </Button>
            </div>
          </div>

          {/* Bottom flowers (desktop only) */}
          <div className="lined hidden md:flex col-span-2 col-start-1 justify-between px-9">
            <Image src="/flower.svg" alt="flower" width={30} height={50} />
            <Image src="/flower.svg" alt="flower" width={30} height={50} />
            <Image src="/flower.svg" alt="flower" width={30} height={50} />
          </div>

          {/* Right image (desktop only) */}
          <div className="hidden md:flex col-end-13 col-span-2 row-end-4 flex-col-reverse">
            <Image
              className="lined"
              src="/makeup hero.png"
              alt="Descriptive alt text"
              width={600}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
}
