<script lang="ts">
  import { onMount } from 'svelte';

  let images: { src: string; alt: string }[] = [];
  let loading = true;

  onMount(async () => {
    try {
      const imageModules = import.meta.glob('/src/lib/images/image*.png', {
        eager: true
      });

      images = Object.entries(imageModules).map(([path, module]: [string, any]) => ({
        src: module.default,
        alt: `Image ${path.match(/image(\d+)?\.png/)?.[1] || '1'}`
      }));

      console.log('Loaded images:', images); // Debug log
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      loading = false;
    }
  });
</script>

<div class="container mx-auto p-4">
  {#if loading}
    <div class="text-center">Loading images...</div>
  {:else if images.length === 0}
    <div class="text-center">No images found</div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each images as { src, alt }, i}
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img 
            {src} 
            {alt}
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p class="text-center">{alt}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>