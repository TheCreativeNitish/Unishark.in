import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { BrandLogo } from "../components/BrandLogo";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <Link to="/" className="inline-flex mb-8">
          <BrandLogo />
        </Link>

        <Card className="p-8 md:p-10 space-y-4">
          <h1 className="text-3xl font-bold text-[#0A1F44]">Privacy Policy</h1>
          <p className="text-foreground/70">UniShark collects account and startup profile information to provide mentorship, verification, and investor matching features.</p>
          <p className="text-foreground/70">We process identity and business data for security checks, startup scoring, and communications. Sensitive data is protected using appropriate technical and organizational safeguards.</p>
          <p className="text-foreground/70">You can request updates or deletion of your personal data by contacting our support team through the Contact page.</p>
        </Card>
      </div>
    </div>
  );
}
