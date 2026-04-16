"use client";
import { useState } from "react";

export default function CertificatePage() {
  const [form, setForm] = useState({ name: "", roll: "", year: "", type: "SSC" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">সনদ যাচাই</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Certificate Verification</h1>
          <p className="text-gray-300">Verify the authenticity of certificates issued by Mirukhali School &amp; College</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Info Banner */}
        <div className="bg-[#f0f9f4] border border-[#dcf0e5] rounded-xl p-5 mb-8 flex gap-4">
          <div className="text-2xl flex-shrink-0">ℹ️</div>
          <div>
            <h3 className="font-semibold text-[#1a5c3a] mb-1">About Certificate Verification</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This portal allows employers, institutions, and individuals to verify the authenticity of testimonials, character certificates, and participation certificates issued by Mirukhali School &amp; College. For board-issued SSC/HSC certificates, please contact the Barisal Education Board.
            </p>
          </div>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#dcf0e5] overflow-hidden mb-10">
          <div className="bg-[#1a5c3a] px-6 py-4">
            <h2 className="text-white font-bold text-lg">Verify Certificate</h2>
            <p className="text-gray-300 text-sm">সনদপত্র যাচাই করুন</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Certificate Type <span className="text-[#c9a84c]">সনদের ধরন</span>
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                >
                  <option value="SSC">SSC Testimonial</option>
                  <option value="HSC">HSC Testimonial</option>
                  <option value="Character">Character Certificate</option>
                  <option value="Participation">Participation Certificate</option>
                  <option value="TC">Transfer Certificate (TC)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Issue Year <span className="text-[#c9a84c]">প্রদানের বছর</span>
                </label>
                <select
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                >
                  <option value="">Select Year</option>
                  {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Name <span className="text-[#c9a84c]">শিক্ষার্থীর নাম</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name as on certificate"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Roll / Registration No. <span className="text-[#c9a84c]">রোল/রেজিস্ট্রেশন</span>
                </label>
                <input
                  type="text"
                  placeholder="Roll or registration number"
                  value={form.roll}
                  onChange={(e) => setForm({ ...form, roll: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a5c3a] hover:bg-[#0f3d27] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Verify Certificate — সনদ যাচাই করুন
            </button>
          </form>
        </div>

        {submitted && (
          <div className="bg-white rounded-2xl border border-[#dcf0e5] p-8 text-center mb-10">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[#1a5c3a] mb-2">Verification Pending</h3>
            <p className="text-gray-500 text-sm mb-4">
              Your verification request for <strong>{form.name}</strong> has been submitted. Please contact the school office for manual verification.
            </p>
            <p className="text-gray-400 text-xs">Contact: +880-XXXX-XXXXXX | Email: info@mirukhali.edu.bd</p>
          </div>
        )}

        {/* Accepted Certificate Types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "📜", title: "SSC/HSC Testimonials", desc: "Academic testimonials issued after passing SSC or HSC examinations" },
            { icon: "🎖️", title: "Character Certificate", desc: "Official character certificate for employment or higher education" },
            { icon: "📋", title: "Transfer Certificate", desc: "Transfer certificates for students moving to other institutions" },
            { icon: "🏆", title: "Achievement Certificates", desc: "Certificates for academic, sports, and cultural achievements" },
            { icon: "🤝", title: "Participation Certificates", desc: "Certificates for events, competitions, and extracurricular activities" },
            { icon: "📞", title: "Manual Verification", desc: "Contact the school office for certificates not available online" },
          ].map((item) => (
            <div key={item.title} className="bg-[#f0f9f4] rounded-xl p-5 border border-[#dcf0e5]">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-[#1a5c3a] text-sm mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
