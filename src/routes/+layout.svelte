<script lang="ts">
    import "$lib/styles.css";
    import Navigation from "../components/navigation.svelte";
    import Footer from "../components/footer.svelte"
    let { children } = $props();
</script>


<Navigation />

{@render children()}

<Footer />