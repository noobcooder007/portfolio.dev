import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://noobcooder007.github.io',
  base: '/docs/',
  outDir: "./docs",
  trailingSlash: 'never'
});