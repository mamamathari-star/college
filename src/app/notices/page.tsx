const notices = [
  { id: 1, date: "15 Apr 2025", category: "Exam", priority: "high", title: "SSC Examination 2025 – Final Routine Published", description: "The final examination routine for SSC 2025 has been published by the Barisal Education Board. All students appearing in SSC 2025 are requested to collect their admit cards from the office by April 20, 2025. Bring your school ID and recent passport-sized photograph.", attachments: true },
  { id: 2, date: "10 Apr 2025", category: "Admission", priority: "high", title: "Class XI Admission Notice 2025–26", description: "Applications are now open for Class XI (HSC) admission for the academic year 2025-26. Available groups: Science, Humanities, and Business Studies. Eligible SSC 2025 passers with minimum GPA 3.00 may apply. Application forms available at the school office.", attachments: false },
  { id: 3, date: "05 Apr 2025", category: "Holiday", priority: "normal", title: "Eid-ul-Fitr Vacation Schedule 2025", description: "The institution will remain closed from April 28 to May 5, 2025 for Eid-ul-Fitr celebrations. Regular classes will resume on May 6, 2025. All scheduled tests and assignments due during this period are postponed to May 7–8.", attachments: false },
  { id: 4, date: "01 Apr 2025", category: "Event", priority: "normal", title: "Annual Sports Day & Prize Giving Ceremony", description: "Annual Sports Day will be held on April 25, 2025. Students interested in participating in athletic events should register with their class teachers by April 18. Parents and guardians are cordially invited to attend the Prize Giving Ceremony in the afternoon.", attachments: true },
  { id: 5, date: "25 Mar 2025", category: "Exam", priority: "high", title: "Half-Yearly Examination 2025 – Schedule Released", description: "The Half-Yearly Examination for classes IX–XII will be held from May 15–30, 2025. Detailed schedules have been posted on the school notice board. Students should prepare according to the syllabus provided by their subject teachers.", attachments: true },
  { id: 6, date: "20 Mar 2025", category: "Academic", priority: "normal", title: "New Textbooks Available – Class XI (2025)", description: "New NCTB textbooks for Class XI (2025 edition) are now available at the school store. Students must collect their books within one week. Required books: Bengali, English, and group-specific subjects.", attachments: false },
  { id: 7, date: "15 Mar 2025", category: "Meeting", priority: "normal", title: "Parent-Teacher Meeting – March 2025", description: "A Parent-Teacher Meeting will be held on March 29, 2025 (Saturday) from 10:00 AM to 1:00 PM. All parents and guardians are requested to attend to discuss their children's academic progress.", attachments: false },
  { id: 8, date: "10 Mar 2025", category: "Scholarship", priority: "high", title: "Government Scholarship Application – 2025", description: "Applications for the Government General Scholarship (Talentpool and General) for JSC/SSC 2024 result holders are now open. Eligible students should collect application forms from the office. Deadline: March 25, 2025.", attachments: true },
];

const categoryColors: Record<string, string> = {
  Exam: "bg-red-100 text-red-700",
  Admission: "bg-blue-100 text-blue-700",
  Holiday: "bg-yellow-100 text-yellow-700",
  Event: "bg-purple-100 text-purple-700",
  Academic: "bg-green-100 text-green-700",
  Meeting: "bg-orange-100 text-orange-700",
  Scholarship: "bg-indigo-100 text-indigo-700",
};

export default function NoticesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">নোটিশ বোর্ড</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Notice Board</h1>
          <p className="text-gray-300">Latest announcements, circulars, and notices</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Exam", "Admission", "Holiday", "Event", "Academic", "Scholarship"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-[#1a5c3a] text-white" : "bg-[#f0f9f4] text-[#1a5c3a] hover:bg-[#dcf0e5]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`flex gap-4 p-5 rounded-xl border-l-4 hover:shadow-md transition-shadow bg-white ${notice.priority === "high" ? "border-[#c9a84c]" : "border-[#1a5c3a]"}`}
            >
              {/* Date badge */}
              <div className="text-center min-w-[56px] flex-shrink-0">
                <div className="bg-[#1a5c3a] text-white text-[10px] rounded-t px-1.5 py-0.5 leading-tight">
                  {notice.date.split(" ").slice(1).join(" ")}
                </div>
                <div className="bg-[#c9a84c] text-[#0f3d27] font-bold text-2xl rounded-b px-1.5 py-1 leading-none">
                  {notice.date.split(" ")[0]}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${categoryColors[notice.category] || "bg-gray-100 text-gray-600"}`}>
                    {notice.category}
                  </span>
                  {notice.priority === "high" && (
                    <span className="text-xs bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full font-medium">
                      Important
                    </span>
                  )}
                  {notice.attachments && (
                    <span className="text-xs bg-[#f0f9f4] text-[#1a5c3a] px-2 py-0.5 rounded-full">
                      📎 Attachment
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[#1a5c3a] mb-1.5">{notice.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{notice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
