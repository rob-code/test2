<script lang="ts">
    let {children} = $props();
    import {base} from '$app/paths';

</script>

<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/about">About</a>
    <a href="{base}/contact">Contact</a>
</nav>

{@render children()}



