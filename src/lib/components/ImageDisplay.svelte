<script lang="ts">
    import { onMount } from 'svelte';
    import { imageStore } from '$lib/stores/imageStore';

    // Props
    export let imageIndex: number | null = null; // null means show all images
    export let gridCols = 3; // default grid columns for multiple images
    export let height = "h-64"; // customizable height

    let images: {src: string; alt: string}[] = [];
    let loading = true;

    onMount(async () => {
        images = await imageStore.loadImages();
        loading = false;
    });

    $: displayImages = imageIndex !== null 
        ? [images[imageIndex]].filter(Boolean)
        : images;
</script>

{#if loading}
    <div class="flex justify-center items-center {height}">
        <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
    </div>
{:else if displayImages.length === 0}
    <div class="text-center p-4">No images available</div>
{:else}
    <div class="grid grid-cols-1 {imageIndex === null ? `md:grid-cols-2 lg:grid-cols-${gridCols}` : ''} gap-4">
        {#each displayImages as { src, alt }, i}
            <div class="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                    {src} 
                    {alt}
                    class="w-full {height} object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="text-center">{alt}</p>
                </div>
            </div>
        {/each}
    </div>
{/if}