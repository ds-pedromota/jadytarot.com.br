import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // hybrid: páginas estáticas por padrão, exceto as marcadas com prerender = false
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://jadytarot.com.br',
  compressHTML: true,
});
