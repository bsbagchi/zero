<script>
    const zero =[{"img":'../multimarket.svg'},{"img":'../multimarket.svg'},{"img":'../multimarket.svg'}]

</script>
{#each zero as item }
<div class="w-40 h-40 bg-black flex items-center justify-center">
    
    <img src={new URL(item.img,import.meta.url).href} class="w-20 h-20" alt="An alt text" />

</div>
{/each}

  