export default function AcademicsPage() {
  const programs = [
    {
      level: "Secondary (SSC)",
      bengali: "মাধ্যমিক",
      classes: "Classes IX – X",
      groups: ["Science", "Humanities", "Business Studies"],
      duration: "2 Years",
      exam: "SSC Board Exam",
      board: "Barisal Education Board",
      icon: "📘",
    },
    {
      level: "Higher Secondary (HSC)",
      bengali: "উচ্চ মাধ্যমিক",
      classes: "Classes XI – XII",
      groups: ["Science", "Humanities", "Business Studies"],
      duration: "2 Years",
      exam: "HSC Board Exam",
      board: "Barisal Education Board",
      icon: "📗",
    },
  ];

  const subjects = {
    Science: ["Physics", "Chemistry", "Biology / Higher Mathematics", "Mathematics", "Bengali", "English", "ICT"],
    Humanities: ["Bengali", "English", "History", "Geography", "Economics", "Civics", "Islamic Studies / Social Work"],
    "Business Studies": ["Bengali", "English", "Accounting", "Business Organization", "Economics", "Finance & Banking", "ICT"],
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">শিক্ষা কার্যক্রম</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Academics</h1>
          <p className="text-gray-300">Our academic programs and curriculum</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Programs */}
        <div className="text-center mb-10">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Programs Offered</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a]">Academic Programs</h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {programs.map((prog) => (
            <div key={prog.level} className="bg-white rounded-2xl border border-[#dcf0e5] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#1a5c3a] p-6 text-white">
                <div className="text-4xl mb-2">{prog.icon}</div>
                <h3 className="text-xl font-bold">{prog.level}</h3>
                <p className="text-[#c9a84c]">{prog.bengali}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Classes</p>
                    <p className="font-semibold text-[#1a5c3a]">{prog.classes}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Duration</p>
                    <p className="font-semibold text-[#1a5c3a]">{prog.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Board Exam</p>
                    <p className="font-semibold text-[#1a5c3a]">{prog.exam}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Board</p>
                    <p className="font-semibold text-[#1a5c3a] text-sm">{prog.board}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">Available Groups</p>
                  <div className="flex flex-wrap gap-2">
                    {prog.groups.map((group) => (
                      <span key={group} className="bg-[#f0f9f4] text-[#1a5c3a] border border-[#dcf0e5] text-xs px-3 py-1 rounded-full font-medium">
                        {group}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subjects by Group */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Curriculum</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a]">Subjects by Group</h2>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(subjects).map(([group, subjectList]) => (
              <div key={group} className="bg-white rounded-2xl border border-[#dcf0e5] overflow-hidden">
                <div className="bg-[#c9a84c] px-5 py-3">
                  <h3 className="font-bold text-[#0f3d27]">{group} Group</h3>
                </div>
                <ul className="p-5 space-y-2">
                  {subjectList.map((subject) => (
                    <li key={subject} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c3a] flex-shrink-0"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-[#f0f9f4] rounded-2xl p-8 border border-[#dcf0e5]">
          <div className="text-center mb-6">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Daily Schedule</p>
            <h2 className="text-xl font-bold text-[#1a5c3a]">Class Timing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { period: "Morning Assembly", time: "8:00 AM", duration: "15 min" },
              { period: "Class Hours", time: "8:15 AM – 1:00 PM", duration: "5 hrs" },
              { period: "Lunch Break", time: "1:00 PM – 1:30 PM", duration: "30 min" },
              { period: "Afternoon Session", time: "1:30 PM – 3:00 PM", duration: "1.5 hrs" },
            ].map((item) => (
              <div key={item.period} className="bg-white rounded-xl p-4 text-center border border-[#dcf0e5]">
                <div className="text-2xl mb-2">🕐</div>
                <p className="font-bold text-[#1a5c3a] text-sm">{item.period}</p>
                <p className="text-gray-600 text-sm mt-1">{item.time}</p>
                <p className="text-[#c9a84c] text-xs mt-0.5">{item.duration}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            School Days: Saturday – Thursday | Friday & Public Holidays: Closed
          </p>
        </div>
      </div>
    </>
  );
}
