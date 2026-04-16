export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">পরিচিতি</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">About Us</h1>
          <p className="text-gray-300">Learn about our history, mission, and values</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* History */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-center">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Our History</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a5c3a] mb-4">
              Established in 1937
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Mirukhali School &amp; College was founded in 1937 by a group of visionary community leaders who recognized the urgent need for quality education in the Mirukhali area of Mathbaria Upazila, Pirojpur District.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the decades, the institution has grown from a small village school to a full-fledged secondary and higher secondary educational institution, serving students from Mirukhali and the surrounding areas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, with an EIIN of 102726, the institution stands as a pillar of the community, offering SSC and HSC programs with a commitment to academic excellence and character building.
            </p>
          </div>
          <div className="bg-[#f0f9f4] rounded-2xl p-8 border border-[#dcf0e5]">
            <h3 className="font-bold text-[#1a5c3a] text-lg mb-6 border-b border-[#dcf0e5] pb-3">
              Institution at a Glance
            </h3>
            <div className="space-y-4">
              {[
                { label: "Institute Name", value: "Mirukhali School & College" },
                { label: "Bengali Name", value: "মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ" },
                { label: "EIIN", value: "102726" },
                { label: "Established", value: "1937" },
                { label: "Location", value: "Mirukhali, Mathbaria, Pirojpur" },
                { label: "Institution Type", value: "Private MPO Enlisted" },
                { label: "Education Type", value: "Co-education" },
                { label: "Total Students", value: "679" },
                { label: "Total Teachers", value: "13" },
                { label: "Total Staff", value: "4" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm border-b border-[#dcf0e5] pb-2">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-[#1a5c3a] font-semibold text-right max-w-[55%]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              subTitle: "আমাদের লক্ষ্য",
              content: "To provide quality education that empowers students with knowledge, skills, and values needed to become responsible citizens and contribute meaningfully to society and the nation.",
            },
            {
              icon: "🔭",
              title: "Our Vision",
              subTitle: "আমাদের দর্শন",
              content: "To be the leading educational institution in Mathbaria Upazila, fostering a culture of learning, innovation, and excellence that prepares students for the challenges of the 21st century.",
            },
            {
              icon: "💎",
              title: "Our Values",
              subTitle: "আমাদের মূল্যবোধ",
              content: "Integrity, excellence, respect, and community service are the cornerstones of our institution. We believe in nurturing well-rounded individuals who excel academically and ethically.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm border border-[#dcf0e5] hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#1a5c3a] mb-1">{item.title}</h3>
              <p className="text-[#c9a84c] text-sm mb-3">{item.subTitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* MPO Status */}
        <div className="bg-gradient-to-r from-[#1a5c3a] to-[#2d7a4f] rounded-2xl p-8 text-white mb-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold mb-3">MPO Enlisted Institution</h3>
            <p className="text-gray-200 leading-relaxed">
              Mirukhali School &amp; College is enlisted under the Monthly Pay Order (MPO) system of the Government of Bangladesh. This recognition ensures that our teachers receive government salary support, allowing us to attract and retain quality educators dedicated to student success.
            </p>
          </div>
        </div>

        {/* Location */}
        <div>
          <div className="text-center mb-8">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">Location</p>
            <h2 className="text-2xl font-bold text-[#1a5c3a]">Where We Are</h2>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3"></div>
          </div>
          <div className="bg-[#f0f9f4] rounded-2xl p-8 border border-[#dcf0e5] text-center">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-[#1a5c3a] mb-2">Mirukhali, Mathbaria, Pirojpur</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Located in the heart of Mirukhali village, Mathbaria Upazila, Pirojpur District, Bangladesh. Easily accessible from Mathbaria town.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
