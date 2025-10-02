import React from "react";
import Badge from "@/app/components/Badge";
import Image from "next/image";

const products = [
  {
    badge: "Fresh Arrival",
    badgeType: "outlined",
    name: "Multi-use Balm",
    description: "Hydration that lasts. A kiss of color.",
    img: "/balm.png",
  },
  {
    badge: "Best Seller",
    badgeType: "normal",
    name: "Daily Sun Screen",
    description: "Invisible protection. Natural finish, never greasy.",
    img: "/sunscreen.png",
  },
  {
    badge: "Fresh Arrival",
    badgeType: "outlined",
    name: "Light Foundation",
    description:
      "Feels Like Nothing. Looks like everything. Your skin, amplified.",
    img: "/foundation.png",
  },
  {
    badge: "Loved Most",
    badgeType: "normal",
    name: "Bright eyeshadow palette",
    description: "Color Outside the Lines. Bold pigments. Zero fallout.",
    img: "/pallete.png",
  },
];

export default function Collection() {
  return (
    <div className="col-span-12 flex flex-col gap-8">
      {products.map((p, i) => (
        <Product key={i} {...p} reverse={i % 2 !== 0} />
      ))}
    </div>
  );
}

export function Product({
  badge,
  badgeType = "normal",
  name,
  description,
  img,
  reverse = false,
}) {
  return (
    <div
      className={`col-span-12 flex flex-col md:flex-row w-full ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className="lined md:w-1/3 bg-[var(--babyblue)] 
        flex items-center justify-center p-6"
        style={{ minHeight: "70vh" }}
      >
        <Image
          src={img}
          alt={name}
          width={400}
          height={300}
          className="max-h-70 object-contain"
        />
      </div>

      <div
        className="lined md:w-2/3 bg-[var(--navy)] text-[var(--offwhite)] 
      p-15 flex flex-col justify-center gap-4"
      >
        <Badge type={badgeType}>{badge}</Badge>
        <h3 className="text-5xl font-light">{name}</h3>
        <p className="text-xl font-extralight ">{description}</p>
      </div>
    </div>
  );
}
