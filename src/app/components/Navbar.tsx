"use client";

import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#for-students", label: "For Students" },
  { href: "#for-investors", label: "For Investors" },
  { href: "#trust", label: "Trust & Safety" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex-shrink-0">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-xs sm:text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <Link to="/" onClick={handleNavClick}>
                      <BrandLogo />
                    </Link>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col gap-2 p-4">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={handleNavClick}
                          className="px-4 py-3 text-base text-foreground/70 hover:text-foreground hover:bg-accent transition-colors rounded-lg"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-border p-4 space-y-2">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full" 
                      asChild
                      onClick={handleNavClick}
                    >
                      <Link to="/sign-in">Sign In</Link>
                    </Button>
                    <Button 
                      size="lg" 
                      className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90" 
                      asChild
                      onClick={handleNavClick}
                    >
                      <Link to="/get-started">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Quick Buttons */}
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hidden xs:inline-flex"
            >
              <Link to="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
