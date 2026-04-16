import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f3d27] text-gray-300">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-[#c9a84c] via-[#e4c97e] to-[#c9a84c]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center font-bold text-[#0f3d27] text-lg">
                M
              </div>
              <div>
                <div className="font-bold text-white text-sm">Mirukhali School & College</div>
                <div className="text-[#c9a84c] text-xs">মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              A premier co-educational institution established in 1937, nurturing generations of students in Mathbaria, Pirojpur.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <div>EIIN: <span className="text-[#c9a84c]">102726</span></div>
              <div>Status: <span className="text-green-400">MPO Enlisted</span></div>
              <div>Type: <span className="text-gray-300">Private Co-education</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider border-b border-[#2d7a4f] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/academics", label: "Academics" },
                { href: "/teachers", label: "Our Teachers" },
                { href: "/notices", label: "Notice Board" },
                { href: "/admission", label: "Admission" },
                { href: "/results", label: "Results" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#c9a84c] transition-colors flex items-center gap-1">
                    <span className="text-[#c9a84c] text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider border-b border-[#2d7a4f] pb-2">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/certificate", label: "Certificate Verification" },
                { href: "/committee", label: "School Committee" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/facilities", label: "Facilities" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#c9a84c] transition-colors flex items-center gap-1">
                    <span className="text-[#c9a84c] text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider border-b border-[#2d7a4f] pb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-2">
                <span className="text-[#c9a84c] mt-0.5">📍</span>
                <span>Mirukhali, Mathbaria, Pirojpur, Bangladesh</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#c9a84c]">📞</span>
                <span>+880-XXXX-XXXXXX</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#c9a84c]">✉️</span>
                <span>info@mirukhali.edu.bd</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#c9a84c]">🕐</span>
                <span>Sat–Thu: 8:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a5c3a] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {currentYear} Mirukhali School & College. All rights reserved.</span>
          <span className="text-[#c9a84c]">মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ | প্রতিষ্ঠিত ১৯৩৭</span>
        </div>
      </div>
    </footer>
  );
}
