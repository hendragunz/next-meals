'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from "./nav-link.module.css"

export default function NavLink({href, children}): NavLink{
  const path = usePathname()

  return (
    <Link
      href={href}
      className={`hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm transition md:px-4 ${path.includes(href) ? classes.active : ''}`}>
      <span>{children}</span>
    </Link>
  )
}