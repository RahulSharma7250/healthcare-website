"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  badge?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, badge, centered = false }: SectionHeadingProps) => (
  <div className={cn("mb-8 md:mb-12", centered ? "text-center" : "text-left")}>
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-primary bg-primary/10 border-primary/20 font-bold uppercase tracking-widest text-[11px]">
          {badge}
        </Badge>
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance leading-[1.1]"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={cn("mt-6 text-lg md:text-xl text-muted-foreground/80 text-balance max-w-3xl leading-relaxed", centered && "mx-auto")}
    >
      {subtitle}
    </motion.p>
  </div>
);
