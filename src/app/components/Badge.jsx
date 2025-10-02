import React from "react";
import Image from "next/image";

export default function Badge({ type = "normal", children }) {
  const base =
    "flex align-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-full w-fit";
  const styles =
    type === "outlined"
      ? "OutlinedBadge border border-[var(--yellow)] text-[var(--yellow)] bg-transparent"
      : "FilledBadge bg-[var(--yellow)] border border-[var(--tar)] text-[var(--tar)]";

  return (
    <div className={`${base} ${styles}`}>
      <Image alt="Icon" src={children + ".svg"} width={20} height={24} />
      {children}
    </div>
  );
}
