<script lang="ts">
    import PageTitle from "../../../components/pagetitle.svelte";
    import ThumbnailGallery from "../../../components/thumbnailgallery.svelte";
    import products from "$lib/data/products.json";
    import { base } from "$app/paths";

    let { data } = $props();

    let product = $state({
        id: 0,
        img1: "",
        alt1: "",
        img2: "",
        alt2: "",
        img3: "",
        alt3: "",
        img4: "",
        alt4: "",
        name: "",
        dataitemid: "",
        price: "",
        description: "",
    });

    $effect(() => {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id == Number(data.id)) {
                product = products[i];
            }
        }
    });
</script>

<svelte:head>
    <title>Robert Brice - Add to Cart</title>
</svelte:head>

<PageTitle pagetitle={""} />

<div class="container py-5">
    <div class="row">
        <ThumbnailGallery {product} />

        <div class="col-md-6">
            <h1 class="h2 mb-3">{product?.name}</h1>
            <div class="mb-3">
                <span class="h4 me-2">£ {product?.price}</span>
            </div>

            <p class="mb-4">{product?.description}</p>

            <div class="d-grid gap-2">
                <button
                    class="snipcart-add-item btn btn-dark"
                    data-item-id={product?.name}
                    data-item-price={product?.price}
                    data-item-description={product?.description}
                    data-item-image="{base}/{product?.img1}"
                    data-item-name={product?.name}
                >
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</div>

<!-- <span class="text-muted text-decoration-line-through">$399.99</span>
                <span class="badge bg-danger ms-2">25% OFF</span> -->

<!-- 
            <div class="mb-3">
                <div class="d-flex align-items-center">
                    <div class="text-warning me-2">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="text-muted">(128 reviews)</span>
                </div>
            </div> -->

<!-- Color Selection -->
<!-- <div class="mb-4">
                <h6 class="mb-2">Color</h6>
                <div class="btn-group" role="group">
                    <input type="radio" class="btn-check" name="color" id="silver" checked>
                    <label class="btn btn-outline-secondary" for="silver">Silver</label>
                    <input type="radio" class="btn-check" name="color" id="gold">
                    <label class="btn btn-outline-secondary" for="gold">Gold</label>
                    <input type="radio" class="btn-check" name="color" id="black">
                    <label class="btn btn-outline-secondary" for="black">Black</label>
                </div>
            </div> -->

<!-- Quantity -->
<!-- <div class="mb-4">
                <div class="d-flex align-items-center">
                <label class="me-2">Quantity:</label>
                    <select class="form-select w-auto">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                </div>
            </div> -->

<!-- Additional Info -->
<!-- <div class="mt-4">
                <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-truck text-primary me-2"></i>
                    <span>Free shipping on orders over $50</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-undo text-primary me-2"></i>
                    <span>30-day return policy</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fas fa-shield-alt text-primary me-2"></i>
                    <span>2-year warranty</span>
                </div>
            </div> -->
