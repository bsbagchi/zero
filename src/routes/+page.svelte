<script>
    import ImageDisplay from '$lib/components/ImageDisplay.svelte';
</script>

<div class="grid grid-cols-2 gap-8">
    <div>
        <h2 class="text-2xl mb-4">Featured Image</h2>
        <ImageDisplay imageIndex={1} height="h-80" />
    </div>
    <div>
        <h2 class="text-2xl mb-4">Latest Images</h2>
        <ImageDisplay gridCols={2} height="h-40" />
    </div>
</div>