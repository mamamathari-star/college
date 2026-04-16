import Link from "next/link";

const stats = [
  { value: "679", label: "Students", subLabel: "শিক্ষার্থী", icon: "👨‍🎓" },
  { value: "13", label: "Teachers", subLabel: "শিক্ষক", icon: "👨‍🏫" },
  { value: "4", label: "Staff Members", subLabel: "কর্মকর্তা", icon: "👥" },
  { value: "1937", label: "Established", subLabel: "প্রতিষ্ঠিত", icon: "🏛️" },
];

const notices = [
  {
    id: 1,
    date: "15 Apr 2025",
    category: "Exam",
    title: "SSC Examination 2025 – Final Routine Published",
    description: "The final examination routine for SSC 2025 has been published. All students are requested to collect their admit cards from the office.",
  },
  {
    id: 2,
    date: "10 Apr 2025",
    category: "Admission",
    title: "Class XI Admission Notice 2025",
    description: "Applications are now open for Class XI (HSC) admission for the academic year 2025-26. Science, Humanities, and Business Studies available.",
  },
  {
    id: 3,
    date: "05 Apr 2025",
    category: "Holiday",
    title: "Eid-ul-Fitr Vacation Schedule",
    description: "The institution will remain closed from April 28 to May 5, 2025 for Eid-ul-Fitr. Classes will resume on May 6, 2025.",
  },
  {
    id: 4,
    date: "01 Apr 2025",
    category: "Event",
    title: "Annual Sports Day & Prize Giving Ceremony",
    description: "Annual Sports Day will be held on April 25, 2025. Parents and guardians are cordially invited to attend.",
  },
];

const quickLinks = [
  { href: "/admission", icon: "📋", label: "Admission", subLabel: "ভর্তি তথ্য" },
  { href: "/results", icon: "📊", label: "Results", subLabel: "ফলাফল" },
  { href: "/notices", icon: "📢", label: "Notices", subLabel: "নোটিশ বোর্ড" },
  { href: "/teachers", icon: "👨‍🏫", label: "Teachers", subLabel: "শিক্ষকমণ্ডলী" },
  { href: "/certificate", icon: "🎓", label: "Certificate", subLabel: "সনদ যাচাই" },
  { href: "/facilities", icon: "🏫", label: "Facilities", subLabel: "সুযোগ-সুবিধা" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d27] via-[#1a5c3a] to-[#2d7a4f]"></div>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#c9a84c] opacity-5"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#c9a84c] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c9a84c] opacity-5"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c] bg-opacity-20 border border-[#c9a84c] rounded-full px-4 py-1.5 text-[#e4c97e] text-sm mb-6">
            <span>EIIN: 102726</span>
            <span className="w-1 h-1 rounded-full bg-[#c9a84c]"></span>
            <span>Established 1937</span>
            <span className="w-1 h-1 rounded-full bg-[#c9a84c]"></span>
            <span>MPO Enlisted</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Mirukhali School
            <span className="block text-[#c9a84c]">&amp; College</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#e4c97e] mb-2 font-light">
            মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Nurturing minds and shaping futures in Mirukhali, Mathbaria, Pirojpur since 1937.
            A premier co-educational institution committed to excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admission"
              className="bg-[#c9a84c] hover:bg-[#e4c97e] text-[#0f3d27] font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply for Admission
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a5c3a] font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2 bg-white bg-opacity-50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#c9a84c] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#0f3d27]">{stat.value}</div>
                <div className="text-[#0f3d27] font-semibold text-sm">{stat.label}</div>
                <div className="text-[#0f3d27] text-xs opacity-75">{stat.subLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-14 bg-[#f0f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a] mb-2">Quick Access</h2>
            <p className="text-gray-500 text-sm">দ্রুত অ্যাক্সেস</p>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-transparent hover:border-[#c9a84c] transition-all duration-200 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform inline-block">{link.icon}</div>
                <div className="font-semibold text-[#1a5c3a] text-sm">{link.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{link.subLabel}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board Preview */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a] mb-1">Notice Board</h2>
              <p className="text-gray-500 text-sm">নোটিশ বোর্ড</p>
              <div className="w-16 h-1 bg-[#c9a84c] mt-2"></div>
            </div>
            <Link
              href="/notices"
              className="text-[#1a5c3a] border border-[#1a5c3a] hover:bg-[#1a5c3a] hover:text-white px-4 py-2 rounded-lg text-sm transition-colors font-medium"
            >
              View All →
            </Link>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="flex gap-4 p-5 bg-[#f0f9f4] rounded-xl border-l-4 border-[#1a5c3a] hover:shadow-md transition-shadow"
              >
                <div className="text-center min-w-[64px]">
                  <div className="bg-[#1a5c3a] text-white text-xs rounded-t px-2 py-0.5">
                    {notice.date.split(" ").slice(1).join(" ")}
                  </div>
                  <div className="bg-[#c9a84c] text-[#0f3d27] font-bold text-xl rounded-b px-2 py-1 leading-none">
                    {notice.date.split(" ")[0]}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs bg-[#dcf0e5] text-[#1a5c3a] px-2 py-0.5 rounded-full font-medium">
                      {notice.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1a5c3a] mb-1">{notice.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{notice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0f3d27] via-[#1a5c3a] to-[#2d7a4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
            Academic Year 2025–26
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Admissions Now Open
          </h2>
          <p className="text-[#e4c97e] text-lg mb-2">ভর্তি চলছে</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Mirukhali School &amp; College for SSC and HSC programs. We offer Science, Humanities, and Business Studies streams with dedicated faculty and modern facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admission"
              className="bg-[#c9a84c] hover:bg-[#e4c97e] text-[#0f3d27] font-bold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg"
            >
              Apply Now — আবেদন করুন
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f3d27] font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-14 bg-[#f0f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a] mb-4">
                A Legacy of Excellence Since 1937
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Mirukhali School &amp; College is one of the oldest educational institutions in Mathbaria Upazila, Pirojpur District. Founded in 1937, it has been a beacon of education for generations of students from the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a private MPO enlisted co-educational institution, we proudly serve 679 students with 13 dedicated teachers and 4 support staff, offering SSC and HSC programs with a commitment to holistic education.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1a5c3a] font-semibold hover:text-[#c9a84c] transition-colors"
              >
                Read Our Full Story →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏆", title: "Academic Excellence", desc: "Consistently high pass rates in SSC & HSC board exams" },
                { icon: "🌱", title: "Co-education", desc: "Inclusive learning environment for all students" },
                { icon: "📚", title: "MPO Enlisted", desc: "Government recognized private institution" },
                { icon: "🤝", title: "Community Focused", desc: "Serving Mathbaria community since 1937" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-5 rounded-xl shadow-sm border border-[#dcf0e5]">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-[#1a5c3a] text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
