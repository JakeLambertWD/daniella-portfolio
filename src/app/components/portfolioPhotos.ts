import type { StaticImageData } from "next/image";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic2.jpg";
import pic3 from "../../../public/pic3.jpg";
import pic4 from "../../../public/pic4.jpg";
import pic5 from "../../../public/pic5.jpg";
import pic6 from "../../../public/pic6.jpg";
import pic7 from "../../../public/pic7.jpg";
import pic8 from "../../../public/pic8.jpg";
import pic9 from "../../../public/pic9.jpg";
import pic10 from "../../../public/pic10.jpg";
import pic11 from "../../../public/pic11.jpg";
import pic12 from "../../../public/pic12.jpg";
import pic13 from "../../../public/pic13.jpg";
import pic14 from "../../../public/pic14.jpg";
import pic15 from "../../../public/pic15.jpg";
import pic16 from "../../../public/pic16.jpg";
import pic17 from "../../../public/pic17.jpg";
import pic18 from "../../../public/pic18.jpg";
import pic19 from "../../../public/pic19.jpg";
import pic20 from "../../../public/pic20.jpg";
import pic21 from "../../../public/pic21.jpg";

export const portfolioCategories = ["Bridal", "Occasion", "Natural"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export function isPortfolioCategory(value: string): value is PortfolioCategory {
  return (portfolioCategories as readonly string[]).includes(value);
}

/** A photo as the gallery renders it, from either Sanity or the local files */
export type GalleryPhoto = {
  key: string;
  src: StaticImageData | string;
  alt: string;
  category: PortfolioCategory;
  /** Needed for remote (Sanity) images; local imports carry their own size */
  width?: number;
  height?: number;
  /** Tiny blurred preview shown while a remote image loads */
  blurDataURL?: string;
};

type LocalPhoto = {
  src: StaticImageData;
  alt: string;
  category: PortfolioCategory;
};

// Fallback gallery, used while the Sanity "Portfolio photos" list is empty.
// Shown in this order (mixed so "All" isn't grouped by category).
const localPhotos: LocalPhoto[] = [
  { src: pic15, alt: "Bride with veil and crystal tiara", category: "Bridal" },
  { src: pic17, alt: "Client with curly hair and bronzed glam", category: "Occasion" },
  { src: pic9, alt: "Client with rosy cheeks and bold brows", category: "Occasion" },
  { src: pic14, alt: "Red-haired client with soft glam and long waves", category: "Occasion" },
  { src: pic5, alt: "Bride and bridesmaid holding bouquets outdoors", category: "Bridal" },
  { src: pic1, alt: "Client with warm, natural makeup and soft curls", category: "Natural" },
  { src: pic19, alt: "Client with winged liner and pink lip", category: "Occasion" },
  { src: pic8, alt: "Client with defined brows, rose lip and soft waves", category: "Occasion" },
  { src: pic12, alt: "Bride in a full gown on a sweeping staircase", category: "Bridal" },
  { src: pic13, alt: "Smiling client with fresh, glowing makeup", category: "Natural" },
  { src: pic2, alt: "Smiling bride with veil and pink bouquet", category: "Bridal" },
  { src: pic20, alt: "Client with shimmering eyes, nude lip and glossy waves", category: "Occasion" },
  { src: pic6, alt: "Mother and two daughters with party makeup", category: "Occasion" },
  { src: pic18, alt: "Client with fluttery lashes and a bright smile", category: "Natural" },
  { src: pic11, alt: "Bride in a lace gown and tiara on her wedding morning", category: "Bridal" },
  { src: pic4, alt: "Client with smoky eyes and a soft pink lip", category: "Occasion" },
  { src: pic3, alt: "Client with natural makeup and long curls", category: "Natural" },
  { src: pic10, alt: "Bride with a pearl tiara on a staircase", category: "Bridal" },
  { src: pic7, alt: "Client with bronzed eyes and sleek waves", category: "Natural" },
  { src: pic16, alt: "Daniella applying a bride's makeup", category: "Bridal" },
  { src: pic21, alt: "Client with glowing skin and voluminous blow-dry", category: "Natural" },
];

export const fallbackPhotos: GalleryPhoto[] = localPhotos.map((p) => ({
  key: p.src.src,
  ...p,
}));
