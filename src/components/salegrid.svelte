<script>
    let { prints } = $props();
</script>

<div class="album py-5">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
            {#each prints as print}
                <div class="col">
                    <a href="shop/{print.id}" class="print-title">
                        <img
                            src={print.img1}
                            alt={print.alt}
                            class="card-img-top"
                        />{print.name}</a
                    >
                    <div class="price">£ {print.price}</div>
                </div>
            {/each}
        </div>
    </div>
</div>
