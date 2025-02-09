import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/50">
      <div className="container flex items-center justify-between py-6">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT US</NavLink>
          <NavLink href="/imports">IMPORTS</NavLink>
          <NavLink href="/exports">EXPORTS</NavLink>
          <NavLink href="/services">SERVICES</NavLink>
          <Button
            variant="default"
            className="bg-primary text-white hover:bg-primary/90"
          >
            CONTACT US
          </Button>
        </nav>
      </div>
    </header>
  );
}
