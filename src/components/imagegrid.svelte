<script>
  let { images } = $props();
</script>

<div class="container">
  <div class="row row-cols-1 row-cols-md-3">


  {#each images as image}
    <div class="col">
        <img src={image.url} alt={image.alt} class="card-img-top" />

      <div class="print-title">Everyone Can Play</div>
      <div class="price">£ 65 GBP</div>
    </div>
      {/each}
  </div>
</div>
