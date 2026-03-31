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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pt-16 sm:pt-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex mb-6 sm:mb-8">
          <BrandLogo />
        </Link>
        <Card className="p-5 sm:p-6 md:p-8 border-2 border-[#06b6d4]/20">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-2 leading-tight">Founder Application</h1>
          <p className="text-sm xs:text-base text-foreground/70 mb-6 sm:mb-8">Tell us about your startup. This takes about 5 minutes.</p>

          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">Full Name</Label>
                <Input id="name" required placeholder="Your name" className="h-10 sm:h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">University Email</Label>
                <Input id="email" required type="email" placeholder="you@university.edu" className="h-10 sm:h-11" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startup" className="text-sm">Startup Name</Label>
                <Input id="startup" required placeholder="Startup name" className="h-10 sm:h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage" className="text-sm">Current Stage</Label>
                <Input id="stage" required placeholder="Idea / MVP / Revenue" className="h-10 sm:h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pitch" className="text-sm">One-line Pitch</Label>
              <Textarea id="pitch" required placeholder="What are you building and for whom?" className="min-h-24 sm:min-h-28 resize-none" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem" className="text-sm">Problem You Solve</Label>
              <Textarea id="problem" required placeholder="Describe the problem and your approach" className="min-h-24 sm:min-h-28 resize-none" />
            </div>

            <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90 h-auto py-4 sm:py-5 text-sm xs:text-base">Submit Application</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
