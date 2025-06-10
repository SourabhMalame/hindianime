import React, { useState, useRef, useEffect } from "react";

const Discussion = () => {
  const [activeTab, setActiveTab] = useState("newest");
  const [showComments, setShowComments] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const commentsRef = useRef(null);

  const comments = [
    {
      id: 1,
      user: {
        name: "Shifa",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Shifa",
        bgColor: "bg-purple-600",
      },
      content: "Just finish big mom already guys!!!",
      timestamp: "2 minutes ago",
      anime: "One Piece",
      animeColor: "text-purple-400",
      likes: 24,
      replies: 5,
    },
    {
      id: 2,
      user: {
        name: "Navi~Senpai",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Navi",
        bgColor: "bg-orange-500",
        badge: "ANGELFISH",
      },
      content:
        "21:10 Bruh at least let him hit. He DIED for you. He fought an army ALONE. He DESERVES this",
      timestamp: "2 minutes ago",
      anime: "The Familiar of Zero: Rondo...",
      animeColor: "text-pink-400",
      likes: 42,
      replies: 12,
    },
    {
      id: 3,
      user: {
        name: "Brundhyll",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Brundhyll",
        bgColor: "bg-gray-700",
      },
      content: "Finally...we are at thousand after 2 months",
      timestamp: "2 minutes ago",
      anime: "One Piece",
      animeColor: "text-purple-400",
      likes: 18,
      replies: 3,
    },
    {
      id: 4,
      user: {
        name: "Akku",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Akku",
        bgColor: "bg-green-500",
      },
      content:
        "So u mean all of those people got to see myne boobies up close on a large as.s screen",
      timestamp: "2 minutes ago",
      anime: "The Rising of the Shield Hero",
      animeColor: "text-blue-400",
      likes: 56,
      replies: 23,
    },
    {
      id: 5,
      user: {
        name: "davd",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=davd",
        bgColor: "bg-green-600",
      },
      content: "bumass central 46 bruh i hate them *****",
      timestamp: "2 minutes ago",
      anime: "Bleach",
      animeColor: "text-orange-400",
      likes: 31,
      replies: 7,
    },
    {
      id: 6,
      user: {
        name: "OtakuQueen",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=OtakuQueen",
        bgColor: "bg-red-500",
        badge: "MODERATOR",
      },
      content: "The animation quality this season is insane! Worth the wait.",
      timestamp: "5 minutes ago",
      anime: "Demon Slayer",
      animeColor: "text-red-400",
      likes: 89,
      replies: 15,
    },
    {
      id: 7,
      user: {
        name: "WeebMaster",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=WeebMaster",
        bgColor: "bg-blue-600",
      },
      content: "Anyone else think the manga did this arc better?",
      timestamp: "7 minutes ago",
      anime: "Jujutsu Kaisen",
      animeColor: "text-blue-300",
      likes: 37,
      replies: 8,
    },
  ];

  const checkScrollPosition = () => {
    if (commentsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = commentsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleWheel = (e) => {
    if (commentsRef.current) {
      e.preventDefault();
      commentsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const ref = commentsRef.current;
    ref?.addEventListener("scroll", checkScrollPosition);
    ref?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      ref?.removeEventListener("scroll", checkScrollPosition);
      ref?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollLeft = () => {
    commentsRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    commentsRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0f0b1f] text-white p-10 sm:p-6 w-full font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Anime Community Talks</h2>
          <p className="text-sm text-gray-400">
            Dive into hot anime debates and latest fan chatter!
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#2a2440] mb-6">
        {["newest", "popular"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium relative ${
              activeTab === tab
                ? "text-pink-500"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Scrollable Comments */}
      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/70 rounded-full hover:bg-black/90 transition-all"
            aria-label="Scroll left"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div
          ref={commentsRef}
          className="flex overflow-x-scroll gap-4 pb-6 scrollbar-custom snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "thin", minHeight: "calc(100% + 6px)" }}
          onWheel={handleWheel}
        >
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="w-[300px] flex-shrink-0 bg-[#1E1A30] p-4 rounded-xl border border-[#2a2440] hover:border-pink-500/30 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 h-full">
                <div
                  className={`${comment.user.bgColor} w-10 h-10 rounded-full overflow-hidden`}
                >
                  <img
                    src={comment.user.avatar}
                    className="w-full h-full object-cover"
                    alt={`${comment.user.name}'s avatar`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-sm">
                      {comment.user.name}
                    </h4>
                    {comment.user.badge && (
                      <span className="bg-yellow-400/90 text-black text-xs font-bold px-2 py-0.5 rounded">
                        {comment.user.badge}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 mt-2 line-clamp-3">
                    {comment.content}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <span>📺</span>
                      <span className={`${comment.animeColor} font-medium`}>
                        {comment.anime}
                      </span>
                    </div>
                    <div className="flex gap-3 text-gray-400">
                      <span className="hover:text-pink-500 cursor-pointer">
                        ❤️ {comment.likes}
                      </span>
                      <span className="hover:text-blue-400 cursor-pointer">
                        💬 {comment.replies}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/70 rounded-full hover:bg-black/90 transition-all"
            aria-label="Scroll right"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
          background-color: #1e1a30;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: rgba(236, 72, 153, 0.7);
          border-radius: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background-color: rgba(236, 72, 153, 1);
        }
        .scrollbar-custom {
          scrollbar-color: rgba(236, 72, 153, 0.7) #1e1a30;
          scrollbar-width: thin;
        }
      `}</style>
    </div>
  );
};

export default Discussion;
