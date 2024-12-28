<script lang="ts">
  import Image from './Image.svelte';
  
  export let imageNames: string[] = [];
  export let gridCols = 3;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{gridCols} gap-4">
  {#each imageNames as imageName}
    <div class="relative group overflow-hidden rounded-lg shadow-lg">
      <Image {imageName} />
      <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p class="text-center">{imageName}</p>
      </div>
    </div>
  {/each}
</div>