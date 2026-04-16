"use client";
import { useState } from "react";

export default function ResultsPage() {
  const [form, setForm] = useState({ roll: "", year: "2024", exam: "SSC", group: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">ফলাফল</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Examination Results</h1>
          <p className="text-gray-300">Search and view student examination results</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#dcf0e5] overflow-hidden mb-10">
          <div className="bg-[#1a5c3a] px-6 py-4">
            <h2 className="text-white font-bold text-lg">Result Search</h2>
            <p className="text-gray-300 text-sm">ফলাফল অনুসন্ধান করুন</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Exam Type <span className="text-[#c9a84c]">পরীক্ষার ধরন</span>
                </label>
                <select
                  value={form.exam}
                  onChange={(e) => setForm({ ...form, exam: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                >
                  <option value="SSC">SSC (Secondary School Certificate)</option>
                  <option value="HSC">HSC (Higher Secondary Certificate)</option>
                  <option value="Half-Yearly">Half-Yearly Examination</option>
                  <option value="Annual">Annual Examination</option>
                  <option value="Test">Test Examination</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Examination Year <span className="text-[#c9a84c]">পরীক্ষার বছর</span>
                </label>
                <select
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                >
                  {[2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Roll Number <span className="text-[#c9a84c]">রোল নম্বর</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter roll number"
                  value={form.roll}
                  onChange={(e) => setForm({ ...form, roll: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Group <span className="text-[#c9a84c]">বিভাগ</span> <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <select
                  value={form.group}
                  onChange={(e) => setForm({ ...form, group: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                >
                  <option value="">All Groups</option>
                  <option value="Science">Science</option>
                  <option value="Humanities">Humanities</option>
                  <option value="Business">Business Studies</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a5c3a] hover:bg-[#0f3d27] text-white font-semibold py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Search Result — ফলাফল খুঁজুন
            </button>
          </form>
        </div>

        {/* Result Display */}
        {submitted && (
          <div className="bg-white rounded-2xl border border-[#dcf0e5] p-8 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-[#1a5c3a] mb-2">No Result Found</h3>
            <p className="text-gray-500 text-sm mb-4">
              No result found for Roll: <strong>{form.roll}</strong>, {form.exam} {form.year}.
            </p>
            <p className="text-gray-400 text-xs">
              For board exam results (SSC/HSC), please visit{" "}
              <a href="https://www.educationboardresults.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[#1a5c3a] underline">
                educationboardresults.gov.bd
              </a>
            </p>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[
            { icon: "🏫", title: "Internal Results", desc: "Half-yearly and annual exam results are published on this portal." },
            { icon: "🌐", title: "Board Results", desc: "SSC/HSC board results available at educationboardresults.gov.bd" },
            { icon: "📞", title: "Need Help?", desc: "Contact the school office for result-related queries." },
          ].map((item) => (
            <div key={item.title} className="bg-[#f0f9f4] rounded-xl p-5 border border-[#dcf0e5] text-center">
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
