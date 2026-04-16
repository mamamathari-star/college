const teachers = [
  { id: 1, name: "Md. Abul Kalam Azad", designation: "Principal", subject: "Bengali Literature", experience: "25 years", qualification: "M.A., B.Ed." },
  { id: 2, name: "Md. Rafiqul Islam", designation: "Assistant Headmaster", subject: "Mathematics", experience: "20 years", qualification: "M.Sc., B.Ed." },
  { id: 3, name: "Nasreen Akter", designation: "Senior Teacher", subject: "English", experience: "18 years", qualification: "M.A. (English), B.Ed." },
  { id: 4, name: "Md. Shahidul Islam", designation: "Senior Teacher", subject: "Physics", experience: "16 years", qualification: "M.Sc. (Physics), B.Ed." },
  { id: 5, name: "Fatema Begum", designation: "Senior Teacher", subject: "Chemistry", experience: "15 years", qualification: "M.Sc. (Chemistry)" },
  { id: 6, name: "Md. Kamal Hossain", designation: "Teacher", subject: "Biology", experience: "12 years", qualification: "M.Sc. (Biology)" },
  { id: 7, name: "Md. Rezaul Karim", designation: "Teacher", subject: "ICT", experience: "10 years", qualification: "B.Sc. (CSE), M.Sc." },
  { id: 8, name: "Sanjida Khatun", designation: "Teacher", subject: "History & Social Science", experience: "14 years", qualification: "M.A. (History), B.Ed." },
  { id: 9, name: "Md. Nurul Islam", designation: "Teacher", subject: "Islamic Studies", experience: "13 years", qualification: "M.A. (Islamic Studies)" },
  { id: 10, name: "Rina Begum", designation: "Teacher", subject: "Accounting", experience: "11 years", qualification: "M.Com., B.Ed." },
  { id: 11, name: "Md. Alamgir Hossain", designation: "Teacher", subject: "Economics", experience: "9 years", qualification: "M.A. (Economics)" },
  { id: 12, name: "Tahmina Parvin", designation: "Teacher", subject: "Geography", experience: "8 years", qualification: "M.A. (Geography)" },
  { id: 13, name: "Md. Saiful Islam", designation: "Teacher", subject: "Physical Education", experience: "7 years", qualification: "B.P.Ed." },
];

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const colors = [
  "bg-[#1a5c3a]", "bg-[#0f3d27]", "bg-[#2d7a4f]", "bg-[#c9a84c]", "bg-[#a07c30]",
];

export default function TeachersPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">শিক্ষকমণ্ডলী</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Our Teachers</h1>
          <p className="text-gray-300">Meet our dedicated faculty of {teachers.length} educators</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Faculty</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a]">Dedicated Educators</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Our team of {teachers.length} qualified and experienced teachers is committed to providing quality education and mentoring students to reach their full potential.
          </p>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((teacher, idx) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#dcf0e5] hover:shadow-lg transition-all duration-200 group"
            >
              {/* Avatar */}
              <div className={`${colors[idx % colors.length]} p-6 flex justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white font-bold text-2xl border-2 border-white border-opacity-40">
                  {initials(teacher.name)}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-[#1a5c3a] text-base mb-0.5 group-hover:text-[#2d7a4f] transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-[#c9a84c] text-sm font-medium mb-1">{teacher.designation}</p>
                <p className="text-gray-500 text-sm mb-3">{teacher.subject}</p>
                <div className="space-y-1 pt-3 border-t border-[#f0f9f4]">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Experience</span>
                    <span className="text-[#1a5c3a] font-semibold">{teacher.experience}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Qualification</span>
                    <span className="text-[#1a5c3a] font-semibold text-right">{teacher.qualification}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
