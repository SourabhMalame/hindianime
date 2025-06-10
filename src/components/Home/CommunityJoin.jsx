import React from "react";
import { FaDiscord, FaReddit, FaTwitter, FaUserPlus } from "react-icons/fa";
import { RiChatSmile3Fill } from "react-icons/ri";

const CommunityJoin = () => {
  const communityStats = [
    { value: "50K+", label: "Weeb Members" },
    { value: "24/7", label: "Active Chats" },
    { value: "500+", label: "Daily Discussions" },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0f0b1f] to-[#1a1038] p-8 md:p-10 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <RiChatSmile3Fill className="text-pink-500 text-3xl" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Weeb Tribe
              </h2>
            </div>

            <p className="text-lg text-gray-300">
              Connect with {new Date().getFullYear()}'s most passionate anime
              community. Share memes, debate waifus, and get exclusive content
              before anyone else!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {communityStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1E1A30]/80 p-3 rounded-lg border border-[#2a2440] text-center"
                >
                  <p className="text-2xl font-bold text-pink-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://discord.gg/weebcentral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <FaDiscord className="text-xl" />
                Join Discord
              </a>
              <a
                href="/register"
                className="flex items-center gap-2 px-5 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-pink-500/20"
              >
                <FaUserPlus />
                Sign Up Free
              </a>
            </div>
          </div>

          {/* Right Content - Social Proof */}
          <div className="flex-1 relative hidden md:block">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
            <div className="relative bg-[#1E1A30] border border-[#2a2440] rounded-xl p-5 space-y-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-pink-500/10 p-2 rounded-lg">
                  <FaTwitter className="text-pink-400 text-xl" />
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">@AnimeFan420</span>{" "}
                  just joined!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <FaReddit className="text-purple-400 text-xl" />
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">u/WaifuWarrior</span>{" "}
                  posted new fanart
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-indigo-500/10 p-2 rounded-lg">
                  <FaDiscord className="text-indigo-400 text-xl" />
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">
                    @SenpaiNoticeMe
                  </span>{" "}
                  started a new discussion
                </p>
              </div>

              {/* Floating avatars */}
              <div className="flex -space-x-3 pt-4">
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=AnimeFan${i}`}
                    alt="Community member"
                    className="w-10 h-10 rounded-full border-2 border-[#1E1A30] hover:border-pink-400 transition-all"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-[#2a2440] border-2 border-[#1E1A30] flex items-center justify-center text-xs">
                  +99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityJoin;
