import React from "react";

// Using real anime images from an anime API (mock data - in real app use actual API calls)
const posts = [
  {
    id: 1,
    title: "10 Anime That'll Break Your Brain 🤯",
    date: "2 days ago",
    author: "@SakuraChaan",
    imageUrl: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", // Steins;Gate
    likes: "1.2k",
    tags: ["Mindfuck", "Must Watch"],
  },
  {
    id: 2,
    title: "AOT Didn't Just Raise the Bar—It Yeeted It 🚀",
    date: "1 week ago",
    author: "@ErenYeagerStan",
    imageUrl: "https://cdn.myanimelist.net/images/anime/1000/110531.jpg", // Attack on Titan
    likes: "3.4k",
    tags: ["Dark Fantasy", "GOAT"],
  },
  {
    id: 3,
    title: "Ghibli Movies Hit Different When You're Grown 😭",
    date: "3 weeks ago",
    author: "@TotoroLover",
    imageUrl: "https://cdn.myanimelist.net/images/anime/5/75899.jpg", // Spirited Away
    likes: "2.8k",
    tags: ["Nostalgia", "Art"],
  },
  {
    id: 4,
    title: "Demon Slayer S4 Animation is Illegal 🔥",
    date: "5 days ago",
    author: "@UfotableFanboy",
    imageUrl: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg", // Demon Slayer
    likes: "4.7k",
    tags: ["Animation", "Hype"],
  },
];

const PopularPosts = () => {
  return (
    <div className="bg-[#0f0b1f] py-10 px-4 sm:px-6 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Trending in Anime World
          </h2>
          <button className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center">
            See all <span className="ml-1">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Post Image */}
              <div className="aspect-[3/4] relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Post Content */}
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-pink-900/70 text-pink-200 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold leading-tight mb-1 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">@{post.author}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300">❤️ {post.likes}</span>
                    <span className="text-gray-400 text-xs">• {post.date}</span>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 rounded-xl pointer-events-none transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
