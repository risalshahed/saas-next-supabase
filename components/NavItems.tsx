'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' }
  ]

  return (
    <nav className="flex items-center gap-4">
      {
        navItems.map(({ label, href }) =>
          <Link
            key={label}
            href={href}
            className={`px-3 py-1 rounded-md ${cn(pathname === href && 'text-white bg-gray-800 font-semibold')}`}
          >
            { label }
          </Link>
        )
      }
    </nav>
  )
}

export default NavItems;