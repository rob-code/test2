<script>
    let { cricketball, thongs, xrays, mow, david, modernromance } = $props();
</script>

<div class="container">



  <div class="row row-cols-1 row-cols-md-3">
    <!-- <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3"> -->
    
    <!-- {iterate over imageData } -->
    
    <!-- <p>image array size = {images.size}</p> -->
    
    
    <div class="col">
      <img src={cricketball} alt="Three Rugby Balls" class="card-img-top" />
      <div class="print-title">Everyone Can Play</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="col">
      <img src={thongs} alt="Thongs" class="card-img-top" />
      <div class="print-title">Flip FLops</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="col">
      <img
        src={xrays}
        alt="Colourful block colour portraits"
        class="card-img-top"
      />
      <div class="print-title">BLock Colour Portraits</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="col">
      <img src={mow} alt="Meaning of Words" class="card-img-top" />
      <div class="print-title">A Meaning of Words</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="col">
      <img
        src={david}
        alt="Six David images with colourful backgrounds"
        class="card-img-top"
      />
      <div class="print-title">Not Shot David</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <div class="col">
      <img
        src={modernromance}
        alt="computer generated yellow roses"
        class="card-img-top"
      />
      <div class="print-title">Modern Romance</div>
      <div class="price">£ 65 GBP</div>
    </div>

    <!-- <div class="col">
          <div class="card"> 
            <img src="{colourfield}" alt="Colourfield in rust green" class="card-img-top">
            <div class="card-body">
               <p class="card-text">Colour Fields<img src="{arrow_right}" alt="arrow right icon" class="arrow-right"><a href="project-pages/colour-fields.html" aria-label="more information about colour fields" class="stretched-link"></a></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card"> 
            <img src="{lovehearts}" alt="Lovehearts" class="card-img-top">
              <div class="card-body">
                <p class="card-text">True Love Hearts<img src="{arrow_right}" alt="arrow right icon" class="arrow-right"><a href="project-pages/true-love-hearts.html" aria-label="more information about love hearts" class="stretched-link"></a></p>
              </div>
            </div>
        </div> -->
  </div>
</div>