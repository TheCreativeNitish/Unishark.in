import { FormEvent } from "react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { BrandLogo } from "../components/BrandLogo";
import { toast } from "sonner";

export function BookCall() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Call requested. We sent a confirmation to your email.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6">
      <div className="max-w-2xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>

        <Card className="p-8 border-2 border-[#06b6d4]/20">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Book a Strategy Call</h1>
          <p className="text-foreground/70 mb-6">Speak with our team about your startup stage, goals, and next milestones.</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" required type="date" />
            </div>
            <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">Request Call</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
