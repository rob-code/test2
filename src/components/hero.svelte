<script>
    let { content } = $props();
</script>

<div class="jumbotron">
    <img class="hero-image" src={content.image} alt={content.alt} />
    <h1 class="display-5 display-text">{content.text}</h1>
</div>

<style>
    .jumbotron {
        width: 100%;
        text-align: left;
        background-size: cover;
        background-repeat: no-repeat;
        max-width: 100%;
    }

    .hero-image {
        width: 100%;
        max-height: 300px;
        overflow: hidden;
        object-fit: cover;
        opacity: 0.5;
    }

    .display-text {
        padding-left: 50px;
        padding-right: 50px;
        /* padding-top: 10px;
        padding-bottom: 10px; */
        position: absolute;
        left: 50%;
        transform: translate(-50%, -300%);
        /* background-color: #20202080; */
        color: black;
        font-size: 3.5rem;
    }
</style>
