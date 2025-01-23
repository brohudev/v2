import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
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

