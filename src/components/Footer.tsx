"use client";

import React from "react";
import Link from "next/link";
import { 
  Activity, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
                <Activity className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-none">HealthCare<span className="text-primary">Plus</span></span>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-sm">
              Pioneering the future of medicine with a focus on precision, technology, and patient comfort.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Button key={i} variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl hover:bg-primary hover:text-white transition-all border-border/60">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Quick Access</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Home", "Services", "Doctors", "About"].map(link => (
                <li key={link}>
                  <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-base sm:text-lg font-bold hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Specialties</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Cardiology", "Neurology", "Pediatrics"].map(link => (
                <li key={link}>
                  <Link href="/specialties" className="text-base sm:text-lg font-bold hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10">
              <h4 className="text-xl sm:text-2xl font-black mb-6">Stay Updated</h4>
              <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    suppressHydrationWarning
                    className="flex-1 bg-secondary/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold outline-none border border-border focus:border-primary transition-colors min-w-0"
                  />
                <Button className="rounded-xl sm:rounded-2xl h-auto aspect-square px-3 sm:px-4 shrink-0">
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4 font-bold">No spam, just health tips.</p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-muted-foreground text-center md:text-left">© 2024 HealthCarePlus. Built for the future of care.</p>
          <div className="flex gap-8 text-sm font-bold text-muted-foreground">
            <Link href="#" className="hover:text-primary">Legal</Link>
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
