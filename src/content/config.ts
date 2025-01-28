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


const projects = defineCollection({
	loader: glob({
		pattern: "*.md",
		base: "./src/content/projects",
		generateId: ({ entry }) => entry.replace(/\.md$/, '')
	}),
	schema: z.object({
		title: z.string(),
		github: z.string().url(),
		demo: z.string().url(),
		image: z.string(),
		technologies: z.array(z.string()),
		tagline: z.string(),
	})
});



const career = defineCollection({
	loader: glob({
		pattern: "*.md",
		base: "./src/content/career",
		generateId: ({ entry }) => entry.replace(/\.md$/, '')
	}),
	schema: z.object({
		position: z.string(),
		company: z.string(),
		fromDate: z.string(),
		toDate: z.string(),
		careerType: z.string(),
		icon: z.string(),
		location: z.string(),
		groupIcon: z.string(),
	})
});


export const collections = { writing };

