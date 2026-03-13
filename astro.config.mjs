import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.outlyr.in',
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), react(), keystatic()],
});