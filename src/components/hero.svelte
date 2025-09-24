<script>
    let { content } = $props();
</script>

<div class="jumbotron">
    <img class="hero-image" src={content.image} alt={content.alt} />
    <h1 class="text-center display-text">{content.text}</h1>

</div>




<style>
    .jumbotron {
        width: 100%;
        text-align: left;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .hero-image {
        width: 100%;
        max-height: 300px;
        overflow: hidden;
        object-fit: cover;
        opacity: 0.2;
    }

    .display-text {
        transform: translate(0%, -150px);
        font-size: 180%;
        font-weight: 400;
    }
</style>
