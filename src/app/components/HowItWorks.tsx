import { Card } from "./ui/card";
import { motion } from "motion/react";
import { CheckCircle2, Users, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    title: "Apply & Register Startup",
    description: "Submit your startup idea and complete the verification process with university credentials.",
    color: "from-[#06b6d4] to-[#0284c7]",
  },
  {
    icon: Users,
    title: "UniShark Verification & Scoring",
    description: "Our team evaluates your startup based on innovation, team, market fit, and execution potential.",
    color: "from-[#0A1F44] to-[#1e3a8a]",
  },
  {
    icon: Rocket,
    title: "Mentorship & Build Support",
    description: "Get paired with industry experts who guide you through MVP development and business strategy.",
    color: "from-[#06b6d4] to-[#0284c7]",
  },
  {
    icon: TrendingUp,
    title: "Investor Matching & Funding",
    description: "Connect with pre-qualified investors interested in your industry and stage.",
    color: "from-[#0A1F44] to-[#1e3a8a]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44] mb-3 sm:mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
            A structured, step-by-step system to transform your idea into a fundable startup
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - only show on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06b6d4] via-[#0A1F44] to-[#06b6d4] -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative p-5 sm:p-6 md:p-8 h-full border-2 hover:border-[#06b6d4]/50 transition-all duration-300 hover:shadow-xl group">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <step.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                    </div>
                    
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#06b6d4] text-white flex items-center justify-center text-xs sm:text-sm font-bold mb-4 flex-shrink-0">
                      {index + 1}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-[#0A1F44] mb-2 sm:mb-3 leading-snug">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
