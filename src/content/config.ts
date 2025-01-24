import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writingCollection = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/writing",
		generateId: ({ entry }) => entry.replace(/\.md$/, '')
	}),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		time: z.string(),
		type: z.string().default('blog'),
	})
});

export const collections = {
	'writing': writingCollection
};

