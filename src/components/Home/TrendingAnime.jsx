import React from "react";

const TrendingAnime = () => {
  // Mock data
  const trendingAnime = [
    {
      id: 1,
      title: "Jujutsu Kaisen",
      image:
        "https://via.placeholder.com/300x450/4a3a6a/ffffff?text=Jujutsu+Kaisen",
      rating: 4.9,
      episodes: 24,
      season: "Fall 2023",
      type: "TV",
    },
    {
      id: 2,
      title: "Demon Slayer: Kimetsu no Yaiba",
      image:
        "https://via.placeholder.com/300x450/4a3a6a/ffffff?text=Demon+Slayer",
      rating: 4.8,
      episodes: 26,
      season: "Spring 2023",
      type: "TV",
    },
    {
      id: 3,
      title: "Attack on Titan Final Season",
      image:
        "https://via.placeholder.com/300x450/4a3a6a/ffffff?text=Attack+on+Titan",
      rating: 4.95,
      episodes: 16,
      season: "Winter 2023",
      type: "TV",
    },
    {
      id: 4,
      title: "Chainsaw Man",
      image:
        "https://via.placeholder.com/300x450/4a3a6a/ffffff?text=Chainsaw+Man",
      rating: 4.7,
      episodes: 12,
      season: "Fall 2022",
      type: "TV",
    },
    {
      id: 5,
      title: "Spy x Family Part 2",
      image:
        "https://via.placeholder.com/300x450/4a3a6a/ffffff?text=Spy+x+Family",
      rating: 4.6,
      episodes: 25,
      season: "Spring 2023",
      type: "TV",
    },
    {
      id: 6,
      title: "My Hero Academia Season 6",
      image:
        "https://via.placeholder.com/300x450/4a3a6a/ffffff?text=My+Hero+Academia",
      rating: 4.5,
      episodes: 24,
      season: "Winter 2023",
      type: "TV",
    },
  ];

  return (
    <div className="bg-[#0f0b1f] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-pink-500">Trending Anime</span>
          </h2>
          <button className="px-5 py-2.5 bg-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {trendingAnime.map((anime) => (
            <div key={anime.id} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col border border-[#1e143f] bg-[#1a1238] hover:bg-[#23194a]">
                <div className="relative pt-[140%]">
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0f0b1f]/90 text-purple-300 px-2 py-1 rounded-md text-xs font-semibold backdrop-blur-sm">
                    {anime.type}
                  </div>
                  <div className="absolute top-3 right-3 bg-yellow-400/90 text-[#0f0b1f] px-2.5 py-1 rounded-full text-xs font-bold flex items-center backdrop-blur-sm">
                    ⭐ {anime.rating}
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-semibold text-white mb-2 line-clamp-2 leading-tight">
                    {anime.title}
                  </h3>
                  <div className="mt-auto flex justify-between text-xs">
                    <span className="text-purple-300">
                      {anime.episodes} eps
                    </span>
                    <span className="text-gray-400">{anime.season}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAnime;
