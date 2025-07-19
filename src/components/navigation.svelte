<script lang="ts">
    import {base} from '$app/paths';
</script>

<nav class="container">
    <ul>
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/about">About</a></li>
        <li><a href="{base}/contact">Contact</a></li>
    </ul>
</nav>

<style>
ul {
    display: flex;
    list-style: none;
    padding-left: 0;
}

li {
    margin-right: 20px;
}

</style>