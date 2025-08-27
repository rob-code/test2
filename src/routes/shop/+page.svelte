<script>
  import PageTitle from "../../components/pagetitle.svelte";
  import SaleGrid from "../../components/salegrid.svelte";
  import products from "$lib/data/products.json";
  import ShopRocket from "../../components/shoprocketdemo.svelte";
</script>


<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice - Shop for Fine Art Prints</title>
</svelte:head>

<PageTitle pagetitle="Shop Fine Art Prints" />

<ShopRocket title={'Shop'}/>

<!-- <SaleGrid prints={products} /> -->
