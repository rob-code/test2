<script lang="ts">
  import CookieConsent from "../components/cookieconsent.svelte";
  import GridRowWrapper from "../components/gridrowwrapper.svelte";

  import cricketball from "$lib/images/cricketball-index.png";
  import thongs from "$lib/images/thongs92.png";
  import xrays from "$lib/images/back_xrays12.png";
  import mow from "$lib/images/mow_4.png";
  import david from "$lib/images/david-index-image.webp";
  import modernromance from "$lib/images/flowers-index-multicoloured.webp";
  import colourfield from "$lib/images/colourfield-index-image.webp";
  import lovehearts from "$lib/images/lovehearts-index.png";
  import arrow_right from "$lib/assets/arrow-right.svg";
  import beach_bike from "$lib/images/beachbike.jpg";
  import { onMount, onDestroy } from "svelte";

  import type { PageProps } from "./$types";
  import { fade } from "svelte/transition";

  let { data }: PageProps = $props();

  let mounted = $state(false);
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice - Art made with Code</title>
</svelte:head>

{#if !data.isCookieSet && mounted}
  <div transition:fade><CookieConsent /></div>
{/if}

<section class="text-center container">
  <div class="row title-block">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light title-size">Robert Brice</h1>
      <h1 class="fw-light title-size">
        <span class="bracket-colour">&#123;</span> code + art
        <span class="bracket-colour">&#125;</span>
      </h1>
      <p class="lead text-body-secondary">I make images using code.</p>

      <span class="footer-icon-spacing"
        ><a
          href="https://www.instagram.com/robertbrice_art"
          aria-label="instagram"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="footer-icon"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            />
          </svg></a
        ></span
      >
    </div>
  </div>
</section>

<div class="container hr-title">
  <hr />
</div>

<section class="container">
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-12 px-0">
      <h1 class="display-4 fst-italic">Headline image ... maybe a carousel</h1>
      <p class="lead my-3">
        Inspired by the things we love Bike pic Australian beach life Treasures
        in the everyday Multiple lines of text, informing new readers quickly
        and efficiently about what is most interesting
      </p>
      <p class="lead mb-0">Continue reading...</p>
    </div>
  </div>
</section>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={beach_bike} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Inspired by the things we love ...</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={beach_bike} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Australian beach life</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={beach_bike} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Treasures in the everyday</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container hr-title">
  <hr />
</div>

<section class="container">
  <h2 class="fw-light text-center project-page-header">
    Our favourite collections ... now available as art quality prints
  </h2>
  <p class="lead text-body-secondary project-description text-center">
    Prints are available from each collection, here are some of our favourites.
  </p>
</section>

<GridRowWrapper
  images={[
    { img: cricketball, alt: "cricketball", title:"Everyone Can Play " },
    { img: thongs, alt: "thongs", title:"Everyday Icons - Flip Flops" },
    { img: xrays, alt: "xrays", title:"Block Colour Portraits" },
    { img: mow, alt: "meaning of words", title:"Meaning of Words" },
    { img: david, alt: "david", title:"Not Shot David" },
    { img: modernromance, alt: "modernromance", title:"Modern Romance" },
  ]}
/>

<section class="container">
  <div class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <p class="lead text-body-secondary">
          All images are available as giclee prints on conservation grade paper.
          They can also be commissioned in any configuration of colour and size.
          Please <a href="/contact">get in touch</a> for details.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="container">
  <h2 class="fw-light text-center project-page-header">
    View the image collections
  </h2>
  <p class="lead text-body-secondary project-description text-center">
    All 2D images
  </p>
</section>

<div class="album py-5">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
      <div class="col">
        <img src={cricketball} alt="Three Rugby Balls" class="card-img-top" />
        <div class="print-title">Everyone Can Play</div>
      </div>

      <div class="col">
        <img src={thongs} alt="Thongs" class="card-img-top" />
        <div class="print-title">Everyday Icons</div>
      </div>

      <div class="col">
        <img
          src={xrays}
          alt="Colourful block colour portraits"
          class="card-img-top"
        />
        <div class="print-title">Block Colour Portraits</div>
      </div>

      <div class="col">
        <img src={mow} alt="Meaning of Words" class="card-img-top" />
        <div class="print-title">A Meaning of Words</div>
      </div>

      <div class="col">
        <img
          src={david}
          alt="Six David images with colourful backgrounds"
          class="card-img-top"
        />
        <div class="print-title">Not Shot David</div>
      </div>

      <div class="col">
        <img
          src={modernromance}
          alt="computer generated yellow roses"
          class="card-img-top"
        />
        <div class="print-title">Modern Romance</div>
      </div>
    </div>
  </div>
</div>

<section class="container">
  <h2 class="fw-light text-center project-page-header">Animations</h2>
  <p class="lead text-body-secondary project-description text-center">
    A selection of animated projects and explorations of different frameworks
  </p>
</section>

<p class="float-left container">
  <a href="#top" class="link-black">Back to top</a>
</p>

<style>
  .py-5 {
    --row-cols-1: none;
  }

  /* .row-cols-1 {}
  
  .row-cols-sm-3{}
  
  .row-cols-md-3{} */

  .print-title {
    font-size: 0.9em;
    text-align: left;
    padding-top: 0.8em;
    color: rgba(33, 37, 41, 0.75);
  }

  /* .price {
    font-size: 0.85em;
    text-align: left;
    color: rgba(33, 37, 41, 0.75);
  } */

  .link-black {
    color: rgba(33, 37, 41, 0.75);
  }

  /* @media (min-width: 768) {
    .horizontal-scrollable > .row > .col {
      display: inline-block;
    }

    .horizontal-scrollable {
      overflow-x: auto;
      white-space: nowrap;
            display: inline-block;
    }
  } */
</style>
