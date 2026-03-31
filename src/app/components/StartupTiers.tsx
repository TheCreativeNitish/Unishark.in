import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Lightbulb, Hammer, Rocket } from "lucide-react";

const tiers = [
  {
    icon: Lightbulb,
    tier: "Tier 1",
    title: "Idea Stage",
    description: "Concept validation and market research phase",
    features: [
      "Idea validation workshops",
      "Market research support",
      "Team building resources",
      "Business model canvas",
    ],
    color: "from-amber-400 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
  },
  {
    icon: Hammer,
    tier: "Tier 2",
    title: "MVP Stage",
    description: "Building your minimum viable product",
    features: [
      "Technical mentorship",
      "MVP development guidance",
      "User testing frameworks",
      "Pitch deck preparation",
    ],
    color: "from-[#06b6d4] to-[#0284c7]",
    bgColor: "from-cyan-50 to-blue-50",
    featured: true,
  },
  {
    icon: Rocket,
    tier: "Tier 3",
    title: "Investment Ready",
    description: "Prepared for investor pitches and funding",
    features: [
      "Investor introductions",
      "Due diligence preparation",
      "Valuation guidance",
      "Legal contract support",
    ],
    color: "from-[#0A1F44] to-[#1e3a8a]",
    bgColor: "from-blue-50 to-indigo-50",
  },
];

export function StartupTiers() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1F44] mb-3 sm:mb-4 leading-tight">
            Startup Tiers
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2 leading-relaxed">
            We meet you where you are and guide you to where you want to be
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.featured && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-[#06b6d4] text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">Most Popular</Badge>
                </div>
              )}
              
              <Card className={`p-5 sm:p-6 md:p-8 h-full border-2 ${tier.featured ? 'border-[#06b6d4] shadow-xl md:scale-105' : 'hover:border-[#06b6d4]/30'} transition-all duration-300 bg-white`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto flex-shrink-0`}>
                  <tier.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                </div>

                <div className="text-center mb-5 sm:mb-6">
                  <Badge variant="outline" className="mb-2 text-xs sm:text-sm text-[#0A1F44] border-[#0A1F44]/20">
                    {tier.tier}
                  </Badge>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A1F44] mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#06b6d4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="pt-5 sm:pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-foreground/60 mb-2">
                    <span>Progress</span>
                    <span>{(index + 1) * 33}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${tier.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${(index + 1) * 33}%` }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Connection arrows - mobile hidden */}
        <div className="hidden md:flex items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>Progression Path</span>
            <svg className="w-20 h-6" viewBox="0 0 100 24" fill="none">
              <path d="M0 12 L80 12 M75 6 L85 12 L75 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
