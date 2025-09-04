<script lang=ts> 
  import PageTitle from "../../components/pagetitle.svelte";
  import ShopRocket from "../../components/shoprocketdemo.svelte";

	// import type { PageProps } from './$types';
	// let { data }: PageProps = $props();
  // console.log(data);

</script>


<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice - Shop for Fine Art Prints</title>
</svelte:head>

<PageTitle pagetitle="Shop Fine Art Prints" />

<ShopRocket title={'Shop'}/>

