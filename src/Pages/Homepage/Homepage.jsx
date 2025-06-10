import AnimeExtras from "@/components/Home/AnimeExtras";
import AnimeReviews from "@/components/Home/AnimeReviews";
import CharacterOfTheWeek from "@/components/Home/CharacterOfTheWeek";
import CommunityJoin from "@/components/Home/CommunityJoin";
import CommentSection from "@/components/Home/discussion";
import FanPoll from "@/components/Home/FanPoll";
import FeaturedPost from "@/components/Home/FeaturedPost";
import PopularPosts from "@/components/Home/PopularPosts";
import TrendingAnime from "@/components/Home/TrendingAnime";
import React from "react";

function Homepage() {
  return (
    <>
      <FeaturedPost />
      {/* <TrendingAnime /> */}

      <PopularPosts />
      <CommentSection />
      {/* <FanPoll /> */}
      <AnimeReviews />
      {/* <CharacterOfTheWeek /> */}
      <CommunityJoin />
    </>
  );
}

export default Homepage;
