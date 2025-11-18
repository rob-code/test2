<script>
  let { images } = $props();
  let n = (images.length / 2).toString(10);
  const c1 = "row row-cols-1 row-cols-md-";
  let c2 = c1.concat(n);
</script>

<div class="container">
  <div class={c2}>
    {#each images as image}
      <div class="col">
        {#if image.option}
          <a href={image.link} data-sveltekit-reload>
            <img
              src={image.img}
              alt={image.alt}
              class="card-img-top print-image"
            />
          </a>
        {:else}
          <a href={image.link}>
            <img
              src={image.img}
              alt={image.alt}
              class="card-img-top print-image"
            />
          </a>
        {/if}
        <div class="print-title">{image.title}</div>
        <div class="price">{image.price}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .price {
    padding-bottom: 2em;
  }
</style>
