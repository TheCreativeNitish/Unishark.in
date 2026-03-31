import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { startups } from "../data/startups";
import { BrandLogo } from "../components/BrandLogo";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export function StartupDetails() {
  const { id } = useParams();
  const startup = startups.find((item) => item.id === Number(id));

  if (!startup) {
    return (
      <div className="min-h-screen grid place-items-center p-6">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-[#0A1F44] mb-2">Startup not found</h1>
          <Button asChild>
            <Link to="/investor-dashboard">Back to Dashboard</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/30 p-6">
      <div className="max-w-5xl mx-auto pt-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link to="/" className="inline-flex">
            <BrandLogo />
          </Link>
          <Button asChild variant="outline">
            <Link to="/investor-dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <Card className="p-8 border-2 border-[#06b6d4]/20 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h1 className="text-4xl font-bold text-[#0A1F44]">{startup.name}</h1>
              <p className="text-foreground/70">{startup.description}</p>
            </div>
            <Badge className="bg-[#0A1F44] text-white">{startup.category}</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-slate-100/70">
              <p className="text-foreground/60">University</p>
              <p className="font-semibold text-[#0A1F44]">{startup.university}</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-100/70">
              <p className="text-foreground/60">Funding Goal</p>
              <p className="font-semibold text-[#0A1F44]">{startup.funding}</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-100/70">
              <p className="text-foreground/60">Tier</p>
              <p className="font-semibold text-[#0A1F44]">{startup.tierLabel}</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-100/70">
              <p className="text-foreground/60">UniShark Score</p>
              <p className="font-semibold text-[#0A1F44]">{startup.score} / 100</p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-[#0A1F44] hover:bg-[#0A1F44]/90" onClick={() => toast.success("Pitch deck download started")}>Download Pitch Deck</Button>
          <Button variant="outline" onClick={() => toast.success("Founder contacted successfully")}> 
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Founder
          </Button>
        </div>
      </div>
    </div>
  );
}
