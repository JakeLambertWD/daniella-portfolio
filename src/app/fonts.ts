import { Cormorant_Garamond, Jost } from "next/font/google";

// Headings, quotes and prices
export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

// Body copy and labels
export const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});
