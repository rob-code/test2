<script lang="ts">
  import CookieConsent from "../components/cookieconsent.svelte";
  import GridRowWrapper from "../components/gridrowwrapper.svelte";

  import cricketball from "$lib/images/cricketball-index.png";
  import thongs from "$lib/images/thongs8.webp";
  import xrays from "$lib/images/back_xrays12.png";
  import mow from "$lib/images/mow_4.png";
  import david from "$lib/images/david-index-image.webp";
  import modernromance from "$lib/images/flowers-index-multicoloured.webp";
  import storebanner from "$lib/images/store_index.jpg";
  import { onMount } from "svelte";

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
  <h2 class="fw-light text-center project-page-header header-link-button">
  <a class="btn btn-light" href="../shop" role="button">Favourite collections now available as art quality prints</a>
  </h2>
</section>

 <!-- <div class="bg-body-tertiary"> -->
      <div class="col mx-auto item-padding-top container">
        <div class="card">
        <a href="../shop">
          <img src="{storebanner}" alt="sunny room with four images on blue wall and two chairs" class="card-img-top">
        </a>
        </div>
      </div>     
    <!-- </div> -->

<section class="container">
  <div class="pt-5 text-center container">
    <div class="row py-lg-3">
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
  <h2 class="fw-light text-center project-page-header header-link-button">
   <a class="btn btn-light" href="../collections" role="button">Explore all collections</a>
  </h2>
  <!-- <p class="lead text-body-secondary project-description text-center">
    All 2D images
  </p> -->
</section>

<GridRowWrapper
  images={[
    { img: cricketball, alt: "cricketball", title:"Everyone Can Play ", price:"", link:"../collections/everyone_can_play"},
    { img: thongs, alt: "thongs", title:"Everyday Icons - Flip Flops", price:"", link:"../collections/everyday_icons"},
    { img: xrays, alt: "xrays", title:"Block Colour Portraits", price:"", link:"../collections/block_colour_portraits"},
    { img: mow, alt: "meaning of words", title:"Meaning of Words", price:"", link:"../collections/meaning_of_words"},
    { img: david, alt: "david", title:"Not Shot David", price:"", link:"../collections/not_shot_david"},
    { img: modernromance, alt: "modernromance", title:"Modern Romance", price:"", link:"../collections/modern_romance" },
  ]}
/>

<!-- <section class="container">
  <h2 class="fw-light text-center project-page-header">Animations</h2>
  <p class="lead text-body-secondary project-description text-center">
    A selection of animated projects and explorations of different frameworks
  </p>
</section> -->

<!-- <p class="float-left container">
  <a href="#top" class="link-black">Back to top</a>
</p> -->

<style>

  /* .link-black {
    color: rgba(33, 37, 41, 0.75);
  } */

</style>
