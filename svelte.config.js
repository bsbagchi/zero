import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),  // Use Vite's preprocessing for Svelte files

  kit: {
    adapter: adapter(),  // Use Cloudflare adapter for deployment
  }
};

export default config;
