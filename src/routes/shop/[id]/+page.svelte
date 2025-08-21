<script>
    import PageTitle from "../../../components/pagetitle.svelte";

    //import products from '$lib/data/products.json';

    let {data} = $props();

    let id = data.id;
    console.log("the id of the product is " + id);


</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice - Add to Cart</title>
</svelte:head>

<PageTitle pagetitle="product name in here - Add to Cart"/>

<p>{data.id}</p>




