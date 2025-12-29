"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Specialties", href: "/specialties" },
  { name: "Doctors", href: "/doctors" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 w-full py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between rounded-full border border-white/20 px-4 sm:px-8 py-3 sm:py-4 bg-transparent">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <Activity className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-foreground">HealthCare<span className="text-primary">Plus</span></span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className={cn(
          "flex items-center justify-between rounded-full border border-white/20 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300",
          scrolled ? "glass-card shadow-lg" : "bg-transparent"
        )}>
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
              <Activity className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-foreground">HealthCare<span className="text-primary">Plus</span></span>
          </Link>

          {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-base font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-7 w-[2px] bg-border/60" />
            <AppointmentDialog>
              <Button suppressHydrationWarning className="rounded-full px-8 py-3 h-auto text-sm font-black shadow-md hover:shadow-lg transition-all active:scale-95">
                Book Now
              </Button>
            </AppointmentDialog>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-foreground p-1.5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="container mx-auto px-6 mt-3 md:hidden"
          >
            <div className="glass-card rounded-[1.5rem] p-5 space-y-3 shadow-2xl">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="block text-base font-bold text-foreground py-1.5 border-b border-border/40 last:border-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <AppointmentDialog>
                  <Button suppressHydrationWarning className="w-full rounded-xl py-5 text-base font-bold shadow-xl">
                    Book Appointment
                  </Button>
                </AppointmentDialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
