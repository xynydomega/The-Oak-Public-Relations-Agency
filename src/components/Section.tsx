import { motion } from "motion/react";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const Section = ({ children, className = "", fullHeight = true }: SectionProps) => {
  return (
    <section className={`${fullHeight ? 'min-h-screen' : ''} ${className}`}>
      {/* Main Content Area */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
};
