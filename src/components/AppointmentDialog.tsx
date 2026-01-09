"use client";

import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { AppointmentForm } from "@/components/AppointmentForm";

export const AppointmentDialog = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="w-[95vw] max-w-[650px] max-h-[90vh] sm:max-h-[85vh] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-0 border-none bg-transparent overflow-hidden mx-auto">
      <div className="bg-background p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-y-auto max-h-[90vh]">
        <div className="absolute top-0 right-0 -z-10 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 bg-primary/10 blur-[50px] sm:blur-[80px] md:blur-[100px]" />
        <DialogHeader className="mb-6 sm:mb-8">
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">Book Your Visit</DialogTitle>
          <DialogDescription className="text-base sm:text-lg mt-2 leading-relaxed">
            Schedule an appointment with our world-class specialists in just a few clicks.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm />
      </div>
    </DialogContent>
  </Dialog>
);
