<script>
    import cricketball from "$lib/images/cricketball-index.png";
    import thongs from "$lib/images/thongs92.png";
    import xrays from "$lib/images/back_xrays12.png";
    import mow from "$lib/images/mow_4.png";
    import david from "$lib/images/david-index-image.webp";
    import modernromance from "$lib/images/flowers-index-multicoloured.webp";

    import ImageGrid from "./imagegrid.svelte";
    import ImageRow from "./imagerow.svelte";

    let iw = $state(0);
    let ow = $state(0);
</script>

<svelte:window bind:innerWidth={iw} bind:outerWidth={ow} />

{#if iw < 768}
    <div class="container">
        <p>innerWidth = {iw} , outerWidth = {ow}</p>
    </div>

    <ImageRow {cricketball} {thongs} {xrays} {mow} {david} {modernromance} />
{:else}
    <div class="container">
        <p>innerWidth = {iw} , outerWidth = {ow}</p>
    </div>

    <ImageGrid {cricketball} {thongs} {xrays} {mow} {david} {modernromance} />
{/if}
