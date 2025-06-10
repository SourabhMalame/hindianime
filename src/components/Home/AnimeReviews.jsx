import React, { useState } from "react";

const AnimeReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Demon Slayer: Swordsmith Village Arc",
      rating: 4.8,
      review:
        "Ufotable's animation is just illegal 🔥 The fights had me holding my breath the whole time!",
      tags: ["Animation GOAT", "Hype AF"],
      cover: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
      user: {
        name: "@TanjiroSimp",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Tanjiro",
      },
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Attack on Titan: Final Season",
      rating: 4.9,
      review:
        "That ending had me crying for 3 business days 😭 No anime will ever hit like this again",
      tags: ["Masterpiece", "Emotional Damage"],
      cover: "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
      user: {
        name: "@ErenDidNothingWrong",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Eren",
      },
      date: "1 week ago",
    },
    {
      id: 3,
      title: "Chainsaw Man",
      rating: 4.7,
      review:
        "Makima is terrifying but I can fix her 🥵 The EDs are absolute bangers too",
      tags: ["Unhinged", "Cinematic"],
      cover: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
      user: {
        name: "@PochitaEnjoyer",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Pochita",
      },
      date: "3 days ago",
    },
    {
      id: 4,
      title: "Jujutsu Kaisen: Shibuya Incident",
      rating: 4.9,
      review:
        "Gojo's unsealing had me screaming at 3AM!!! The animation budget is insane",
      tags: ["Peak Fiction", "Hype"],
      cover: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
      user: {
        name: "@DomainExpansion",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Gojo",
      },
      date: "5 days ago",
    },
  ]);

  const [expandedReview, setExpandedReview] = useState(null);

  const toggleReview = (id) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto p-6 bg-[#0f0b1f]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center">
          Anime Reviews
        </h2>
        <button className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center group">
          View all
          <span className="ml-1 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((anime) => (
          <div
            key={anime.id}
            className={`bg-[#1a1625] rounded-xl border border-[#2a2440] hover:border-pink-500/40 transition-all overflow-hidden shadow-sm ${
              expandedReview === anime.id ? "ring-2 ring-pink-500/80" : ""
            }`}
          >
            {/* Anime Cover */}
            <div className="relative h-48">
              <img
                src={anime.cover}
                alt={anime.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f0b1f] to-transparent" />
              <div className="absolute top-3 right-3 bg-black/80 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold flex items-center backdrop-blur-sm">
                <span>★</span>
                <span className="ml-1">{anime.rating}</span>
              </div>
            </div>

            {/* Review Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg text-white line-clamp-1 mb-1">
                {anime.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 my-3">
                {anime.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-pink-500/10 text-pink-300 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p
                className={`text-gray-300 mb-4 text-sm leading-relaxed ${
                  expandedReview === anime.id ? "" : "line-clamp-3"
                } cursor-pointer`}
                onClick={() => toggleReview(anime.id)}
              >
                {anime.review}
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between pt-3 border-t border-[#2a2440]">
                <div className="flex items-center">
                  <img
                    src={anime.user.avatar}
                    alt={anime.user.name}
                    className="w-8 h-8 rounded-full mr-3 border border-[#2a2440]"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {anime.user.name}
                    </p>
                    <p className="text-xs text-gray-400">{anime.date}</p>
                  </div>
                </div>
                <button className="text-pink-400 hover:text-pink-300 text-sm flex items-center">
                  <span className="mr-1">❤️</span>
                  <span>42</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Button */}
      <button className="w-full mt-8 py-4 bg-[#1a1625] border-2 border-dashed border-[#2a2440] hover:border-pink-500/40 rounded-xl text-gray-400 hover:text-white transition-all flex items-center justify-center group">
        <span className="mr-2 text-lg group-hover:text-pink-400 transition-colors">
          +
        </span>
        <span className="font-medium">Add Your Review</span>
      </button>
    </section>
  );
};

export default AnimeReviews;
