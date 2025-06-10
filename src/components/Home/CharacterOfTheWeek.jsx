import React, { useState } from "react";

const CharacterOfTheWeek = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1248);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-[#0f0b1f] shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <span className="mr-2 text-yellow-400">🌟</span> Character of the Week
        </h2>
        <button className="text-sm bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 px-4 py-1.5 transition-all flex items-center group">
          View All
          <span className="ml-1 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>

      <div className="relative group bg-[#1a1625] p-6 border border-[#2a2440] hover:border-pink-500/30 transition-all">
        {/* Character Info */}
        <div className="flex items-start gap-6">
          <div className="relative shrink-0">
            <img
              src="https://cdn.myanimelist.net/images/characters/10/507287.jpg"
              alt="Gojo Satoru"
              className="w-24 h-24 object-cover border-4 border-pink-500/80 hover:border-pink-400 transition-all"
            />
            <span className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-3 py-0.5">
              #1
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Gojo Satoru
                </h3>
                <p className="text-sm text-gray-400 mb-3">Jujutsu Kaisen</p>
              </div>
              <button
                onClick={handleBookmark}
                className={`p-1.5 transition-all ${
                  isBookmarked
                    ? "text-pink-500"
                    : "text-gray-500 hover:text-pink-500"
                }`}
                aria-label="Bookmark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill={isBookmarked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              The strongest sorcerer from Jujutsu Kaisen. Fans love him for his
              charismatic personality, overwhelming power, and iconic blindfold
              look.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-1.5 text-sm transition-all ${
                    isLiked
                      ? "text-pink-500"
                      : "text-gray-400 hover:text-pink-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill={isLiked ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>{likeCount.toLocaleString()}</span>
                </button>

                <button className="flex items-center space-x-1.5 text-sm text-gray-400 hover:text-blue-400 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>328</span>
                </button>
              </div>

              <a
                href="/characters/gojo-satoru"
                className="text-sm bg-[#2a2440] hover:bg-[#3a3450] text-white px-4 py-1.5 transition-all"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "Strongest Sorcerer",
            "Limitless",
            "Six Eyes",
            "Sensei",
            "Fan Favorite",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#2a2440] text-pink-400 px-3 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Floating anime logo */}
        <div className="absolute right-5 bottom-5 opacity-20 group-hover:opacity-30 transition-opacity">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jujutsu_Kaisen_logo.svg/1200px-Jujutsu_Kaisen_logo.svg.png"
            alt="Jujutsu Kaisen Logo"
            className="h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default CharacterOfTheWeek;
