import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Lightbulb, Users, Code, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    icon: Lightbulb,
    title: "Idea Validation",
    description: "Get expert feedback on your startup concept and market potential.",
  },
  {
    icon: Users,
    title: "Mentorship Access",
    description: "Connect with industry professionals who've been where you are.",
  },
  {
    icon: Code,
    title: "MVP Development Support",
    description: "Resources and guidance to build your minimum viable product.",
  },
  {
    icon: DollarSign,
    title: "Funding Opportunities",
    description: "Direct access to investors looking for early-stage student startups.",
  },
];

export function ForStudents() {
  return (
    <section id="for-students" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-cyan-50/50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4 sm:mb-6 leading-tight">
              Built for Student Founders
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              We understand the unique challenges student entrepreneurs face. UniShark provides the structure, support, and connections you need to succeed.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm xs:text-base text-foreground/80">Free for students with valid university ID</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm xs:text-base text-foreground/80">Structured programs designed for busy students</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#06b6d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm xs:text-base text-foreground/80">No equity taken during mentorship phase</p>
              </div>
            </div>

            <Button size="lg" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 group w-full sm:w-auto h-auto py-5 sm:py-6 text-sm xs:text-base" asChild>
              <Link to="/apply-founder" className="flex items-center justify-center sm:justify-start">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 sm:p-5 md:p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-[#06b6d4]/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0A1F44] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
