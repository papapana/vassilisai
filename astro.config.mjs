import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import {targetBlank} from "./src/plugins/targetBlank";

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
  ],
  markdown: {
    rehypePlugins: [[targetBlank, {domain: 'vassilis.ai'}]],
  }
});