import { FormEvent } from "react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { BrandLogo } from "../components/BrandLogo";
import { toast } from "sonner";

export function JoinInvestor() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Investor profile submitted. Verification is in progress.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-cyan-50 p-6">
      <div className="max-w-3xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>
        <Card className="p-8 border-2 border-[#0A1F44]/10">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Investor Onboarding</h1>
          <p className="text-foreground/70 mb-8">Share your investment focus and we will match you with relevant verified startups.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firm">Firm Name</Label>
                <Input id="firm" required placeholder="Fund or angel group" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" required type="email" placeholder="you@fund.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="check-size">Typical Check Size</Label>
                <Input id="check-size" required placeholder="$25K - $250K" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stages">Preferred Stage</Label>
                <Input id="stages" required placeholder="Idea, MVP, Ready" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sectors">Sectors of Interest</Label>
              <Textarea id="sectors" required placeholder="EdTech, HealthTech, FinTech, Climate..." />
            </div>

            <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">Submit Investor Profile</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
