<script>
    import PageTitle from "../../components/pagetitle.svelte";
    import SaleGrid from "../../components/salegrid.svelte";
    import cricketball from "$lib/images/cricketball-index.png";
    import thongs from "$lib/images/thongs92.png";
    import xrays from "$lib/images/back_xrays12.png";
    import mow from "$lib/images/mow_4.png";
    import david from "$lib/images/david-index-image.webp";
    import modernromance from "$lib/images/flowers-index-multicoloured.webp";



     import products from "$lib/data/products.json";

    console.log(products);



</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Robert Brice - Shop for Fine Art Prints</title>
</svelte:head>

<PageTitle pagetitle="Shop Fine Art Prints" />

<SaleGrid prints={[
    {id: 1, img: cricketball, alt: 'cricketball', name: "cricketball", dataitemid:"cricketball" , price: "45.00", description: "a picture" },
    {id: 2, img: thongs, alt: 'thongs', name: "thongs", dataitemid:"thongs" , price: "45.00", description: "a picture" },
    {id: 3, img: xrays, alt: 'xrays', name: "xrays", dataitemid: "xrays", price: "45.00", description: "a picture" },
    {id: 4, img: mow, alt: 'mow', name: "meaning of words", dataitemid: "meaning of words", price:"45.00" , description: "a picture" },
    {id: 5, img: david, alt: 'david', name: "david", dataitemid: "david", price:"45.00" , description: "a picture" },
    {id: 6, img: modernromance, alt: 'modernromance', name: "modern romance", dataitemid: "modern romance", price:"45.00" , description: "a picture" },
]} />
