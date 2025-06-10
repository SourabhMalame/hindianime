import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "हिन्दी Anime ",
  description: "Your personal blogging app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
