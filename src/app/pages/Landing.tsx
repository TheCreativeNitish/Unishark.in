import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { ForStudents } from "../components/ForStudents";
import { ForInvestors } from "../components/ForInvestors";
import { TrustSection } from "../components/TrustSection";
import { StartupTiers } from "../components/StartupTiers";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ForStudents />
      <ForInvestors />
      <TrustSection />
      <StartupTiers />
      <CTASection />
      <Footer />
    </div>
  );
}
