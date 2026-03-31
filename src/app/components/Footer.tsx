import { Link } from "react-router";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link to="/" className="mb-3 sm:mb-4 inline-flex">
              <BrandLogo nameClassName="text-lg sm:text-xl font-bold text-white" />
            </Link>
            <p className="text-xs xs:text-sm sm:text-base text-white/70 mb-4 max-w-md leading-relaxed">
              Where student startups become real companies. Connecting verified founders with early-stage investors through structured mentorship.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="mailto:hello@unishark.in" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/#how-it-works" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/#for-students" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">For Students</Link></li>
              <li><Link to="/#for-investors" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">For Investors</Link></li>
              <li><Link to="/#trust" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/about" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col xs:flex-row gap-3 sm:gap-4 items-center xs:items-start justify-center xs:justify-between text-center xs:text-left">
          <p className="text-white/60 text-xs xs:text-sm">
            © 2026 UniShark (Unishark.in). All rights reserved.
          </p>
          <p className="text-white/60 text-xs xs:text-sm">
            Made with ❤️ for student entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
}
