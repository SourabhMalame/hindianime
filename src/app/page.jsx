// app/page.tsx or app/page.jsx
"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Homepage from "@/Pages/Homepage/Homepage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}
