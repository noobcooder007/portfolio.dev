import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://noobcooder007.github.io',
  base: '/portfolio.dev',
  root: '.docs',
  trailingSlash: 'always',
  outDir: "./docs",
});