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
    <DialogContent className="sm:max-w-[650px] rounded-[2.5rem] p-0 border-none bg-transparent overflow-hidden">
      <div className="bg-background p-8 md:p-12 relative">
        <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-primary/10 blur-[100px]" />
        <DialogHeader className="mb-8">
          <DialogTitle className="text-4xl font-black">Book Your Visit</DialogTitle>
          <DialogDescription className="text-lg mt-2">
            Schedule an appointment with our world-class specialists in just a few clicks.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm />
      </div>
    </DialogContent>
  </Dialog>
);
