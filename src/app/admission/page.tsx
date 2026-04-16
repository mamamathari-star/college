import Link from "next/link";

const requirements = [
  { class: "Class IX (SSC)", criteria: "JSC/JDC pass with minimum GPA 3.00", documents: ["JSC/JDC Certificate & Marksheet", "Birth Certificate", "2 Passport Photos", "Previous School TC"], fee: "৳500" },
  { class: "Class XI (HSC – Science)", criteria: "SSC pass with GPA 4.00+ (Science)", documents: ["SSC Certificate & Marksheet", "Birth Certificate", "2 Passport Photos", "SSC Admit Card"], fee: "৳600" },
  { class: "Class XI (HSC – Humanities)", criteria: "SSC pass with minimum GPA 3.00", documents: ["SSC Certificate & Marksheet", "Birth Certificate", "2 Passport Photos", "SSC Admit Card"], fee: "৳600" },
  { class: "Class XI (HSC – Business)", criteria: "SSC pass with minimum GPA 3.00 (any group)", documents: ["SSC Certificate & Marksheet", "Birth Certificate", "2 Passport Photos", "SSC Admit Card"], fee: "৳600" },
];

const steps = [
  { step: "01", title: "Collect Form", desc: "Visit the school office or download the form from our website. Fill in all required fields accurately." },
  { step: "02", title: "Submit Documents", desc: "Attach required documents with the application form and submit to the school office." },
  { step: "03", title: "Pay Fee", desc: "Pay the application fee at the school cashier. Keep the receipt for your records." },
  { step: "04", title: "Merit List", desc: "Wait for the merit list to be published. Successful candidates will be notified." },
  { step: "05", title: "Enrollment", desc: "Successful applicants must complete enrollment by paying tuition fees and completing registration." },
];

export default function AdmissionPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">ভর্তি তথ্য</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Admission</h1>
          <p className="text-gray-300">Join Mirukhali School &amp; College – Academic Year 2025–26</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* CTA Banner */}
        <div className="bg-[#c9a84c] rounded-2xl p-8 mb-14 text-center">
          <div className="text-4xl mb-3">🎓</div>
          <h2 className="text-2xl font-bold text-[#0f3d27] mb-2">Admissions Open – 2025-26</h2>
          <p className="text-[#0f3d27] mb-4 max-w-xl mx-auto">
            Applications are now being accepted for Class IX and Class XI for the upcoming academic year. Limited seats available.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0f3d27] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1a5c3a] transition-colors"
          >
            Contact for Admission
          </Link>
        </div>

        {/* Admission Process */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Process</p>
            <h2 className="text-2xl font-bold text-[#1a5c3a]">Admission Process</h2>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s, idx) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-2xl p-5 border border-[#dcf0e5] text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-[#1a5c3a] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-[#1a5c3a] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#c9a84c] z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements by Class */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Eligibility</p>
            <h2 className="text-2xl font-bold text-[#1a5c3a]">Requirements by Class</h2>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req) => (
              <div key={req.class} className="bg-white rounded-2xl border border-[#dcf0e5] overflow-hidden">
                <div className="bg-[#1a5c3a] px-5 py-3 flex justify-between items-center">
                  <h3 className="font-bold text-white">{req.class}</h3>
                  <span className="bg-[#c9a84c] text-[#0f3d27] text-xs font-bold px-3 py-1 rounded-full">
                    Fee: {req.fee}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 mb-3 bg-[#f0f9f4] px-3 py-2 rounded-lg">
                    <strong className="text-[#1a5c3a]">Eligibility:</strong> {req.criteria}
                  </p>
                  <p className="text-xs font-semibold text-gray-500 mb-2">Required Documents:</p>
                  <ul className="space-y-1">
                    {req.documents.map((doc) => (
                      <li key={doc} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0"></span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-[#f0f9f4] rounded-2xl p-8 border border-[#dcf0e5]">
          <h2 className="text-xl font-bold text-[#1a5c3a] mb-6 text-center">Important Dates – 2025</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { event: "Form Distribution", date: "April 1 – 15, 2025" },
              { event: "Form Submission", date: "April 16 – 30, 2025" },
              { event: "Merit List Publication", date: "May 5, 2025" },
              { event: "Enrollment Deadline", date: "May 10, 2025" },
            ].map((item) => (
              <div key={item.event} className="bg-white rounded-xl p-4 text-center border border-[#dcf0e5]">
                <div className="text-2xl mb-2">📅</div>
                <p className="font-semibold text-[#1a5c3a] text-sm">{item.event}</p>
                <p className="text-[#c9a84c] text-sm font-medium mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
