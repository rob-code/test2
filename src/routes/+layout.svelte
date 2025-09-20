<script lang="ts">
    import "$lib/styles.css";
    import Navigation from "../components/navigation.svelte";
    import Footer from "../components/footer.svelte";
    import Newfooter from "../components/footer_new.svelte"
    let { children } = $props();
</script>


<Navigation />

{@render children()}

<Newfooter />