/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Insights } from "./pages/Insights";
import { OurApproach } from "./pages/OurApproach";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Global Background Hue Overlay */}
        <div className="fixed inset-0 z-0 bg-brand-dark" />
        <div className="fixed inset-0 z-1 bg-[linear-gradient(135deg,#101B15_0%,#101B15_35%,#2A2E21_50%,#85745B_75%,#7D5532_100%)] opacity-85" />
        
        <div className="relative z-10">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/approach" element={<OurApproach />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
