<script>
  import flowers_red from "$lib/images/flowers-red.webp";
  import flowers_pink from "$lib/images/flowers-pink.webp";
  import flowers_blue from "$lib/images/flowers-blue.webp";
  import flowers_purple from "$lib/images/flowers-purple.webp";
  import flowers_multicoloured_2 from "$lib/images/flowers-multicoloured2.webp";
  import flowers_multicoloured_3 from "$lib/images/flowers-multicoloured3.webp";
  import AdjacentNavigation from "../../../components/navigation_collections_next_pages.svelte";
</script>

<section class="container">
  <h2 class="fw-light text-center project-page-header">Modern Romance</h2>
  <p
    class="lead text-body-secondary project-description-centre item-padding-bottom"
  >
    These flowers grew from explorations and experimentations with a number of
    concentric, randomly changing spline loops. Computer generated roses - a
    very modern romance.
  </p>
</section>

<div class="album py-5 bg-body-tertiary">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
      <div class="col">
        <div class="card">
          <img
            src={flowers_red}
            alt="Computer generated red roses"
            class="card-img-top"
          />
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={flowers_pink}
            alt="Computer generated pink roses"
            class="card-img-top"
          />
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={flowers_blue}
            alt="Computer generated blue roses"
            class="card-img-top"
          />
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={flowers_purple}
            alt="Computer generated purple roses"
            class="card-img-top"
          />
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={flowers_multicoloured_2}
            alt="Computer generated multicoloured roses"
            class="card-img-top"
          />
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src={flowers_multicoloured_3}
            alt="Computer generated multicoloured roses"
            class="card-img-top"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<AdjacentNavigation
  previousPageTitle="Not Shot David"
  previousPageLink="/collections/not_shot_david"
  nextPageTitle="Colour Fields"
  nextPageLink="/collections/colour_fields"
/>
