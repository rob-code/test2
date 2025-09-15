<script>
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    let { title } = $props();
    
    onMount(() => {
        afterNavigate(() => {
            // if the embed exposes a safe re-init, call it; otherwise this is a no-op
            // (doesn't change the standard snippet — just lets it see new DOM)
            // @ts-ignore
            window.Shoprocket?.init?.();
        });
    });

</script>


<div class="container">
{@html `<div class="sr-element sr-products" data-embed="multiple_products"><script type="application/json" data-config="embed">{
    "publishable_key": "sr_live_pk_2c1923c9065693805a48c24b7916889f1744",
    "options": {
        "products_to_display": "all",
        "categories": [],
        "products": [],
        "exclude_products": [],
        "exclude_product_categories": [],
        "image_dimension_value": "fit",
        "image_aspect_ratio": "portrait",
        "button_style": "on_hover",
        "variation_style": "on_hover",
        "open_product_in": "in_page",
        "button_position": "inline",
        "product_default_sorting_order": "product_order",
        "product_pagination_limit": "12",
        "desktop": {
            "items_per_row": 3
        },
        "mobile": {
            "items_per_row": 1
        },
        "hide_out_of_stock": "0"
    },
    "includes": {
        "show_search_box": "1",
        "show_sort_by": "0",
        "show_per_page": "0",
        "show_category_dropdown": "1",
        "show_currency_dropdown": "1",
        "show_language_dropdown": "1",
        "show_product_filters": "0",
        "show_product_name": "1",
        "show_product_price": "1",
        "show_product_image": "1",
        "show_product_summary": "1",
        "open_modal_on_image_click": "1",
        "show_view_product_button": "1",
        "show_add_to_cart_button": "0",
        "show_min_max_order_quantity": "1",
        "show_sale": "0",
        "show_free_shipping": "0",
        "show_new_product": "0",
        "show_digital_download": "0",
        "show_pwyw": "0",
        "image_swap": "1",
        "show_button_icons": "1",
        "mobile": {
            "show_search_box": "1",
            "show_sort_by": "0",
            "show_per_page": "0",
            "show_category_dropdown": "1",
            "show_currency_dropdown": "1",
            "show_language_dropdown": "1",
            "show_product_filters": "0"
        }
    },
    "product_popup": {
        "show_product_name": "1",
        "show_product_price": "1",
        "show_product_summary": "1",
        "show_product_description": "1",
        "show_product_image": "1",
        "show_add_to_cart_button": "1",
        "show_select_quantity": "1",
        "show_image_thumbnails": "1",
        "show_product_reviews": "1",
        "show_product_sku": "1",
        "show_product_categories": "1",
        "show_social_sharing_icons": "1",
        "show_related_products": "1",
        "thumbnail_layout": "horizontal_below",
        "image_dimension_value": "fit",
        "image_aspect_ratio": "portrait",
        "variation_styling": "dropdown",
        "show_min_max_order_quantity": "1",
        "show_sale": "0",
        "show_free_shipping": "0",
        "show_new_product": "0",
        "show_digital_download": "0",
        "show_pwyw": "0",
        "show_product_tabs": "1",
        "image_zoom": "1",
        "lightbox_gallery": "1",
        "show_stock": "0",
        "show_button_price": "0"
    },
    "styles": {
        "align_content": "center",
        "product_title": "#314d5d",
        "product_price": "#2d2d2d",
        "product_summary": "#777777",
        "button_background": "#233642",
        "button_color": "#ffffff",
        "view_product_button_background": "#233642",
        "view_product_button_color": "#ffffff",
        "view_cart_button_background": "#233642",
        "view_cart_button_color": "#ffffff",
        "product_background": "#ffffff",
        "modal_background": "#ffffff",
        "button_font_weight": "normal",
        "popup": {
            "colors": {
                "product_title": "#333",
                "product_price": "#666666",
                "product_summary": "#666666",
                "button_background": "#233642",
                "button_color": "#ffffff",
                "product_active_tab_background": "#f5f5f5"
            },
            "modal_width": "1367",
            "modal_margin": "27",
            "button_width": "100"
        },
        "embed_width": "1098",
        "embed_margin": "10",
        "product_spacing": "11",
        "product_padding": "12",
        "button_radius": "10",
        "filters_border_width": "2",
        "filters_border_radius": "30",
        "filters_padding": "0",
        "image_radius": "0",
        "product_price_font_size": "15",
        "product_summary_font_size": "15",
        "product_name_font_size": "15"
    }
}</script></div><script async src="https://cdn.shoprocket.io/loader.js"></script>`}
</div>
