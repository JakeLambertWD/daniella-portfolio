"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { socialLinks } from "@/utils/constants";
import {
  portfolioCategories,
  type GalleryPhoto,
  type PortfolioCategory,
} from "./portfolioPhotos";
import shared from "./shared.module.css";
import classes from "./Portfolio.module.css";

type Filter = "All" | PortfolioCategory;

// Local imports carry their own size and blur; Sanity photos pass them in
function imageProps(photo: GalleryPhoto) {
  if (typeof photo.src !== "string") {
    return { src: photo.src, placeholder: "blur" as const };
  }
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    ...(photo.blurDataURL
      ? { placeholder: "blur" as const, blurDataURL: photo.blurDataURL }
      : {}),
  };
}
const filters: Filter[] = ["All", ...portfolioCategories];

function Portfolio({ photos: allPhotos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const photos = useMemo(
    () =>
      filter === "All"
        ? allPhotos
        : allPhotos.filter((p) => p.category === filter),
    [filter, allPhotos]
  );

  const current = openIndex === null ? null : photos[openIndex];
  const showPrev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));

  // Arrow keys move through the lightbox while it is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, photos.length]);

  return (
    <section id="portfolioId" className={`${shared.container} ${classes.section}`}>
      <div className={classes.intro}>
        <div className={classes.introHeading}>
          <p className={shared.eyebrow}>Portfolio</p>
          <h2 className={shared.sectionTitle}>Recent work</h2>
        </div>
        <div role="group" aria-label="Filter portfolio" className={classes.filters}>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={classes.filter}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={classes.gallery}>
        {photos.map((photo, i) => (
          <button
            key={photo.key}
            type="button"
            className={classes.tile}
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              {...imageProps(photo)}
              alt={photo.alt}
              sizes="(min-width: 1024px) 400px, 50vw"
            />
          </button>
        ))}
      </div>

      {socialLinks.instagram && (
        <div className={classes.more}>
          <a
            href={socialLinks.instagram}
            className={shared.buttonOutline}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on Instagram
          </a>
        </div>
      )}

      <Modal
        opened={current !== null}
        onClose={() => setOpenIndex(null)}
        size="min(1100px, 94vw)"
        centered
        title={current?.alt}
        overlayProps={{ backgroundOpacity: 0.85, color: "#2E2220", blur: 4 }}
        styles={{
          content: { background: "transparent", boxShadow: "none" },
          header: { background: "transparent", color: "#FAF6F3" },
          title: { fontSize: 14, letterSpacing: "0.06em" },
          close: { color: "#FAF6F3" },
        }}
      >
        {current && openIndex !== null && (
          <>
            <div className={classes.lightbox}>
              <Image
                {...imageProps(current)}
                alt={current.alt}
                className={classes.lightboxImage}
                sizes="90vw"
              />
              <button
                type="button"
                className={`${classes.navButton} ${classes.prev}`}
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <IconChevronLeft size={24} stroke={1.5} />
              </button>
              <button
                type="button"
                className={`${classes.navButton} ${classes.next}`}
                onClick={showNext}
                aria-label="Next photo"
              >
                <IconChevronRight size={24} stroke={1.5} />
              </button>
            </div>
            <p className={classes.counter}>
              {openIndex + 1} / {photos.length}
            </p>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Portfolio;
