"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // For hamburger menu icons

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isSticky ? "bg-black/80 shadow-lg backdrop-blur-md" : "bg-black/50"
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT US</NavLink>
          <NavLink href="/imports">IMPORTS</NavLink>
          <NavLink href="/exports">EXPORTS</NavLink>
          <NavLink href="/services">SERVICES</NavLink>
          <Button className="bg-primary text-white hover:bg-primary/90">
            CONTACT US
          </Button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black/90 p-6 md:hidden flex flex-col space-y-4"
        >
          <div onClick={() => setIsMenuOpen(false)}>
            <NavLink href="/">HOME</NavLink>
          </div>
          <div onClick={() => setIsMenuOpen(false)}>
            <NavLink href="/about">ABOUT US</NavLink>
          </div>
          <div onClick={() => setIsMenuOpen(false)}>
            <NavLink href="/imports">IMPORTS</NavLink>
          </div>
          <div onClick={() => setIsMenuOpen(false)}>
            <NavLink href="/exports">EXPORTS</NavLink>
          </div>
          <div onClick={() => setIsMenuOpen(false)}>
            <NavLink href="/services">SERVICES</NavLink>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            CONTACT US
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
