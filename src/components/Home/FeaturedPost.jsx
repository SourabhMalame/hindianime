import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const FeaturedPost = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredPosts = [
    {
      id: 1,
      title: "Sword of the Demon Hunter: Kijin Gentosho",
      description:
        'In the Edo period, there was a shrine maiden called "Itsukihime" in the mountain village of Kadono. Jinta, a young man who acts as the shrine maiden\'s guardian despite being a stranger, encounters a mysterious demon who speaks of the far future in the forest where he went to defeat it.',
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=900&fit=crop",
      duration: "24m",
      date: "Mar 31, 2025",
      type: "TV",
      episodes: "12 Episodes",
      genres: ["Action", "Fantasy", "Historical"],
      rating: "8.7",
    },
    {
      id: 2,
      title: "The Rising of the Shield Hero Season 3",
      description:
        "Naofumi Iwatani, a young man summoned to a parallel world as one of the four legendary heroes, must fight against the waves of catastrophe as the Shield Hero. Betrayed and falsely accused, he rises up to become the strongest hero.",
      image:
        "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=1600&h=900&fit=crop",
      duration: "24m",
      date: "Oct 6, 2023",
      type: "TV",
      episodes: "12 Episodes",
      genres: ["Action", "Adventure", "Drama", "Fantasy"],
      rating: "8.5",
    },
    {
      id: 3,
      title: "Jujutsu Kaisen: Shibuya Incident",
      description:
        "Yuji Itadori and his allies enter the Shibuya district to encounter Pseudo-Geto and his cursed spirits. A fierce battle ensues as they attempt to prevent the unsealing of Sukuna's full power.",
      image:
        "https://images.unsplash.com/photo-1632595454028-7d1a7b7f15f7?w=1600&h=900&fit=crop",
      duration: "24m",
      date: "Aug 31, 2023",
      type: "TV",
      episodes: "23 Episodes",
      genres: ["Action", "Dark Fantasy", "Supernatural"],
      rating: "9.1",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentPost = featuredPosts[currentSlide];

  return (
    <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] text-white overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentPost.image}
          alt={currentPost.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-4 flex items-center space-x-2">
          <span className="bg-pink-600 text-xs px-2 py-1 rounded">
            #{currentSlide + 1} Spotlight
          </span>
          <span className="text-sm text-gray-300">{currentPost.type}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
          {currentPost.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
          <span className="flex items-center gap-1">
            <FaClock /> {currentPost.duration}
          </span>
          <span>📅 {currentPost.date}</span>
          <span>{currentPost.episodes}</span>
          <span>⭐ {currentPost.rating}</span>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-4">
          {currentPost.genres.map((genre, index) => (
            <span
              key={index}
              className="bg-gray-800/80 text-xs px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl mb-6 leading-relaxed">
          {currentPost.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition">
            <FaPlay /> Watch Now
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-pink-600 w-6" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;
