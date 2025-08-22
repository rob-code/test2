<script>
  import { base } from "$app/paths";
  let { product } = $props();
</script>

<div class="col-md-6 mb-4">
  <div class="card">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active card-img-top">
          <img
            src="{base}/{product?.img1}"
            class="d-block w-100"
            alt={product?.alt1}
          />
        </div>
        <div class="carousel-item">
          <img
            src="{base}/{product?.img2}"
            class="d-block w-100"
            alt={product?.alt2}
          />
        </div>
        <div class="carousel-item">
          <img
            src="{base}/{product?.img3}"
            class="d-block w-100"
            alt={product?.alt3}
          />
        </div>
        <div class="carousel-item">
          <img
            src="{base}/{product?.img4}"
            class="d-block w-100"
            alt={product?.alt4}
          />
        </div>
      </div>

      <div class="carousel-indicators">
        <div class="card-body">
          <div class="row g-2">
            <div class="col-3">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active thumbnail"
                aria-current="true"
                aria-label="Slide 1"
              >
                <img
                  src="{base}/{product?.img1}"
                  class="d-block w-100"
                  alt={product?.alt1}
                />
              </button>
            </div>

            <div class="col-3">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                class="thumbnail"
                aria-label="Slide 2"
              >
                <img
                  src="{base}/{product?.img2}"
                  class="d-block w-100"
                  alt={product?.alt2}
                /></button
              >
            </div>
            <div class="col-3">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                class="thumbnail"
                aria-label="Slide 3"
              >
                <img
                  src="{base}/{product?.img3}"
                  class="d-block w-100"
                  alt={product?.alt3}
                /></button
              >
            </div>
            <div class="col-3">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                class="thumbnail"
                aria-label="Slide 4"
              >
                <img
                  src="{base}/{product?.img4}"
                  class="d-block w-100"
                  alt={product?.alt4}
                /></button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .carousel-item {
    transition: none;
  }

  .card {
    height: 97%;
  }

  .card-body {
    width: 100%;
    padding-top: 0.5em;
    padding-left: 0;
    padding-right: 1%;
  }

  .thumbnail {
    width: 95%;
    align-items: center;
    margin-top: 0%;
    padding: 0.2em;
    margin: 0.2em;
    height: auto;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(50, 50, 50, 0.4);
    border-radius: 2%;
  }

  .thumbnail:not(.active) {
    opacity: 0.5;
  }

  .row.g-2 {
    margin-left: -0.1em;
    margin-right: 0.2em;
  }

  .carousel-indicators {
    position: static;
    margin-left: 0%;
    margin-right: 0%;
    vertical-align: middle;
    width: 100%;
  }
</style>
