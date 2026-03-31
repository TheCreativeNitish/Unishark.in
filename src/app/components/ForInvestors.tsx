import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ShieldCheck, Target, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Pre-screened Startups",
    description: "Every startup goes through rigorous verification and scoring before being listed.",
  },
  {
    icon: Target,
    title: "Structured Evaluation",
    description: "Comprehensive metrics and data on team, market, and execution potential.",
  },
  {
    icon: TrendingUp,
    title: "Early-stage Opportunities",
    description: "Get access to innovative student startups at the ground floor.",
  },
  {
    icon: Handshake,
    title: "Deal Facilitation",
    description: "We handle legal frameworks and ensure smooth investment processes.",
  },
];

export function ForInvestors() {
  return (
    <section id="for-investors" className="py-12 sm:py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:order-1"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 sm:p-5 md:p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-[#0A1F44]/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
                    <benefit.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0A1F44] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4 sm:mb-6 leading-tight">
              Access Verified Student Startups
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              Discover high-potential student startups that have been vetted, mentored, and are ready for investment. UniShark eliminates the risk of investing in unverified ventures.
            </p>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-[#06b6d4]/20">
              <h3 className="font-semibold text-[#0A1F44] mb-3 sm:mb-4 text-base sm:text-lg">Investment Highlights</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">University-verified founders with KYC completed</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">Detailed startup scoring and metrics dashboard</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">Legal contract templates and support included</p>
                </li>
              </ul>
            </div>

            <Button size="lg" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 group w-full sm:w-auto h-auto py-5 sm:py-6 text-sm xs:text-base" asChild>
              <Link to="/join-investor" className="flex items-center justify-center sm:justify-start">
                Explore Opportunities
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
