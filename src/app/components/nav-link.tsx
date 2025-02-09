import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} className={cn("text-white hover:text-primary transition-colors", className)}>
      {children}
    </Link>
  )
}

