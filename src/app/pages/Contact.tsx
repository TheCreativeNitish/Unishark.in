import { FormEvent } from "react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { BrandLogo } from "../components/BrandLogo";
import { toast } from "sonner";

export function Contact() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Message sent. We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-cyan-50 p-6">
      <div className="max-w-3xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>

        <Card className="p-8">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Contact Us</h1>
          <p className="text-foreground/70 mb-6">Have a question about UniShark programs, partnerships, or investments?</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} />
            </div>
            <Button type="submit" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90">Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
