<script>
    import { getImageByIndex } from '$lib/utils/imageUtils';
    
    const headerImage = getImageByIndex(0);
</script>

<header class="relative h-96">
    <img 
        src={headerImage.src} 
        alt={headerImage.alt}
        class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 class="text-white text-5xl font-bold">Welcome</h1>
    </div>
</header>