<script>
    import "$lib/robertbrice.css";
    import { base } from "$app/paths";
    import cricketball from '$lib/images/cricketball-index.png';
    import thongs from '$lib/images/thongs92.png';
    import xrays from '$lib/images/back_xrays12.png';
    import mow from '$lib/images/mow_4.png';
    import david from '$lib/images/david-index-image.webp';
    import modernromance from '$lib/images/flowers-index-multicoloured.webp';
    import colourfield from '$lib/images/colourfield-index-image.webp';
    import lovehearts from '$lib/images/lovehearts-index.png';
    import arrow_right from '$lib/assets/arrow-right.svg';  

</script>

<svelte:head>
    <title>Robert Brice - Projects</title>
</svelte:head>

   <section class="text-center container">
        <div class="row image-group-header">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light title-size title-block">Projects</h1>
          </div>
        </div>
    </section>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">

            <div class="col">
              <div class="card">
                <img src="{cricketball}" alt="Three Rugby Balls" class="card-img-top">
                <div class="card-body">
                  <p class="card-text">Everyone Can Play<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                   <a href="../projects/everyone_can_play" aria-label="more information about cricket ball images" class="stretched-link"></a></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="{thongs}" alt="Thongs" class="card-img-top">
                <div class="card-body">
                  <p class="card-text">Everyday Icons<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                    <a href="../projects/everyday_icons" aria-label="more information about everyday icon images" class="stretched-link"></a></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card"> 
                <img src="{xrays}" alt="Colourful block colour portraits" class="card-img-top">
                <div class="card-body">
                  <p class="card-text">Block Colour Portraits<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                    <a href="../projects/block_colour_portraits" aria-label="more information about block colour portraits" class="stretched-link"></a></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card" > 
                <img src="{mow}" alt="Meaning of Words" class="card-img-top">
                <div class="card-body">
                  <p class="card-text">A Meaning Of Words<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                    <a href="../projects/meaning_of_words" aria-label="more information about a meaning of words" class="stretched-link"></a></p>
                </div>
              </div>
            </div>

       <div class="col">
          <div class="card" > 
            <img src="{david}" alt="Six David images with colourful backgrounds" class="card-img-top">
            <div class="card-body">
              <p class="card-text">Not Shot David<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
              <a href="../projects/not_shot_david" aria-label="more information about not shot david" class="stretched-link"></a></p> 
            </div>
          </div>
        </div>

          <div class="col">
           <div class="card" > 
            <img src="{modernromance}" alt="computer generated yellow roses" class="card-img-top">
            <div class="card-body">
              <p class="card-text">Modern Romance<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                <a href="../projects/modern_romance" aria-label="more information about modern romance" class="stretched-link"></a></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card"> 
            <img src="{colourfield}" alt="Colourfield in rust green" class="card-img-top">
            <div class="card-body">
               <p class="card-text">Colour Fields<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                <a href="../projects/colour_fields" aria-label="more information about colour fields" class="stretched-link"></a></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card"> 
            <img src="{lovehearts}" alt="Lovehearts" class="card-img-top">
              <div class="card-body">
                <p class="card-text">True Love Hearts<img src="{arrow_right}" alt="arrow right icon" class="arrow-right">
                <a href="../projects/true_love_hearts" aria-label="more information about love hearts" class="stretched-link"></a></p>
              </div>
            </div>
        </div>

      </div>
    </div>
  </div>





    
