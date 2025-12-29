"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppointmentDialog } from "@/components/AppointmentDialog";

const doctors = [
  {
    name: "Dr. Sunita Rao",
    role: "Senior Cardiologist",
    img: "/doc.jpeg",
    rating: 4.9,
    reviews: 128,
    specialty: "Interventional Cardiology"
  },
  {
    name: "Dr. Rajesh Khanna",
    role: "Neurosurgeon",
    img: "/orch.jpeg",
    rating: 5.0,
    reviews: 85,
    specialty: "Complex Spine Surgery"
  },
  {
    name: "Dr. Anjali Sharma",
    role: "Pediatrician",
    img: "/derma.jpeg",
    rating: 4.8,
    reviews: 210,
    specialty: "Neonatal Care"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Oncologist",
    img: "/doc5.webp",
    rating: 4.9,
    reviews: 156,
    specialty: "Precision Oncology"
  },
  {
    name: "Dr. Meera Reddy",
    role: "Dermatologist",
    img: "/ortho.jpeg",
    rating: 4.7,
    reviews: 94,
    specialty: "Cosmetic Dermatology"
  },
  {
    name: "Dr. Amit Patel",
    role: "Orthopedic Surgeon",
    img: "/doc3.jpeg",
    rating: 4.9,
    reviews: 142,
    specialty: "Sports Medicine"
  }
];

export default function DoctorsPage() {
  return (
    <main className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <SectionHeading
          badge="Our Experts"
          title="Meet Our World-Class Specialists"
          subtitle="Our team consists of internationally recognized medical professionals dedicated to providing the highest standard of care."
        />

            <div className="grid gap-6 sm:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-20 max-w-[1400px] mx-auto">
            {doctors.map((doctor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass-card rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden transition-all hover:shadow-2xl border border-border/40"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={doctor.img}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  <div className="absolute top-4 sm:top-6 right-4 sm:top-6">
                    <Badge className="bg-white/95 backdrop-blur-md text-primary font-black border-none px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs shadow-lg">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 fill-primary" /> {doctor.rating}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 sm:p-8">
                    <div className="flex gap-2 sm:gap-3 w-full">
                      <Button variant="outline" size="icon" className="rounded-xl bg-white/10 border-white/20 text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-xl bg-white/10 border-white/20 text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                      <AppointmentDialog>
                        <Button className="flex-1 rounded-xl h-10 sm:h-12 font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-lg">Book Now</Button>
                      </AppointmentDialog>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-2">{doctor.role}</p>
                  <h3 className="text-2xl sm:text-3xl font-black mb-1 leading-tight">{doctor.name}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium mb-4 sm:mb-6 leading-relaxed">{doctor.specialty}</p>
                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border/40">
                    <span className="text-xs sm:text-sm font-bold text-muted-foreground">{doctor.reviews} Reviews</span>
                    <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-black cursor-pointer group/link">
                      Full Profile <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>

        {/* Recruitment CTA */}
        <section className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-zinc-950 p-8 sm:p-12 md:p-20 text-white overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] h-64 w-64 bg-primary/30 blur-[100px] rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Join Our Medical Elite</h2>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-6 sm:mb-8">
                Are you a specialist looking to redefine healthcare? We are always looking for passionate professionals to join our growing team.
              </p>
              <Button size="lg" className="rounded-full px-8 sm:px-10 py-6 sm:py-8 text-lg sm:text-xl font-bold h-auto">Apply Today</Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="h-32 sm:h-40 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-4" />
                  <p className="text-sm sm:text-base font-black">Flexible Hours</p>
                </div>
                <div className="h-32 sm:h-40 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-4" />
                  <p className="text-sm sm:text-base font-black">Top Incentives</p>
                </div>
              </div>
              <div className="pt-4 sm:pt-8 space-y-3 sm:space-y-4">
                <div className="h-32 sm:h-40 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-4" />
                  <p className="text-sm sm:text-base font-black">Global Network</p>
                </div>
                <div className="h-32 sm:h-40 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-4" />
                  <p className="text-sm sm:text-base font-black">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
