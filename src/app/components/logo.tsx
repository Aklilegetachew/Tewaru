import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center text-2xl font-bold">
      <span className="text-white">TE</span>
      <span className="text-primary">WARU</span>
    </Link>
  )
}

