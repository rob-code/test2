<script>
    let { cricketball, thongs, xrays, mow, david, modernromance } = $props();
</script>


<div class="scroll-container">

    <div class="scroll-item">
      <img src={cricketball} alt="Three Rugby Balls" />
      <div class="print-title">Everyone Can Play</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="scroll-item">
      <img src={thongs} alt="Thongs" />
      <div class="print-title">Flip FLops</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="scroll-item">
      <img
        src={xrays}
        alt="Colourful block colour portraits"/>
      <div class="print-title">BLock Colour Portraits</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="scroll-item">
      <img src={mow} alt="Meaning of Words" />
      <div class="print-title">A Meaning of Words</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="scroll-item">
      <img
        src={david}
        alt="Six David images with colourful backgrounds" />
      <div class="print-title">Not Shot David</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="scroll-item">
      <img
        src={modernromance}
        alt="computer generated yellow roses"
      />
      <div class="print-title">Modern Romance</div>
      <div class="price">£ 65 GBP</div>
    </div>

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