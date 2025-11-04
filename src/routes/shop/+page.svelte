<script lang=ts> 
  import PageTitle from "../../components/pagetitle.svelte";
  import ShopRocket from "../../components/shoprocket_store.svelte";

	// import type { PageProps } from './$types';
	// let { data }: PageProps = $props();
  // console.log(data);

</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Shop for Fine Art Prints | Robert Brice</title>
  <meta name="description" content="Shop for high quality fine art prints">
</svelte:head>

<PageTitle pagetitle="Shop Fine Art Prints" />

<ShopRocket title={'Shop'}/>

