import { schema } from "normalizr";

const url = new schema.Entity('urls', {});

export const imagesSchema = new schema.Entity('images', { urls: [url]});
