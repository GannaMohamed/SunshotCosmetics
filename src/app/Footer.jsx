import Image from "next/image";
export default function Footer() {
  return (
    <footer className="lined col-span-12  text-sm">
      {/* Top bar */}
      <div className="border-b border-[var(--navy)] py-6 flex flex-col items-center gap-4">
        <p className="text-xl text-[var(--navy)]">Follow the vibe.</p>
        <div className="flex gap-6">
          {["instagram", "facebook", "tiktok", "whatsapp"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="socialmediaIcon transition"
              aria-label={icon}
            >
              <Image
                src={`/${icon}.svg`}
                alt={icon}
                width={36}
                height={36}
                priority
              />
            </a>
          ))}
        </div>
      </div>
      {/* Main grid */}
      {/* md:gap-10 */}
      <div className="grid grid-cols-12 gap-6   ">
        {/* Logo */}
        <div
          className=" 
        col-span-12 md:col-span-3 py-10
        flex justify-center md:justify-start"
        >
          <Image
            className="mx-auto"
            src="/logo.svg"
            alt="Sunshot logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Links */}
        <div
          className="linedLeft px-6 md:px-10 py-10
          col-span-12 md:col-span-9 
        grid grid-cols-1 sm:grid-cols-3 gap-6
        text-center md:text-left text-xl"
        >
          {/* Discover */}
          <div>
            <h3 className="mb-3">Discover</h3>
            <ul className="space-y-2">
              <li>
                <NavItem href="#">All Products</NavItem>
              </li>
              <li>
                <NavItem href="#">New Arrivals</NavItem>
              </li>
              <li>
                <NavItem href="#">Best Sellers</NavItem>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="mb-3">About Us</h3>
            <ul className="space-y-2">
              <li>
                <NavItem href="#">Our Story</NavItem>
              </li>
              <li>
                <NavItem href="#">Ingredients</NavItem>
              </li>
              <li>
                <NavItem href="#">FAQ</NavItem>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <NavItem href="#">Contact Us</NavItem>
              </li>
              <li>
                <NavItem href="#">Account</NavItem>
              </li>
              <li>
                <NavItem href="#">Privacy Policy</NavItem>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="lined py-4 text-center">
        © {new Date().getFullYear()} Sunshot. All rights reserved.
      </div>
    </footer>
  );
}

export function NavItem({ children, className = "", href = "#" }) {
  return (
    <a
      href={href}
      className={`${className} transition-colors text-[var(--red)] hover:text-[var(--babyblue)] font-regular`}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
