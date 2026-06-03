import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // No Astro 5, 'static' com adapter = antigo 'hybrid':
  // páginas são estáticas por padrão, exceto as com prerender = false
  output: 'static',
  adapter: vercel(),
  site: 'https://jadytarot.com.br',
  compressHTML: true,
});
