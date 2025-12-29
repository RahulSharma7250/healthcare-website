"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield, Crown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Essential Checkup",
    price: "4,999",
    icon: Shield,
    color: "text-blue-500",
    features: [
      "Basic Blood Work",
      "Blood Pressure Check",
      "BMI Assessment",
      "Physician Consultation",
      "Digital Health Report"
    ]
  },
  {
    name: "Premium Wellness",
    price: "12,499",
    icon: Crown,
    color: "text-amber-500",
    popular: true,
    features: [
      "Advanced Blood Screening",
      "Cardiovascular Stress Test",
      "Nutritional Counseling",
      "Specialist Consultation",
      "Priority Appointment",
      "24/7 Helpline Access"
    ]
  },
  {
    name: "Executive Care",
    price: "24,999",
    icon: Sparkles,
    color: "text-primary",
    features: [
      "Full Body MRI Scan",
      "Genetic Health Profiling",
      "Cancer Screenings",
      "Personal Health Coach",
      "Luxury Suite Experience",
      "Lifetime Record Access"
    ]
  }
];

export default function PackagesPage() {
  return (
    <main className="pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <SectionHeading
          centered
          badge="Wellness Plans"
          title="Invest in Your Future Health"
          subtitle="Choose from our meticulously crafted health packages designed to give you total peace of mind and proactive care."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col transition-all hover:scale-[1.01] hover:shadow-xl border border-border/40",
                pkg.popular && "border-primary/50 ring-2 ring-primary/20"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg z-10">
                  Most Popular
                </div>
              )}
              
              <div className="mb-4 sm:mb-6 md:mb-8">
                <pkg.icon className={cn("h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mb-3 sm:mb-4 md:mb-6", pkg.color)} />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1.5 sm:mb-2 md:mb-3">{pkg.name}</h3>
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">₹{pkg.price}</span>
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground font-bold">/one-time</span>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-5 sm:mb-8 md:mb-10 flex-1">
                {pkg.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 sm:gap-3">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <AppointmentDialog>
                <Button 
                  className={cn(
                    "w-full rounded-lg sm:rounded-xl py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-black shadow-lg transition-all h-auto",
                    pkg.popular ? "bg-primary text-white" : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                >
                  Select Package
                </Button>
              </AppointmentDialog>
            </motion.div>
          ))}
        </div>

        <section className="bg-primary/5 rounded-2xl sm:rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-8 md:p-12 lg:p-20 text-center">
          <Zap className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-primary mx-auto mb-4 sm:mb-6 md:mb-8 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8">Corporate Health Solutions</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
            Elevate your team's productivity and well-being with our customized corporate wellness programs. Dedicated care for your most valuable assets.
          </p>
          <Button variant="outline" size="lg" className="rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg lg:text-xl font-bold border-2 h-auto">
            Request a Quote
          </Button>
        </section>
      </div>
    </main>
  );
}
