const galleryItems = [
  { id: 1, title: "School Building – Main Campus", category: "Campus", color: "from-[#1a5c3a] to-[#2d7a4f]", icon: "🏫" },
  { id: 2, title: "Annual Sports Day 2024", category: "Events", color: "from-[#0f3d27] to-[#1a5c3a]", icon: "🏃" },
  { id: 3, title: "Science Laboratory", category: "Facilities", color: "from-[#c9a84c] to-[#a07c30]", icon: "🔬" },
  { id: 4, title: "School Library", category: "Facilities", color: "from-[#2d7a4f] to-[#1a5c3a]", icon: "📚" },
  { id: 5, title: "Prize Giving Ceremony 2024", category: "Events", color: "from-[#1a5c3a] to-[#0f3d27]", icon: "🏆" },
  { id: 6, title: "SSC Result Celebration", category: "Academic", color: "from-[#a07c30] to-[#c9a84c]", icon: "🎓" },
  { id: 7, title: "National Day Celebration", category: "Events", color: "from-[#0f3d27] to-[#2d7a4f]", icon: "🇧🇩" },
  { id: 8, title: "Computer Lab", category: "Facilities", color: "from-[#2d7a4f] to-[#0f3d27]", icon: "💻" },
  { id: 9, title: "School Assembly Ground", category: "Campus", color: "from-[#c9a84c] to-[#e4c97e]", icon: "🌳" },
  { id: 10, title: "Cultural Program 2024", category: "Events", color: "from-[#1a5c3a] to-[#c9a84c]", icon: "🎭" },
  { id: 11, title: "Classroom – Modern Setup", category: "Campus", color: "from-[#0f3d27] to-[#1a5c3a]", icon: "🖊️" },
  { id: 12, title: "Teachers Day Celebration", category: "Events", color: "from-[#c9a84c] to-[#1a5c3a]", icon: "🌹" },
];

const categories = ["All", "Campus", "Facilities", "Events", "Academic"];

export default function GalleryPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f3d27] to-[#1a5c3a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-2">ফটো গ্যালারি</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Photo Gallery</h1>
          <p className="text-gray-300">Moments from Mirukhali School &amp; College</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-[#1a5c3a] text-white" : "bg-[#f0f9f4] text-[#1a5c3a] hover:bg-[#dcf0e5]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${item.color} aspect-square flex flex-col items-center justify-center p-4`}>
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-white text-center">
                  <div className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full mb-2 inline-block">
                    {item.category}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
              <div className="p-3 bg-white">
                <p className="text-[#1a5c3a] text-xs font-semibold truncate">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice about Photos */}
        <div className="mt-12 bg-[#f0f9f4] rounded-2xl p-6 border border-[#dcf0e5] text-center">
          <div className="text-3xl mb-3">📸</div>
          <h3 className="font-semibold text-[#1a5c3a] mb-2">Photo Archive</h3>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            This gallery showcases various events, facilities, and moments from Mirukhali School &amp; College. To contribute photos or for high-resolution images, please contact the school office.
          </p>
        </div>
      </div>
    </>
  );
}
