/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Foundation } from "./components/Foundation";
import { Disciplines } from "./components/Disciplines";
import { Impact } from "./components/Impact";
import { Process } from "./components/Process";
import { Insights } from "./components/Insights";
import { Invitation } from "./components/Invitation";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global Background Hue Overlay */}
      <div className="fixed inset-0 z-0 bg-brand-dark" />
      <div className="fixed inset-0 z-1 bg-[linear-gradient(135deg,#101B15_0%,#101B15_35%,#2A2E21_50%,#85745B_75%,#7D5532_100%)] opacity-85" />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="space-y-24 lg:space-y-32">
          {/* Screen 1: The Opening */}
          <Section>
            <Hero />
          </Section>
          {/* Screen 2: The Foundation */}
          <Section>
            <Foundation />
          </Section>
        {/* Screen 3: The Disciplines */}
        <Section>
          <Disciplines />
        </Section>
        {/* Screen 4: The Impact */}
        <Section>
          <Impact />
        </Section>
        {/* Screen 5: Our Process */}
        <Section>
          <Process />
        </Section>
        {/* Screen 6: Thought Leadership */}
        <Section>
          <Insights />
        </Section>
        {/* Screen 7: The Invitation */}
        <Section>
          <Invitation />
        </Section>
      </main>

      <Footer />
      </div>
    </div>
  );
}
