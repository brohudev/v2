import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
	})
});

export const collections = {
	'writing': writingCollection
};

