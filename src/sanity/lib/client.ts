import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export type SanityPortfolioPhoto = {
  _id: string;
  url: string;
  alt: string;
  category: string;
  width: number;
  height: number;
  lqip: string | null;
};

// Published photos that have an image, a description and a category
export async function getPortfolioPhotos(): Promise<SanityPortfolioPhoto[]> {
  return client.fetch(
    `*[_type == "photos" && defined(image.asset) && defined(alt) && defined(category)]
      | order(coalesce(order, 999999) asc, _createdAt desc) {
        _id,
        "url": image.asset->url,
        alt,
        category,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        "lqip": image.asset->metadata.lqip
      }`
  );
}
