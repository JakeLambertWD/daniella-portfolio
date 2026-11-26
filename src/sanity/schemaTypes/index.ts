import { type SchemaTypeDefinition } from "sanity";
import feedback from "./feedback";
import photos from "./photos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [photos, feedback],
};
