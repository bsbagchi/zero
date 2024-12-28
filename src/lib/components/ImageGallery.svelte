<script lang="ts">
  import { onMount } from 'svelte';

  let images: { src: string; alt: string }[] = [];
  let loading = true;

  onMount(async () => {
    // Using Vite's glob import to dynamically load images
    const imageModules = import.meta.glob('/src/lib/images/*.{jpg,jpeg,png,webp,avif,gif}', {
      eager: true
    });

    images = Object.entries(imageModules).map(([path, module]: [string, any]) => ({
      src: module.default,
      alt: path.split('/').pop()?.split('.')[0] || 'image'
    }));
    
    loading = false;
  });
</script>

<div class="container mx-auto p-4">
  {#if loading}
    <p>Loading images...</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each images as image}
        <div class="rounded overflow-hidden shadow-lg">
          <img 
            src={image.src} 
            alt={image.alt}
            class="w-full h-64 object-cover"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{image.alt}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>