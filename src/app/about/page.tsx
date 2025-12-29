"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, Sparkles, Heart } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <main className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section className="mb-12 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                badge="Our Story"
                title="Pioneering Care for a Modern World"
                subtitle="Founded in 2010, HealthCarePlus was born from a vision to bridge the gap between advanced medical technology and human-centric care."
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that every patient deserves a personalized journey. Our approach combines data-driven diagnostics with empathetic treatment plans, ensuring that we don't just treat symptoms, but heal people.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-black text-primary">15+</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-black text-primary">250k</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">Patients Healed</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl max-w-[550px] mx-auto lg:ml-auto w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Our Facility"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12 md:mb-20">
          <SectionHeading
            centered
            badge="Our Values"
            title="What Drives Us Forward"
            subtitle="Core principles that guide every decision we make and every life we touch."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Heart, title: "Compassion", text: "We treat every patient like family, with the respect and warmth they deserve." },
              { icon: ShieldCheck, title: "Integrity", text: "Honesty and transparency are at the core of our medical practice." },
              { icon: Target, title: "Precision", text: "Utilizing the latest tech to ensure the highest accuracy in every diagnosis." }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 text-center shadow-lg"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-4">{value.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision/Mission Bento */}
        <section className="mb-12 md:mb-20">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-primary p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-10%] right-[-10%] h-48 w-48 bg-white/10 blur-[50px] rounded-full" />
              <div className="relative z-10">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 mb-6" />
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">Our Mission</h3>
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                  To provide accessible, high-quality healthcare by integrating cutting-edge technology with compassionate medical expertise.
                </p>
              </div>
            </div>
            <div className="bg-zinc-950 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute bottom-[-10%] left-[-10%] h-48 w-48 bg-primary/20 blur-[50px] rounded-full" />
              <div className="relative z-10">
                <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 mb-6" />
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">Our Vision</h3>
                <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
                  To be the global benchmark for precision medicine, where innovation meets empathy to redefine care standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <div className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <Badge className="mb-4 rounded-full px-4 py-1 bg-primary/10 text-primary border-primary/20 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                  Milestones
                </Badge>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">Recognized for Excellence</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Our commitment to quality has earned us numerous accolades and certifications.
                </p>
                <div className="space-y-4 max-w-sm mx-auto md:mx-0">
                  {["Best Specialized Hospital 2023", "Innovation Tech Award", "Highest Satisfaction"].map((m, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      <span className="font-bold text-base sm:text-lg">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[500px]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-2xl sm:rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all shadow-lg">
                    <Image
                      src={`https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&v=${i}`}
                      alt="Facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
