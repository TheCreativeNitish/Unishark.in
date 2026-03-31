import { Link } from "react-router";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-4 inline-flex">
              <BrandLogo nameClassName="text-xl font-bold text-white" />
            </Link>
            <p className="text-white/70 mb-4 max-w-md">
              Where student startups become real companies. Connecting verified founders with early-stage investors through structured mentorship.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@unishark.in" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/#for-students" className="text-white/70 hover:text-white transition-colors">For Students</Link></li>
              <li><Link to="/#for-investors" className="text-white/70 hover:text-white transition-colors">For Investors</Link></li>
              <li><Link to="/#trust" className="text-white/70 hover:text-white transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2026 UniShark (Unishark.in). All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Made with ❤️ for student entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
}
