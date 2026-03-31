import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BrandLogo } from "../components/BrandLogo";
import { toast } from "sonner";

export function SignIn() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"founder" | "investor">("founder");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Signed in successfully");
    navigate(role === "founder" ? "/founder-dashboard" : "/investor-dashboard");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,#cffafe_0%,#eff6ff_45%,#f8fafc_100%)] p-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center pt-10">
        <div>
          <Link to="/" className="inline-flex mb-8">
            <BrandLogo />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">Welcome back to UniShark</h1>
          <p className="text-foreground/70 text-lg">Sign in to continue building, tracking, and funding the next generation of student-led startups.</p>
        </div>

        <Card className="p-6 md:p-8 border-2 border-[#06b6d4]/20 shadow-xl shadow-cyan-100/60">
          <Tabs defaultValue="founder" onValueChange={(value) => setRole(value as "founder" | "investor")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="founder">Founder</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
            </TabsList>

            <TabsContent value="founder" className="mt-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="founder-email">Email</Label>
                  <Input id="founder-email" type="email" required placeholder="founder@university.edu" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founder-password">Password</Label>
                  <Input id="founder-password" type="password" required placeholder="********" />
                </div>
                <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">Sign in as Founder</Button>
              </form>
            </TabsContent>

            <TabsContent value="investor" className="mt-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="investor-email">Work Email</Label>
                  <Input id="investor-email" type="email" required placeholder="you@fund.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="investor-password">Password</Label>
                  <Input id="investor-password" type="password" required placeholder="********" />
                </div>
                <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90">Sign in as Investor</Button>
              </form>
            </TabsContent>
          </Tabs>

          <p className="mt-6 text-sm text-foreground/70 text-center">
            New here? <Link to="/get-started" className="text-[#0A1F44] font-semibold hover:underline">Create an account</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
