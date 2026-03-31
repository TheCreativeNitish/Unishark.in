import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BrandLogo } from "../components/BrandLogo";

export function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/50 to-blue-50/70 p-6">
      <div className="max-w-5xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">Choose your path</h1>
        <p className="text-lg text-foreground/70 mb-10">Whether you are building the startup or funding the future, UniShark gives you structured tools to move faster.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 border-2 hover:border-[#06b6d4]/50 transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">I am a Founder</h2>
            <p className="text-foreground/70 mb-6">Validate your idea, get mentorship, and become investor-ready through milestone-based programs.</p>
            <Button asChild className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">
              <Link to="/apply-founder">Apply as Founder</Link>
            </Button>
          </Card>

          <Card className="p-8 border-2 hover:border-[#0A1F44]/40 transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">I am an Investor</h2>
            <p className="text-foreground/70 mb-6">Discover verified student startups with transparent scoring, tiering, and due-diligence support.</p>
            <Button asChild className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">
              <Link to="/join-investor">Join as Investor</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
