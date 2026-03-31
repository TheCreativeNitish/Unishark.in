import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { BrandLogo } from "../components/BrandLogo";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-cyan-50/60 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>

        <Card className="p-8 md:p-10">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-4">About UniShark</h1>
          <p className="text-foreground/70 mb-4">UniShark helps student entrepreneurs transform ideas into investor-ready startups with structured mentoring, milestone tracking, and verified access to funding networks.</p>
          <p className="text-foreground/70 mb-4">We combine founder training, startup scoring, and trusted investor access in one guided platform designed specifically for the student startup journey.</p>
          <p className="text-foreground/70">Our mission is to make early-stage innovation more accessible, transparent, and successful for the next generation of founders.</p>
        </Card>
      </div>
    </div>
  );
}
