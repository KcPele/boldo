"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="w-full">
      <div className=" py-3 flex items-center justify-between">
        <Link href="/" aria-label="Boldo home" className="flex items-center">
          <Image src="/logo.svg" alt="Boldo" width={162} height={42} priority />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-10"
        >
          <Link
            href="#"
            className="text-boldo-blue-dark font-semibold  hover:opacity-80"
          >
            Product
          </Link>
          <Link
            href="#"
            className="text-boldo-blue-dark font-semibold  hover:opacity-80"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-boldo-blue-dark font-semibold  hover:opacity-80"
          >
            About
          </Link>
          <Button
            size="sm"
            className="cursor-pointer"
            variant="secondary"
            aria-label="Log in"
          >
            Log In
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-boldo-blue-dark/10 text-boldo-blue-dark focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open ? (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-boldo-white"
        >
          <nav className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#"
              className="text-boldo-blue-dark font-semibold hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              Product
            </Link>
            <Link
              href="#"
              className="text-boldo-blue-dark font-semibold hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-boldo-blue-dark font-semibold hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Button
              size="sm"
              className="cursor-pointer w-full"
              variant="secondary"
              aria-label="Log in"
              onClick={() => setOpen(false)}
            >
              Log In
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
