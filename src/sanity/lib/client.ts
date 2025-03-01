import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function getPhotos() {
  const pageInfo = await client.fetch(
    '*[_type == "photos"]{ "imageURL": image.asset->url, }'
  );
  return pageInfo;
}
