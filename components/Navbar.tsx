"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Only show when at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/final-logo.png"
            alt="BeachResort Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/rooms" label="Rooms" />
          <NavItem href="#amenities" label="Amenities" />
          <NavItem href="#contact" label="Contact" />
          <Link
            href="/book"
            className="ml-4 bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary-dark transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-700 hover:text-primary transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Link href="/" onClick={toggleMenu} className="flex items-center">
            <Image
              src="/final-logo.png"
              alt="BeachResort Logo"
              width={120}
              height={35}
              className="object-contain"
            />
          </Link>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-gray-700 hover:text-primary transition"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] space-y-6 text-lg">
          <NavItem href="/" label="Home" onClick={toggleMenu} />
          <NavItem href="/rooms" label="Rooms" onClick={toggleMenu} />
          <NavItem href="#amenities" label="Amenities" onClick={toggleMenu} />
          <NavItem href="#contact" label="Contact" onClick={toggleMenu} />
          <Link
            href="/book"
            onClick={toggleMenu}
            className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Reusable Link component
function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-700 text-base font-medium hover:text-primary transition duration-200"
    >
      {label}
    </Link>
  );
}
