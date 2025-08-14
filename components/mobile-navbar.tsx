"use client"


import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 p-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <span className="text-green-400 mr-2">DFX</span>{" "}DESIFOREX
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/join">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Join Us
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Portfolio
            </Button>
          </Link>
          <Link href="/community">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Community
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-white hover:text-green-400">
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Contact
            </Button>
          </Link>
        </div>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none p-2 rounded hover:bg-green-400/10 border border-green-400/30"
            aria-label="Toggle navigation"
          >
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-black/90 rounded-lg shadow-lg border border-green-400/20 p-4 absolute left-4 right-4 top-20 z-40 animate-fade-in">
          <Link href="/join" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full text-white hover:text-green-400 justify-start mb-2">
              Join Us
            </Button>
          </Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full text-white hover:text-green-400 justify-start mb-2">
Portfolio            </Button>
          </Link>
          <Link href="/community" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full text-white hover:text-green-400 justify-start mb-2">
              Community
            </Button>
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full text-white hover:text-green-400 justify-start mb-2">
              About
            </Button>
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full text-white hover:text-green-400 justify-start">
              Contact
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
