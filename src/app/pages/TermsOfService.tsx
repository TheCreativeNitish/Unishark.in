import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { BrandLogo } from "../components/BrandLogo";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>

        <Card className="p-8 md:p-10 space-y-4">
          <h1 className="text-3xl font-bold text-[#0A1F44]">Terms of Service</h1>
          <p className="text-foreground/70">By using UniShark, you agree to provide accurate information and use the platform for lawful startup and investment activities.</p>
          <p className="text-foreground/70">Founders are responsible for the accuracy of submitted startup data. Investors are responsible for their own due diligence before making decisions.</p>
          <p className="text-foreground/70">UniShark may update platform features and policies over time. Continued use indicates acceptance of revised terms.</p>
        </Card>
      </div>
    </div>
  );
}
