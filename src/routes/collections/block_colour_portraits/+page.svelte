<script>
  import hip_1 from "$lib/images/hip-arthroplasty2.png";
  import hip_2 from "$lib/images/hip-arthroplasty7.png";
  import spine_and_pelvis_1 from "$lib/images/back_xrays12.png";
  import spine_and_pelvis_2 from "$lib/images/back_xrays8.png";
  import AdjacentNavigation from "../../../components/navigation_collections_next_pages.svelte";
</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice Collections: Block Colour Portraits</title>
</svelte:head>

<section class="container">
  <h2 class="fw-light text-center project-page-header">
    Block Colour Portraits
  </h2>

  <p class="lead text-body-secondary project-description-left">
    Total hip arthroplasty - more commonly known as a hip replacement - is one
    of the most successful surgerical procedures; it really does give a new
    lease of life. In the UK around 100,000 hip replacements are carried out
    every year.
  </p>

  <p class="lead text-body-secondary project-description-left">
    Following my own hip replacement in June 2024 I wanted to mark the event
    with a colourful, relevant picture, and celebrate new hips everywhere! I
    produced this using my own hip X rays, before and after surgery.
  </p>

  <p
    class="lead text-body-secondary project-description-left item-padding-bottom"
  >
    Another variant containing X rays of the spine and pelvis was suggested by
    an osteopath who helped my recovery.
  </p>
</section>

<div class="album py-5 bg-body-tertiary">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
      <div class="col">
        <div class="card">
          <img
            src={hip_1}
            alt="Colourful X ray images of hip replacement"
            class="card-img-top"
          />
          <div class="card-body">
            <p class="card-text">X Rays: Hip Arthroplasty 1</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={hip_2}
            alt="Colourful X ray images of hip replacement"
            class="card-img-top"
          />
          <div class="card-body">
            <p class="card-text">X Rays: Hip Arthroplasty 2</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={spine_and_pelvis_1}
            alt="Colourful X ray images of backs and pelvis"
            class="card-img-top"
          />
          <div class="card-body">
            <p class="card-text">X Rays: Spine and Pelvis 1</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={spine_and_pelvis_2}
            alt="Colourful X ray images of backs and pelvis"
            class="card-img-top"
          />
          <div class="card-body">
            <p class="card-text">X Rays: Spine and Pelvis 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <p class="lead text-body-secondary item-padding-top project-description">
    Although these images contain X rays, they also look great with any type of
    image. If you'd like to explore something, please get in touch.
  </p>
</div>

<AdjacentNavigation 
  previousPageTitle="Everyday Icons"
  previousPageLink="/collections/everyday_icons"
  nextPageTitle="A Meaning of Words"
  nextPageLink="/collections/meaning_of_words"
/>
