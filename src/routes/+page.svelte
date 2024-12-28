<script>
  import Image from '$lib/components/Image.svelte';
  import ImageGroup from '$lib/components/ImageGroup.svelte';
</script>

<!-- Single hero image -->
<div class="mb-8">
  <h2>Hero Image</h2>
  <Image 
    imageName="image" 
    className="w-full h-96 object-cover rounded-lg shadow-xl" 
  />
</div>

<!-- Group of specific images -->
<div class="mb-8">
  <h2>Selected Images</h2>
  <ImageGroup imageNames={['image2', 'image3', 'image4']} gridCols={3} />
</div>

<!-- Mix and match -->
<div class="grid grid-cols-2 gap-4">
  <div>
    <h3>Left Image</h3>
    <Image imageName="image5" />
  </div>
  <div>
    <h3>Right Image</h3>
    <Image imageName="image6" />
  </div>
</div>