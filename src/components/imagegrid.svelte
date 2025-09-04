<script>
  let {images} = $props();
</script>

<div class="container">
  <div class="row row-cols-1 row-cols-md-3">
  {#each images as image}
    <div class="col">
    <a href={image.link}>
      <img src={image.img} alt={image.alt} class="card-img-top print-image" />
    </a>
      <div class="print-title">{image.title}</div>
      <div class="price">{image.price}</div>
    </div>
      {/each}
  </div>
</div>

<style>

.price{
  padding-bottom: 2em;
}


</style>

