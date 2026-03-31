import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#06b6d4]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0A1F44]/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Start Your Startup Journey Today
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Join hundreds of student founders who are turning their ideas into fundable startups with UniShark's structured support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white px-8 py-6 text-lg group min-w-[200px]"
              asChild
            >
              <Link to="/apply-founder">
                Apply as Founder
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44]/5 px-8 py-6 text-lg min-w-[200px]"
              asChild
            >
              <Link to="/book-call">
                <Phone className="mr-2 w-5 h-5" />
                Book a Call
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free for students</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No equity during mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Apply in 5 minutes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
