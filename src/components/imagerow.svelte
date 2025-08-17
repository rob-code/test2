<script>
  let { images } = $props();
</script>

<div class="scroll-container">
  {#each images as image}
    <div class="scroll-item">
      <img src={image.url} alt={image.alt} />
      <div class="print-title">Everyone Can Play</div>
      <div class="price">£ 65 GBP</div>
    </div>
  {/each}
</div>

<style>
  .scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 20px;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-item {
    padding: 10px;
    display: inline-block;
    width: 70%;
  }

  .scroll-item img {
    width: 100%;
  }
</style>
