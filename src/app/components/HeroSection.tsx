import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import unisharkLogo from "../../assets/unishark-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/50 pt-16 sm:pt-20">
      {/* Animated background elements - hide blur on very small screens */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-[#06b6d4]/20 to-[#0A1F44]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-[#0A1F44]/20 to-[#06b6d4]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 mb-6 sm:mb-8"
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#06b6d4] flex-shrink-0" />
          <span className="text-xs sm:text-sm text-[#0A1F44]">Where Student Startups Become Real Companies</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A1F44] mb-4 sm:mb-6 leading-tight"
        >
          Turn Your Startup Idea<br />
          <span className="bg-gradient-to-r from-[#0A1F44] to-[#06b6d4] bg-clip-text text-transparent">
            Into a Funded Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
        >
          UniShark helps student founders validate, build, and connect with real investors through structured mentorship and verification.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 px-2"
        >
          <Button 
            size="lg" 
            className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white text-sm xs:text-base px-4 sm:px-8 py-5 sm:py-6 h-auto group w-full sm:w-auto"
            asChild
          >
            <Link to="/apply-founder" className="flex items-center justify-center">
              Apply as Founder
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44]/5 text-sm xs:text-base px-4 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
            asChild
          >
            <Link to="/join-investor">Join as Investor</Link>
          </Button>
        </motion.div>

        {/* Network visualization - responsive layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          {/* Mobile vertical layout */}
          <div className="md:hidden flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl sm:text-2xl">👨‍🎓</span>
              </div>
              <span className="text-xs sm:text-sm mt-2 text-foreground/60">Students</span>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#06b6d4]"
            >
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 rotate-90" />
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] p-1 shadow-xl border-2 border-[#06b6d4] overflow-hidden">
                <ImageWithFallback
                  src={unisharkLogo}
                  alt="UniShark logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="text-xs sm:text-sm mt-2 font-semibold text-[#0A1F44]">UniShark</span>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#06b6d4]"
            >
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 rotate-90" />
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl sm:text-2xl">💼</span>
              </div>
              <span className="text-xs sm:text-sm mt-2 text-foreground/60">Investors</span>
            </div>
          </div>

          {/* Desktop horizontal layout */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👨‍🎓</span>
              </div>
              <span className="text-sm mt-2 text-foreground/60">Students</span>
            </div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#06b6d4]"
            >
              <ArrowRight className="w-8 h-8" />
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] p-1 shadow-xl border-2 border-[#06b6d4] overflow-hidden">
                <ImageWithFallback
                  src={unisharkLogo}
                  alt="UniShark logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="text-sm mt-2 font-semibold text-[#0A1F44]">UniShark</span>
            </div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#06b6d4]"
            >
              <ArrowRight className="w-8 h-8" />
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">💼</span>
              </div>
              <span className="text-sm mt-2 text-foreground/60">Investors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
