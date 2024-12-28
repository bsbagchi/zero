<script>
    const zero =[{"img":'/src/multimarket.svg'},{"img":'/src/multimarket.svg'},{"img":'/src/multimarket.svg'}]

</script>
{#each zero as item }
<div class="w-40 h-40 bg-black flex items-center justify-center">
    
    <img src={item.img} class="w-20 h-20" alt="An alt text" />

</div>
{/each}

  