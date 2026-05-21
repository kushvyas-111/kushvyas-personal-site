"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "../data";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-x-1 gap-y-1">
      {NAV.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "rounded-full px-3 py-1.5 text-sm transition-colors",
              active
                ? "bg-blue-600 text-white"
                : "text-blue-900/70 hover:bg-blue-50 hover:text-blue-700",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
