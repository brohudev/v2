import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export const GET = async ({ site }) => {
  const posts = await getCollection('writing');

  return rss({
    title: 'Hitarth Thanki\'s Blog',
    description: 'My Musings on Life and the Rest.',
    site: site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      author: post.data.author,
      description: post.data.tagline,
      link: `/writing/${post.id}/`,
      categories: [post.data.type],
      content: sanitizeHtml(parser.render(post.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),  
    })),
  });
};
