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
              <section id="home" className="relative pt-28 pb-6 sm:pt-32 sm:pb-8 md:pt-40 md:pb-12 lg:pt-44 min-h-[80vh] sm:min-h-[85vh] flex items-center">
            {/* Decorative Elements */}
            <div className="absolute top-[-10%] right-[-5%] -z-10 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[10%] left-[-5%] -z-10 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full bg-secondary/30 blur-[80px]" />
            
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
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
                  
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
                      The Future of <br />
                      <span className="text-primary italic">Precision</span> Medicine
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
                      Where cutting-edge technology meets compassionate care. We are redefining the patient experience with advanced diagnostics and personalized treatments.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
                      <AppointmentDialog>
                        <Button size="lg" suppressHydrationWarning className="rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-black shadow-2xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30 group h-auto w-full sm:w-auto">
                          Book Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </AppointmentDialog>
                      <Button variant="outline" size="lg" asChild className="rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-black border-2 hover:bg-secondary/50 transition-all h-auto w-full sm:w-auto">
                        <Link href="/specialties">Explore Services</Link>
                      </Button>
                    </div>
  
                      <div className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 md:gap-12">
                      {[
                        { label: "Patients", val: "25k+" },
                        { label: "Surgeries", val: "10k+" },
                        { label: "Doctors", val: "180+" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center sm:text-left">
                          <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">{stat.val}</p>
                          <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative block lg:block mt-12 lg:mt-0"
              >
                  <div className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] mx-auto lg:ml-auto">
                  <div className="absolute -inset-2 lg:-inset-3 rounded-[2rem] lg:rounded-[2.5rem] border border-primary/20 animate-spin-slow [animation-duration:20s]" />
                  <div className="absolute inset-0 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-xl">
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
                    className="absolute -left-4 lg:-left-8 top-1/4 glass-card rounded-lg lg:rounded-xl p-2 lg:p-3 shadow-xl hidden sm:block"
                  >
                    <div className="flex items-center gap-2 lg:gap-2.5">
                      <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                        <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] lg:text-xs font-black">99.9% Success</p>
                        <p className="text-[8px] lg:text-[9px] font-bold text-muted-foreground">Certified Excellence</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-3 lg:-right-6 bottom-12 lg:bottom-16 glass-card rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-xl hidden sm:block"
                  >
                    <div className="space-y-1 lg:space-y-2">
                      <p className="text-[8px] lg:text-[9px] font-bold text-primary uppercase tracking-wider">Live Availability</p>
                      <div className="flex items-center gap-1.5 lg:gap-2">
                        <div className="h-1 w-1 lg:h-1.5 lg:w-1.5 rounded-full bg-green-500 animate-ping" />
                        <span className="text-[10px] lg:text-xs font-black">Open 24/7</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENTO FEATURES */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
            <SectionHeading 
              badge="Advantages"
              title="Excellence in Every Detail"
              subtitle="We combine clinical expertise with advanced technology to provide the best possible care for our patients."
            />
            
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 h-auto md:h-[600px]">
              <div className="sm:col-span-2 md:col-span-2 md:row-span-2 group glass-card rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden relative shadow-xl">
                <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Microscope className="h-20 w-20 sm:h-32 sm:w-32 md:h-48 md:w-48 rotate-12" />
                </div>
                <div className="relative z-10">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 sm:mb-6 md:mb-10 shadow-lg shadow-primary/20">
                    <Activity className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 md:mb-6">Advanced Diagnostics</h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Our laboratory is equipped with the latest diagnostic technology, providing accurate results with unprecedented speed and precision.
                  </p>
                </div>
                <div className="relative z-10 mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <Badge variant="outline" className="rounded-full px-3 sm:px-4 md:px-5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">AI-Powered</Badge>
                  <Badge variant="outline" className="rounded-full px-3 sm:px-4 md:px-5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Real-time</Badge>
                </div>
              </div>

              <div className="sm:col-span-2 md:col-span-2 group bg-zinc-950 dark:bg-zinc-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 flex flex-col justify-center overflow-hidden relative text-white shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black">Emergency Care 24/7</h3>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    Immediate response for critical situations with our specialized trauma team always on standby, ready to provide life-saving care.
                  </p>
                </div>
              </div>

              <div className="group glass-card rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-5 sm:p-6 md:p-8 flex flex-col items-center text-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 mb-3 sm:mb-4 md:mb-6" />
                <h3 className="text-base sm:text-lg md:text-xl font-black">Expert Team</h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs opacity-80 mt-1 sm:mt-2 font-bold uppercase tracking-widest">180+ Specialists</p>
              </div>

              <div className="group glass-card rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-5 sm:p-6 md:p-8 flex flex-col items-center text-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                <Heart className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 mb-3 sm:mb-4 md:mb-6" />
                <h3 className="text-base sm:text-lg md:text-xl font-black">Patient Care</h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs opacity-80 mt-1 sm:mt-2 font-bold uppercase tracking-widest">Award Winning</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTIES - GRID CARDS */}
        <section id="specialties" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
            <SectionHeading 
              centered
              badge="Specialties"
              title="Pioneering Medical Frontiers"
              subtitle="Our specialized departments are led by world-renowned experts utilizing state-of-the-art medical innovations."
            />
            
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-white dark:bg-zinc-900 shadow-xl min-h-[320px] sm:min-h-[360px] md:min-h-[400px]"
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
                  
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                    <div className={cn("h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-2xl flex items-center justify-center text-white shadow-lg", dept.color)}>
                      <dept.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white w-full z-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">{dept.name}</h3>
                    <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-widest">Global expert care</p>
                    <Link href="/specialties" className="mt-4 sm:mt-6 md:mt-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300">
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest">Explore Department</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MODERN TESTIMONIALS */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <SectionHeading 
                  badge="Patient Stories"
                  title="Voices of Trust"
                  subtitle="We take pride in the lives we touch. Here are some of the stories from our patients who experienced our dedicated care."
                />
                <div className="grid gap-4 sm:gap-6 md:gap-8">
                  {[
                    { name: "Arjun Mehta", role: "Cardiac Patient", text: "The precision and speed of the surgical team saved my life. I've never experienced such professional and compassionate care." },
                    { name: "Priyanka Sharma", role: "Mother", text: "Best pediatric care in the city. They make kids feel safe and comfortable, and as a parent, that means everything." }
                  ].map((t, i) => (
                    <div key={i} className="glass-card rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 relative shadow-lg">
                      <Star className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 text-yellow-500 fill-yellow-500 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed mb-4 sm:mb-6 md:mb-8 italic">"{t.text}"</p>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary/20 border-2 border-primary/10" />
                        <div>
                          <p className="text-sm sm:text-base md:text-lg font-black">{t.name}</p>
                          <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative aspect-square max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                   <Image 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                    alt="Happy Patient"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 md:-bottom-10 md:-left-6 glass-card rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 shadow-2xl max-w-[180px] sm:max-w-[220px] md:max-w-[280px]">
                  <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4 mb-3 sm:mb-4 md:mb-6">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 sm:border-3 md:border-4 border-white dark:border-zinc-900 bg-zinc-200" />
                    ))}
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 sm:border-3 md:border-4 border-white dark:border-zinc-900 bg-primary flex items-center justify-center text-white text-[8px] sm:text-[10px] md:text-xs font-black">
                      +15k
                    </div>
                  </div>
                  <p className="font-black text-sm sm:text-base md:text-lg leading-snug">Trusted by thousands of patients globally</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - ULTRA MODERN */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="relative rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] bg-primary p-6 sm:p-10 md:p-16 lg:p-24 overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-[-20%] right-[-10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-white/10 blur-[120px]" />
              <div className="absolute bottom-[-20%] left-[-10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-black/10 blur-[120px]" />
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter mb-6 sm:mb-8 md:mb-10 leading-[1.1]">
                  Experience <br className="hidden sm:block" /> Better Care.
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-medium mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                  Ready to prioritize your health? Join our community of wellness and get access to top-tier medical experts today.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                  <AppointmentDialog>
                    <Button size="lg" suppressHydrationWarning className="rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 text-base sm:text-lg md:text-xl lg:text-2xl font-black bg-white text-primary hover:bg-zinc-100 shadow-2xl transition-all hover:scale-105 active:scale-95 h-auto w-full sm:w-auto">
                      Get Started
                    </Button>
                  </AppointmentDialog>
                  <Button variant="outline" size="lg" asChild className="rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 text-base sm:text-lg md:text-xl lg:text-2xl font-black border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 h-auto w-full sm:w-auto">
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
