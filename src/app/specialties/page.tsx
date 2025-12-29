"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Activity, 
  Brain, 
  Baby, 
  Bone, 
  Dna, 
  Sparkles,
  ArrowRight,
  Stethoscope,
  Microscope,
  Zap
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { cn } from "@/lib/utils";

const specialties = [
  { 
    name: "Neuroscience", 
    icon: Brain, 
    color: "bg-purple-500", 
    img: "/doc5.webp  ",
    desc: "Comprehensive care for neurological conditions using advanced neuroimaging and minimally invasive surgery."
  },
  { 
    name: "Cardiology", 
    icon: Activity, 
    color: "bg-red-500", 
    img: "/doc.jpeg",
    desc: "Heart care excellence from preventive screenings to complex cardiac interventions and rehabilitation."
  },
  { 
    name: "Pediatrics", 
    icon: Baby, 
    color: "bg-blue-500", 
    img: "/doc2.jpeg",
    desc: "Dedicated medical services for children from birth through adolescence in a child-friendly environment."
  },
  { 
    name: "Orthopedics", 
    icon: Bone, 
    color: "bg-orange-500", 
    img: "/ortho.jpeg",
    desc: "Specialized treatment for bone, joint, and muscle conditions, including sports medicine and joint replacements."
  },
  { 
    name: "Oncology", 
    icon: Dna, 
    color: "bg-emerald-500", 
    img: "/orch.jpeg",
    desc: "Multidisciplinary approach to cancer care, integrating chemotherapy, radiation, and surgical oncology."
  },
  { 
    name: "Dermatology", 
    icon: Sparkles, 
    color: "bg-pink-500", 
    img: "/derma.jpeg",
    desc: "Advanced skin care solutions for medical and aesthetic concerns, led by board-certified dermatologists."
  }
];

export default function SpecialtiesPage() {
  return (
    <main className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <SectionHeading
          badge="Our Specialties"
          title="World-Class Medical Expertise"
          subtitle="Explore our specialized departments, where innovation meets compassionate care to provide the best possible outcomes."
        />

        <div className="grid gap-8 sm:gap-16 mb-12 md:mb-20 max-w-7xl mx-auto">
          {specialties.map((dept, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 glass-card rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 transition-all hover:shadow-2xl",
                i % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src={dept.img}
                  alt={dept.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={cn("absolute top-4 sm:top-6 left-4 sm:left-6 h-12 w-12 sm:h-16 sm:w-16 rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center text-white shadow-xl", dept.color)}>
                  <dept.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                  <Badge variant="secondary" className="rounded-full px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest">Premium Care</Badge>
                  <Badge variant="secondary" className="rounded-full px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest">24/7 Available</Badge>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">{dept.name}</h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {dept.desc}
                </p>
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <AppointmentDialog>
                    <Button size="lg" className="rounded-full px-8 sm:px-10 font-black h-12 sm:h-16 text-base sm:text-lg shadow-lg shadow-primary/20 w-full sm:w-auto">Book Consultation</Button>
                  </AppointmentDialog>
                  <Button variant="outline" size="lg" className="rounded-full px-8 sm:px-10 font-black h-12 sm:h-16 text-base sm:text-lg w-full sm:w-auto">Learn More</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <section className="py-10 md:py-16 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] sm:rounded-[4rem] -z-10" />
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Why Choose Our Specialties?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">We don't just provide medical care; we provide a foundation for long-term health and wellness.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              { icon: Stethoscope, title: "Expert Diagnosis", text: "Multi-layered diagnostic approach for pinpoint accuracy and comprehensive understanding of your health." },
              { icon: Microscope, title: "Modern Research", text: "Integrating latest clinical trials and research into treatment protocols for cutting-edge medical care." },
              { icon: Zap, title: "Rapid Recovery", text: "Personalized rehab plans and minimally invasive techniques to get you back to your best life faster." }
            ].map((f, i) => (
              <div key={i} className="text-center space-y-4 sm:space-y-6 p-4 sm:p-6">
                <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto shadow-xl text-primary">
                  <f.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black">{f.title}</h4>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
