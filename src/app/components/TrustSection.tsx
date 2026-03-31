import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ShieldCheck, FileCheck, GraduationCap, Award } from "lucide-react";

const trustFeatures = [
  {
    icon: GraduationCap,
    title: "University Validation",
    description: "All founders must verify their student status with official university credentials.",
    badge: "Required",
  },
  {
    icon: ShieldCheck,
    title: "KYC Verification",
    description: "Complete identity verification ensures authenticity and accountability.",
    badge: "Secure",
  },
  {
    icon: FileCheck,
    title: "Legal Contracts",
    description: "Standardized, lawyer-reviewed agreements protect both founders and investors.",
    badge: "Protected",
  },
  {
    icon: Award,
    title: "Startup Scoring System",
    description: "Transparent evaluation metrics based on team, market, product, and traction.",
    badge: "Transparent",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/30 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#06b6d4]" />
            <span className="text-sm text-white">Verified by UniShark</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trust & Verification
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Security and credibility are our foundation. Every participant goes through rigorous verification to ensure a safe, professional ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#06b6d4] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/30">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Verified Startups</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Security Monitoring</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">Legal</div>
              <div className="text-sm text-white/70">Contract Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
