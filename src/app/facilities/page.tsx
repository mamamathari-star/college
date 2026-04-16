const facilities = [
  {
    icon: "📚",
    title: "Library",
    subTitle: "পাঠাগার",
    description: "A well-stocked library with over 3,000 books covering academic subjects, reference materials, and general knowledge. Open to all students and teachers.",
    details: ["3,000+ books", "Reading room", "Reference section", "Newspaper & periodicals"],
  },
  {
    icon: "🔬",
    title: "Science Laboratory",
    subTitle: "বিজ্ঞান ল্যাবরেটরি",
    description: "Fully equipped laboratories for Physics, Chemistry, and Biology practical classes with modern apparatus and safety equipment.",
    details: ["Physics lab", "Chemistry lab", "Biology lab", "Safety equipment"],
  },
  {
    icon: "💻",
    title: "Computer Laboratory",
    subTitle: "কম্পিউটার ল্যাব",
    description: "A modern computer lab with internet-connected workstations for ICT classes and digital learning activities.",
    details: ["20+ computers", "Internet connectivity", "Printer & scanner", "Software for education"],
  },
  {
    icon: "🏃",
    title: "Sports Ground",
    subTitle: "খেলার মাঠ",
    description: "A large sports ground for cricket, football, athletics, and other physical activities. Home to annual sports events.",
    details: ["Cricket ground", "Football field", "Athletics track", "Indoor games room"],
  },
  {
    icon: "🏛️",
    title: "Assembly Hall",
    subTitle: "সমাবেশ হল",
    description: "A spacious assembly hall used for morning assembly, cultural programs, prize-giving ceremonies, and special events.",
    details: ["Capacity: 500+", "Stage & podium", "Sound system", "Seating arrangement"],
  },
  {
    icon: "🕌",
    title: "Mosque",
    subTitle: "মসজিদ",
    description: "An on-campus mosque for students and staff to offer prayers during school hours, fostering spiritual development.",
    details: ["Prayer hall", "Wudu area", "Friday prayers", "Islamic education support"],
  },
  {
    icon: "🚰",
    title: "Clean Water & Sanitation",
    subTitle: "বিশুদ্ধ পানি ও স্যানিটেশন",
    description: "Safe drinking water facilities and clean, separate sanitation blocks for male and female students and staff.",
    details: ["Tube wells", "Separate washrooms", "Regular cleaning", "Hygiene awareness"],
  },
  {
    icon: "🏥",
    title: "First Aid",
    subTitle: "প্রাথমিক চিকিৎসা",
    description: "First aid facilities available at the school office for minor injuries and health emergencies during school hours.",
    details: ["First aid kit", "Trained staff", "Emergency contacts", "Health awareness"],
  },
  {
    icon: "🌳",
    title: "Green Campus",
    subTitle: "সবুজ ক্যাম্পাস",
    description: "A lush green campus with trees and gardens providing a pleasant and conducive learning environment for students.",
    details: ["Tree plantation", "Garden areas", "Clean environment", "Eco-friendly practices"],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">সুযোগ-সুবিধা</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Facilities</h1>
          <p className="text-gray-300">Infrastructure and amenities at Mirukhali School &amp; College</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Infrastructure</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a]">Our Facilities</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            We provide a comprehensive range of facilities to ensure a conducive learning environment for our students.
          </p>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="bg-white rounded-2xl border border-[#dcf0e5] overflow-hidden hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-[#f0f9f4] p-6 flex items-center gap-4 border-b border-[#dcf0e5]">
                <div className="text-4xl group-hover:scale-110 transition-transform">{facility.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1a5c3a] text-lg">{facility.title}</h3>
                  <p className="text-[#c9a84c] text-sm">{facility.subTitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{facility.description}</p>
                <ul className="grid grid-cols-2 gap-1">
                  {facility.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c3a] flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14 bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] rounded-2xl p-10 text-center text-white">
          <div className="text-4xl mb-4">🌟</div>
          <h2 className="text-2xl font-bold mb-3">Experience Our Campus</h2>
          <p className="text-gray-200 mb-6 max-w-lg mx-auto text-sm">
            Interested in seeing our facilities? We welcome campus visits for prospective students and their families. Schedule a visit today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c9a84c] hover:bg-[#e4c97e] text-[#0f3d27] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </>
  );
}
