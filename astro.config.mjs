import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://vassilis.ai',
  integrations: [mdx(), sitemap(), tailwind(),
    partytown({
      config: {
        forward: ["datalayer.push"]
      }
    })
  ]
});