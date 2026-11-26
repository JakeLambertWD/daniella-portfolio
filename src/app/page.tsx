import { getPortfolioPhotos } from "@/sanity/lib/client";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import LandingPage from "./components/Landing";
import Portfolio from "./components/Portfolio";
import {
  fallbackPhotos,
  isPortfolioCategory,
  type GalleryPhoto,
} from "./components/portfolioPhotos";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

// Re-fetch Sanity content at most once a minute, so new uploads appear
// without a redeploy
export const revalidate = 60;

async function loadGalleryPhotos(): Promise<GalleryPhoto[]> {
  try {
    const photos = await getPortfolioPhotos();
    const gallery = photos
      .filter((p) => isPortfolioCategory(p.category))
      .map((p) => ({
        key: p._id,
        src: `${p.url}?auto=format&w=1600`,
        alt: p.alt,
        category: p.category as GalleryPhoto["category"],
        width: p.width,
        height: p.height,
        blurDataURL: p.lqip ?? undefined,
      }));
    return gallery.length > 0 ? gallery : fallbackPhotos;
  } catch (error) {
    console.error("Could not load portfolio photos from Sanity", error);
    return fallbackPhotos;
  }
}

async function Home() {
  const photos = await loadGalleryPhotos();

  return (
    <>
      <LandingPage />
      <About />
      <Services />
      <Portfolio photos={photos} />
      <Reviews />
      <ContactMe />
    </>
  );
}

export default Home;
