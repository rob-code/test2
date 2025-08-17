<script>
    import ImageGrid from "./imagegrid.svelte";
    import ImageRow from "./imagerow.svelte";
    
    let iw = $state(0);
    let { images } = $props();
</script>

<svelte:window bind:innerWidth={iw} />
{#if iw < 768}
    <ImageRow {images} />
{:else}
    <ImageGrid {images} />
{/if}
