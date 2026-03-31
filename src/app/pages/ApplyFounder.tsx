import { FormEvent } from "react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { BrandLogo } from "../components/BrandLogo";
import { toast } from "sonner";

export function ApplyFounder() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Founder application submitted. Our team will contact you within 48 hours.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6">
      <div className="max-w-3xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>
        <Card className="p-8 border-2 border-[#06b6d4]/20">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Founder Application</h1>
          <p className="text-foreground/70 mb-8">Tell us about your startup. This takes about 5 minutes.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input id="email" required type="email" placeholder="you@university.edu" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startup">Startup Name</Label>
                <Input id="startup" required placeholder="Startup name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage">Current Stage</Label>
                <Input id="stage" required placeholder="Idea / MVP / Revenue" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pitch">One-line Pitch</Label>
              <Textarea id="pitch" required placeholder="What are you building and for whom?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem">Problem You Solve</Label>
              <Textarea id="problem" required placeholder="Describe the problem and your approach" />
            </div>

            <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">Submit Application</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
