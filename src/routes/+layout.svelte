<script lang="ts">
    import Navigation from "../components/navigation.svelte"
    let {children} = $props();
</script>


<Navigation />

{@render children()}
