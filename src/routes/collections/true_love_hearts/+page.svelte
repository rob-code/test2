<script>
  import lovehearts_12 from "$lib/images/lovehearts12.png";
  import AdjacentNavigation from "../../../components/navigation_collections_next_pages.svelte";
</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice Collections: True Love Hearts</title>
</svelte:head>

<section class="container">
  <h2 class="fw-light text-center project-page-header">True Love Hearts</h2>
  <p
    class="lead text-body-secondary project-description-centre item-padding-bottom"
  >
    Iconic childhood sweets which still fizz with loving messages.
  </p>
</section>

<div class="bg-body-tertiary">
  <div class="col mx-auto image-padding container">
    <div class="card">
      <img src={lovehearts_12} alt="Lovehearts" class="card-img-top" />
    </div>
  </div>
</div>

<AdjacentNavigation
  previousPageTitle="Colour Fields"
  previousPageLink="/collections/colour_fields"
  nextPageTitle="Collections"
  nextPageLink="../collections"
/>
