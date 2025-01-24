import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// TODO: add a collection for the other types of content collections.

const writing = defineCollection({
	loader: glob({
		pattern: "*.md",
		base: "./src/content/writing",
		generateId: ({ entry }) => entry.replace(/\.md$/, '')
	}),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		time: z.string(),
		type: z.string().default('blog'),
	})
});

export const collections = { writing };

