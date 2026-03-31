import { Link } from "react-router";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <BrandLogo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#for-students" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              For Students
            </a>
            <a href="#for-investors" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              For Investors
            </a>
            <a href="#trust" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Trust & Safety
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
