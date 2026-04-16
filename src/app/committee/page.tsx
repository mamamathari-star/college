const committeeMembers = [
  { id: 1, name: "Md. Abdul Halim", position: "President", designation: "Managing Committee President", role: "Governing Body", type: "President" },
  { id: 2, name: "Md. Abul Kalam Azad", position: "Secretary (Ex-Officio)", designation: "Principal", role: "Academic Head", type: "Secretary" },
  { id: 3, name: "Md. Sirajul Islam", position: "Vice-President", designation: "Local Elected Member", role: "Governing Body", type: "Member" },
  { id: 4, name: "Nasreen Begum", position: "Member", designation: "Guardian Representative", role: "Parent Representative", type: "Member" },
  { id: 5, name: "Md. Rafiqul Haque", position: "Member", designation: "Local Educationist", role: "Educationist", type: "Member" },
  { id: 6, name: "Md. Jahangir Alam", position: "Member", designation: "Teacher Representative", role: "Teacher's Representative", type: "Member" },
  { id: 7, name: "Fatema Khanam", position: "Member", designation: "Teacher Representative", role: "Teacher's Representative", type: "Member" },
  { id: 8, name: "Md. Kabirul Islam", position: "Member", designation: "Local Representative", role: "Community Representative", type: "Member" },
  { id: 9, name: "Md. Shamsul Huda", position: "Member", designation: "Donor Representative", role: "Donor Representative", type: "Member" },
  { id: 10, name: "Rina Akter", position: "Member", designation: "Guardian Representative", role: "Parent Representative", type: "Member" },
  { id: 11, name: "Md. Delwar Hossain", position: "Member", designation: "Local Representative", role: "Community Representative", type: "Member" },
];

export default function CommitteePage() {
  const president = committeeMembers.find((m) => m.type === "President");
  const secretary = committeeMembers.find((m) => m.type === "Secretary");
  const members = committeeMembers.filter((m) => m.type === "Member");

  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">পরিচালনা কমিটি</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">School Management Committee</h1>
          <p className="text-gray-300">The governing body overseeing the administration of Mirukhali School &amp; College</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* President & Secretary */}
        <div className="text-center mb-10">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Leadership</p>
          <h2 className="text-2xl font-bold text-[#1a5c3a]">Committee Leadership</h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
          {[president, secretary].filter(Boolean).map((member) => member && (
            <div key={member.id} className="bg-gradient-to-b from-[#1a5c3a] to-[#0f3d27] rounded-2xl p-8 text-center text-white shadow-lg">
              <div className="w-20 h-20 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0f3d27] font-bold text-2xl mx-auto mb-4">
                {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-[#c9a84c] font-semibold text-sm mb-1">{member.position}</p>
              <p className="text-gray-300 text-sm">{member.designation}</p>
            </div>
          ))}
        </div>

        {/* Members */}
        <div className="text-center mb-10">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Members</p>
          <h2 className="text-2xl font-bold text-[#1a5c3a]">Committee Members</h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {members.map((member, idx) => (
            <div key={member.id} className="bg-white rounded-xl border border-[#dcf0e5] p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f9f4] border-2 border-[#dcf0e5] flex items-center justify-center text-[#1a5c3a] font-bold flex-shrink-0">
                {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs bg-[#f0f9f4] text-[#1a5c3a] px-2 py-0.5 rounded-full font-medium">
                    Member {idx + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-[#1a5c3a] text-sm">{member.name}</h3>
                <p className="text-gray-500 text-xs">{member.designation}</p>
                <p className="text-[#c9a84c] text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Committee Info */}
        <div className="bg-[#f0f9f4] rounded-2xl p-8 border border-[#dcf0e5]">
          <h2 className="text-xl font-bold text-[#1a5c3a] mb-6 text-center">About the Managing Committee</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#1a5c3a] mb-3">Roles & Responsibilities</h3>
              <ul className="space-y-2">
                {[
                  "Overseeing the overall administration of the institution",
                  "Approving annual budget and financial plans",
                  "Ensuring quality education and academic standards",
                  "Approving appointments and promotions of staff",
                  "Monitoring infrastructure development",
                  "Maintaining transparency and accountability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#c9a84c] mt-1 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a5c3a] mb-3">Committee Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Total Members", value: `${committeeMembers.length} Members` },
                  { label: "Term Duration", value: "3 Years" },
                  { label: "Governing Body", value: "Under BSEB Guidelines" },
                  { label: "Meeting Frequency", value: "Monthly" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm border-b border-[#dcf0e5] pb-2">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="text-[#1a5c3a] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
