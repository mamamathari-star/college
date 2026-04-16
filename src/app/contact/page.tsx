"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">যোগাযোগ</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-gray-300">Get in touch with Mirukhali School &amp; College</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-2xl font-bold text-[#1a5c3a] mb-6">Contact Information</h2>

            <div className="space-y-5 mb-8">
              {[
                { icon: "📍", label: "Address", value: "Mirukhali, Mathbaria Upazila, Pirojpur District, Barisal Division, Bangladesh" },
                { icon: "📞", label: "Phone", value: "+880-XXXX-XXXXXX (Office)" },
                { icon: "✉️", label: "Email", value: "info@mirukhali.edu.bd" },
                { icon: "🕐", label: "Office Hours", value: "Saturday – Thursday: 8:00 AM – 4:00 PM" },
                { icon: "🏛️", label: "EIIN", value: "102726" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-[#1a5c3a] text-sm">{item.label}</p>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#f0f9f4] rounded-2xl border border-[#dcf0e5] overflow-hidden">
              <div className="bg-[#1a5c3a] px-4 py-2">
                <p className="text-white text-sm font-medium flex items-center gap-2">
                  <span>📍</span> Location Map
                </p>
              </div>
              <div className="h-64 bg-gradient-to-br from-[#f0f9f4] to-[#dcf0e5] flex flex-col items-center justify-center p-6 text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="font-semibold text-[#1a5c3a] mb-1">Mirukhali, Mathbaria, Pirojpur</p>
                <p className="text-gray-500 text-sm">Barisal Division, Bangladesh</p>
                <p className="text-gray-400 text-xs mt-3">
                  GPS coordinates available upon request
                </p>
                <a
                  href="https://maps.google.com/?q=Mirukhali,Mathbaria,Pirojpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs text-[#1a5c3a] underline hover:text-[#c9a84c] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Message</p>
            <h2 className="text-2xl font-bold text-[#1a5c3a] mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-[#f0f9f4] rounded-2xl border border-[#dcf0e5] p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#1a5c3a] mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Thank you, <strong>{form.name}</strong>. We have received your message and will get back to you within 2–3 working days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="text-[#1a5c3a] border border-[#1a5c3a] px-6 py-2 rounded-lg text-sm hover:bg-[#1a5c3a] hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#dcf0e5] p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a]"
                  >
                    <option value="">Select a subject</option>
                    <option value="Admission">Admission Inquiry</option>
                    <option value="Result">Result Query</option>
                    <option value="Certificate">Certificate Request</option>
                    <option value="General">General Inquiry</option>
                    <option value="Complaint">Complaint / Feedback</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c3a] focus:ring-1 focus:ring-[#1a5c3a] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] hover:bg-[#0f3d27] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message — বার্তা পাঠান
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
