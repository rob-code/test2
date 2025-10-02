<script>
    import Hero from "./../../../components/hero.svelte";
    import flipflops from "$lib/images/thongs8.webp";
    import printsizes from "$lib/images/print_size_guide.webp";
    import frameexample from "$lib/images/frame_example.webp";
</script>

<Hero
    content={{
        image: flipflops,
        text: "Print Sizes and Framing",
        alt: "information on print sizes",
    }}
/>

<div class="container">
    <div class="display-6 information-title">Print Sizes</div>

    <p class="information-text">
        At present we offer prints in 2 sizes, small and medium. Larger prints
        are coming soon.
    </p>

    <p class="information-text">
        The dimensions shown in the table below for Small Print and Medium Print
        refer to actual size of the printed surface. Each print is supplied with
        an additional 2cm white, blank border on the left, right and top edges
        of the print, and a 4 cm blank border along the bottom to give space for
        the artist's signature. These blank borders give you the freedom to
        frame the print any way you wish.
    </p>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Size</th>
                <th scope="col">Height (mm)</th>
                <th scope="col">Width (mm)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Small Print</th>
                <td>210</td>
                <td>326</td>
            </tr>
            <tr>
                <th scope="row">Small Print + Border</th>
                <td>270</td>
                <td>366</td>
            </tr>
            <tr>
                <th scope="row">Medium Print</th>
                <td>297</td>
                <td>462</td>
            </tr>
            <tr>
                <th scope="row">Medium Print + Border</th>
                <td>357</td>
                <td>502</td>
            </tr>
        </tbody>
    </table>

    <img
        class="size-image rounded mx-auto d-block"
        src={printsizes}
        alt="print size guide"
    />

    <div class="display-6 information-title">Framing Your Print</div>

    <p class="information-text">
        Please handle the print with care and avoid touching its delicate
        surface which is very easy to mark or scratch.
    </p>

    <p class="information-text">
        Althrough delicate, a Giclée print will last for many years if you
        display it in a good quality frame. To get the most from your print,
        please consider the size, thickness, colour and design of your frame,
        and whether you need a mount (or mat) between the print and the frame.
    </p>

    <p class="information-text">
        The size of your frame may depend on where your picture will hang. If
        your wall space is large you can make your print more dramatic with a
        large mount and frame. If space is small, it may work better to have no
        mount and just a frame. Either way please consider these factors with
        your framer.
    </p>

    <p class="information-text">
        As shown below, we have had success framing medium sized prints (in this case striped socks and cheeseburgers from the everyday icons collection) with a 5 - 7cm cream/off white mount in a simple 2cm bleached white timber frame.
    </p>
    <img
        class="size-image rounded mx-auto d-block"
        src={frameexample}
        alt="print size guide"
    />

    <p class="information-text">
        If you already have a frame and this is larger than the print, then we
        would recommend having a professional framer cut a mount for you to fit
        your frame and print. This does not cost much and can make a very low
        cost frame (say from IKEA) look fantastic.
    </p>

    <div class="space"></div>
</div>

<style>
    .space {
        padding-bottom: 50px;
    }

    .size-image {
        width: 80%;
        padding-top: 35px;
        padding-bottom: 40px;
        border-radius: 10%;
    }

    .information-title {
        color: #000000;
        padding-bottom: 15px;
        font-size: 1.25rem;
        font-weight: 400;
    }

    .information-text {
        color: #000000;
        font-size: 1.1rem;
        font-weight: 300;
        padding-bottom: 5px;
    }

    .table {
        margin-top: 30px;
        margin-bottom: 40px;
    }

    th,
    tr {
        color: #000000;
        font-size: 95%;
        font-weight: 500;
    }
</style>
