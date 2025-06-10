import React from "react";

const AnimeExtras = () => {
  return (
    <div className="bg-[#0f0b1f] text-white px-6 py-12 space-y-16">
      {/* Fan Polls or Quizzes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🎯 Fan Poll of the Week</h2>
        <div className="bg-[#1E1A30] p-6 rounded-xl border border-[#2a2440]">
          <p className="mb-4 text-gray-300">
            Who’s the strongest anime villain this season?
          </p>
          <form className="space-y-2">
            {[
              "Gojo (Jujutsu Kaisen)",
              "Ainz (Overlord)",
              "Makima (Chainsaw Man)",
              "Eren Yeager (AOT Final Part)",
            ].map((option, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="radio"
                  name="poll"
                  className="accent-pink-500"
                  id={`poll-${idx}`}
                />
                <label htmlFor={`poll-${idx}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded text-sm"
            >
              Submit Vote
            </button>
          </form>
        </div>
      </section>

      {/* Anime Reviews & Ratings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">⭐ Anime Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Demon Slayer", "Attack on Titan", "Chainsaw Man"].map(
            (anime, index) => (
              <div
                key={index}
                className="bg-[#1E1A30] p-5 rounded-xl border border-[#2a2440] hover:border-pink-500/40"
              >
                <h3 className="text-lg font-semibold">{anime}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {anime === "Chainsaw Man"
                    ? "Gritty, violent, and visually spectacular."
                    : "Top-notch animation and character arcs."}
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${
                        i < (anime === "Chainsaw Man" ? 4 : 5)
                          ? ""
                          : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Anime Character of the Week */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🌟 Character of the Week</h2>
        <div className="flex items-center gap-4 bg-[#1E1A30] p-5 rounded-xl border border-[#2a2440]">
          <img
            src="https://cdn.myanimelist.net/images/characters/10/507287.jpg"
            alt="Gojo"
            className="w-20 h-20 rounded-full object-cover border-4 border-pink-600"
          />
          <div>
            <h3 className="text-xl font-semibold">Gojo Satoru</h3>
            <p className="text-sm text-gray-400">
              The overpowered sorcerer from Jujutsu Kaisen. Fans love him for
              his style, strength, and charisma.
            </p>
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">👥 Join Our Community</h2>
        <p className="text-gray-300">
          Connect with anime lovers, share your thoughts, and stay updated on
          the latest discussions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded"
          >
            Join Discord
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-[#2a2440] pt-6 text-sm text-gray-400">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} AnimeZone. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/sitemap" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnimeExtras;
