import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import {targetBlank} from "./src/plugins/targetBlank";
import {jamComments} from "@jam-comments/astro/config";
import "dotenv/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://vassilis.ai',
  integrations: [mdx(), sitemap(), tailwind(),
    partytown({
      config: {
        forward: ["datalayer.push"]
      }
    }),
    jamComments({
      domain: process.env.JAM_COMMENTS_DOMAIN,
      apiKey: process.env.JAM_COMMENTS_API_KEY,
      environment: process.env.JAM_COMMENTS_ENVIRONMENT, // `production` or `development` // optional
    })
  ],
  markdown: {
    rehypePlugins: [[targetBlank, {domain: 'vassilis.ai'}]],
  }
});