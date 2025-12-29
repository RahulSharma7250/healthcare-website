"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Globe } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <SectionHeading
          badge="Get In Touch"
          title="We're Here to Help You"
          subtitle="Have questions about our services or need assistance? Reach out to our dedicated team anytime."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 space-y-8 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black mb-6">Contact Information</h3>
              
                {[
                  { icon: Phone, title: "Emergency Line", detail: "+91 1800 123 4567", sub: "Available 24/7" },
                  { icon: Mail, title: "Email Support", detail: "care@healthcareplus.in", sub: "Response within 2 hours" },
                  { icon: MapPin, title: "Main Hospital", detail: "45 Medical Enclave", sub: "New Delhi, 110001" },
                  { icon: Clock, title: "Visiting Hours", detail: "9:00 AM - 9:00 PM", sub: "Every day including holidays" }
                ].map((info, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{info.title}</p>
                    <p className="text-lg sm:text-xl font-bold truncate">{info.detail}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-20%] right-[-10%] h-40 w-40 bg-white/10 blur-[40px] rounded-full" />
              <div className="relative z-10">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 mb-4" />
                <h4 className="text-xl sm:text-2xl font-black mb-2">Global Support</h4>
                <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed">We provide international patient support and coordination services for patients traveling from abroad.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-xl"
            >
              <h3 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8">Send Us a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest ml-4">Full Name</label>
                      <Input placeholder="Arjun Mehta" className="rounded-xl sm:rounded-2xl h-12 sm:h-14 px-4 sm:px-6 border-border/60 bg-secondary/30 focus:bg-background transition-colors font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest ml-4">Email Address</label>
                      <Input placeholder="arjun@example.com" type="email" className="rounded-xl sm:rounded-2xl h-12 sm:h-14 px-4 sm:px-6 border-border/60 bg-secondary/30 focus:bg-background transition-colors font-bold" />
                    </div>
                  </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest ml-4">Subject</label>
                  <Input placeholder="How can we help?" className="rounded-xl sm:rounded-2xl h-12 sm:h-14 px-4 sm:px-6 border-border/60 bg-secondary/30 focus:bg-background transition-colors font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest ml-4">Message</label>
                  <Textarea placeholder="Your message here..." className="rounded-[1.5rem] sm:rounded-[2rem] min-h-[150px] p-4 sm:p-6 border-border/60 bg-secondary/30 focus:bg-background transition-colors font-bold" />
                </div>
                <Button className="w-full rounded-xl sm:rounded-2xl h-14 sm:h-16 text-lg sm:text-xl font-black shadow-xl shadow-primary/20">
                  Send Message <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <section className="h-[300px] sm:h-[400px] w-full rounded-[2.5rem] sm:rounded-[4rem] bg-muted relative overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-inner">
           <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-black text-xl sm:text-2xl uppercase tracking-[0.2em] sm:tracking-[0.5em] text-center px-4">
              Interactive Map Integration
           </div>
        </section>
      </div>
    </main>
  );
}
