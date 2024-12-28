<script lang="ts">
  export let imageName: string;
  export let className = "w-full h-64 object-cover"; // default styling
  
  // Handle both cases - with and without .png extension
  const fullImageName = imageName.endsWith('.png') ? imageName : `${imageName}.png`;
  const imageModule = `/src/lib/images/${fullImageName}`;

  let imageSrc: string;
  let error = false;

  try {
    // Dynamic import of the specific image
    const img = import.meta.glob('/src/lib/images/*.png', { eager: true });
    imageSrc = img[imageModule]?.default;
  } catch (e) {
    error = true;
    console.error(`Failed to load image: ${imageName}`, e);
  }
</script>

{#if imageSrc && !error}
  <img 
    src={imageSrc} 
    alt={imageName}
    class={className}
  />
{:else}
  <div class="bg-gray-200 flex items-center justify-center {className}">
    <p class="text-gray-500">Image not found: {imageName}</p>
  </div>
{/if}