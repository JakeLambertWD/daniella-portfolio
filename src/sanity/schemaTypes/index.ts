import { type SchemaTypeDefinition } from "sanity";
import photos from "./photos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [photos],
};
