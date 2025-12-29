"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Activity, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  Star, 
  Users,
  Sparkles,
  Microscope,
  Baby,
  Brain,
  Bone,
  Dna
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main>
            {/* HERO SECTION */}
              <section id="home" className="relative pt-24 pb-8 md:pt-32 md:pb-12 min-h-[85vh] flex items-center">
            {/* Decorative Elements */}
            <div className="absolute top-[-10%] right-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[10%] left-[-5%] -z-10 h-[300px] w-[300px] rounded-full bg-secondary/30 blur-[80px]" />
            
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-primary mb-6">
                    <Sparkles className="h-3 w-3" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Innovation in Healthcare</span>
                  </div>
                  
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-6xl lg:leading-[1.1] mb-6">
                      The Future of <br />
                      <span className="text-primary italic">Precision</span> Medicine
                    </h1>
                    
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 max-w-2xl">
                      Where cutting-edge technology meets compassionate care. We are redefining the patient experience with advanced diagnostics and personalized treatments.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      <AppointmentDialog>
                        <Button size="lg" suppressHydrationWarning className="rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-black shadow-2xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30 group h-auto">
                          Book Now <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </AppointmentDialog>
                      <Button variant="outline" size="lg" asChild className="rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-black border-2 hover:bg-secondary/50 transition-all h-auto">
                        <Link href="/specialties">Explore Services</Link>
                      </Button>
                    </div>
  
                      <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-8 sm:gap-12">
                      {[
                        { label: "Patients", val: "25k+" },
                        { label: "Surgeries", val: "10k+" },
                        { label: "Doctors", val: "180+" }
                      ].map((stat, i) => (
                        <div key={i}>
                          <p className="text-2xl sm:text-3xl font-black text-foreground">{stat.val}</p>
                          <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative hidden lg:block"
              >
                  <div className="relative aspect-[4/5] w-full max-w-[480px] ml-auto">
                  <div className="absolute -inset-3 rounded-[2.5rem] border border-primary/20 animate-spin-slow [animation-duration:20s]" />
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-xl">
                    <Image 
                      src="/doc5.webp"
                      alt="Specialist Indian Doctor"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-8 top-1/4 glass-card rounded-xl p-3 shadow-xl"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-black">99.9% Success</p>
                        <p className="text-[9px] font-bold text-muted-foreground">Certified Excellence</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-6 bottom-16 glass-card rounded-xl p-4 shadow-xl"
                  >
                    <div className="space-y-2">
                      <p className="text-[9px] font-bold text-primary uppercase tracking-wider">Live Availability</p>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                        <span className="text-xs font-black">Open 24/7</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENTO FEATURES */}
        <section className="py-10 md:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <SectionHeading 
              badge="Advantages"
              title="Excellence in Every Detail"
              subtitle="We combine clinical expertise with advanced technology to provide the best possible care for our patients."
            />
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-4 md:grid-rows-2 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 group glass-card rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 flex flex-col justify-between overflow-hidden relative shadow-xl">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Microscope className="h-32 w-32 sm:h-48 sm:w-48 rotate-12" />
                </div>
                <div className="relative z-10">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 sm:mb-10 shadow-lg shadow-primary/20">
                    <Activity className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">Advanced Diagnostics</h3>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Our laboratory is equipped with the latest diagnostic technology, providing accurate results with unprecedented speed and precision.
                  </p>
                </div>
                <div className="relative z-10 mt-8 sm:mt-10 flex gap-3 sm:gap-4">
                  <Badge variant="outline" className="rounded-full px-4 sm:px-5 py-1 text-[10px] font-bold uppercase tracking-widest">AI-Powered</Badge>
                  <Badge variant="outline" className="rounded-full px-4 sm:px-5 py-1 text-[10px] font-bold uppercase tracking-widest">Real-time</Badge>
                </div>
              </div>

              <div className="md:col-span-2 group bg-zinc-950 dark:bg-zinc-900 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 flex flex-col justify-center overflow-hidden relative text-white shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Activity className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black">Emergency Care 24/7</h3>
                  </div>
                  <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed">
                    Immediate response for critical situations with our specialized trauma team always on standby, ready to provide life-saving care.
                  </p>
                </div>
              </div>

              <div className="group glass-card rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 flex flex-col items-center text-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-black">Expert Team</h3>
                <p className="text-[10px] sm:text-xs opacity-80 mt-2 font-bold uppercase tracking-widest">180+ Specialists</p>
              </div>

              <div className="group glass-card rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 flex flex-col items-center text-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-black">Patient Care</h3>
                <p className="text-[10px] sm:text-xs opacity-80 mt-2 font-bold uppercase tracking-widest">Award Winning</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTIES - GRID CARDS */}
        <section id="specialties" className="py-12 md:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <SectionHeading 
              centered
              badge="Specialties"
              title="Pioneering Medical Frontiers"
              subtitle="Our specialized departments are led by world-renowned experts utilizing state-of-the-art medical innovations."
            />
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Neuroscience", icon: Brain, color: "bg-purple-500", img: "/doc5.webp" },
                { name: "Cardiology", icon: Activity, color: "bg-red-500", img: "/doc.jpeg" },
                { name: "Pediatrics", icon: Baby, color: "bg-blue-500", img: "/doc2.jpeg" },
                { name: "Orthopedics", icon: Bone, color: "bg-orange-500", img: "/ortho.jpeg" },
                { name: "Oncology", icon: Dna, color: "bg-emerald-500", img: "/orch.jpeg" },
                { name: "Dermatology", icon: Sparkles, color: "bg-pink-500", img: "/derma.jpeg" }
              ].map((dept, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-white dark:bg-zinc-900 shadow-xl min-h-[400px]"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={dept.img}
                      alt={dept.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  
                  <div className="absolute top-6 right-6 z-10">
                    <div className={cn("h-10 w-10 sm:h-12 sm:w-12 rounded-2xl flex items-center justify-center text-white shadow-lg", dept.color)}>
                      <dept.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 p-6 sm:p-10 text-white w-full z-10">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight">{dept.name}</h3>
                    <p className="mt-2 text-[10px] sm:text-xs text-white/70 font-bold uppercase tracking-widest">Global expert care</p>
                    <Link href="/specialties" className="mt-6 sm:mt-8 flex justify-between items-center sm:opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">Explore Department</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MODERN TESTIMONIALS */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionHeading 
                  badge="Patient Stories"
                  title="Voices of Trust"
                  subtitle="We take pride in the lives we touch. Here are some of the stories from our patients who experienced our dedicated care."
                />
                <div className="grid gap-6 sm:gap-8">
                  {[
                    { name: "Arjun Mehta", role: "Cardiac Patient", text: "The precision and speed of the surgical team saved my life. I've never experienced such professional and compassionate care." },
                    { name: "Priyanka Sharma", role: "Mother", text: "Best pediatric care in the city. They make kids feel safe and comfortable, and as a parent, that means everything." }
                  ].map((t, i) => (
                    <div key={i} className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 relative shadow-lg">
                      <Star className="absolute top-8 sm:top-10 right-8 sm:top-10 text-yellow-500 fill-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
                      <p className="text-lg sm:text-xl font-bold leading-relaxed mb-6 sm:mb-8 italic">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/20 border-2 border-primary/10" />
                        <div>
                          <p className="text-base sm:text-lg font-black">{t.name}</p>
                          <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square max-w-[550px] mx-auto rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl">
                   <Image 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                    alt="Happy Patient"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-6 glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl max-w-[220px] sm:max-w-[280px]">
                  <div className="flex -space-x-3 sm:-space-x-4 mb-4 sm:mb-6">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 sm:border-4 border-white dark:border-zinc-900 bg-zinc-200" />
                    ))}
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 sm:border-4 border-white dark:border-zinc-900 bg-primary flex items-center justify-center text-white text-[10px] sm:text-xs font-black">
                      +15k
                    </div>
                  </div>
                  <p className="font-black text-base sm:text-lg leading-snug">Trusted by thousands of patients globally</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - ULTRA MODERN */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="relative rounded-[3rem] sm:rounded-[4rem] bg-primary p-10 sm:p-16 md:p-24 overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />
              <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-black/10 blur-[120px]" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 sm:mb-10 leading-[1.1]">
                  Experience <br /> Better Care.
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium mb-10 sm:mb-12 leading-relaxed">
                  Ready to prioritize your health? Join our community of wellness and get access to top-tier medical experts today.
                </p>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <AppointmentDialog>
                    <Button size="lg" suppressHydrationWarning className="rounded-full px-8 sm:px-12 py-8 sm:py-10 text-xl sm:text-2xl font-black bg-white text-primary hover:bg-zinc-100 shadow-2xl transition-all hover:scale-105 active:scale-95 h-auto">
                      Get Started
                    </Button>
                  </AppointmentDialog>
                  <Button variant="outline" size="lg" asChild className="rounded-full px-8 sm:px-12 py-8 sm:py-10 text-xl sm:text-2xl font-black border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 h-auto">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
