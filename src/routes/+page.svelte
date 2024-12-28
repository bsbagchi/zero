<script>
  import Image from '$lib/components/Image.svelte';
</script>

<!-- Use it with just the name -->
<Image imageName="image" />
<Image imageName="image2" />

<!-- Or with full filename -->
<Image imageName="image3.png" />

<!-- With custom styling -->
<Image 
  imageName="image" 
  className="w-full h-96 object-cover rounded-lg shadow-lg" 
/>