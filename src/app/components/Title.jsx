export default function Title({ children, repeated = false }) {
  return (
    <div
      className={`lined py-6 col-span-12 bg-[var(--grey)] flex px-4 ${
        repeated ? "justify-between" : "justify-center"
      }`}
    >
      {repeated ? (
        <>
          {/* Show once on small screens */}
          <h2 className="text-5xl font-regular capitalize lg:hidden mx-auto">
            {children}
          </h2>

          {/* Show Repeated Title on md and up */}
          <div className="hidden lg:flex justify-between w-full">
            {[...Array(3)].map((_, i) => (
              <h2 key={i} className="text-5xl font-regular capitalize">
                {children}
              </h2>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-5xl font-regular capitalize">{children}</h2>
      )}
    </div>
  );
}
