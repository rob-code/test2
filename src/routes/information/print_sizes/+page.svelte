<script>
    import Hero from "./../../../components/hero.svelte";
    import flipflops from "$lib/images/thongs8.webp";
    import printsizes from "$lib/images/print_size_guide.webp";
</script>

<Hero
    content={{
        image: flipflops,
        text: "Print Sizes and Framing",
        alt: "information on print sizes",
    }}
/>

<div class="container">
    <div class="display-6 section-title">Print Sizes</div>

    <p class="policy-text">At present we offer prints in 2 sizes, small and medium. The dimensions shown in the table for a small and medium print refer to actual size of the printed surface. </p>

    <p class="policy-text">Each print is supplied with an additional 2cm white, blank border on the
    left, right and top edges of the print, and a 4 cm blank border along the bottom. This extra unprinted border gives space for the artist's signature and allows you to frame the print any way you wish.</p>

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




    <p class="policy-text">
        Larger prints are coming soon. But in the meantime custom sizes are also
        available. Please get in touch using the contact page if you wish to
        discuss custom sizes and print configurations.
    </p>

    <img
        class="size-image rounded mx-auto d-block"
        src={printsizes}
        alt="print size guide"
    />

    <div class="display-6 section-title">Framing Your Print</div>

    <p class="policy-text">
        Giclée prints are delicate and valuable. They'll last more than a
        lifetime of you take care of your print and have it professionally
        framed. A good framer will advise on how thick you might want your
        frame, whether you need a mount (or matt for our customers outside of
        the UK) and how thick this should be to complement the print and frame.
    </p>

    <p class="policy-text">
        Think about the size of the space you wish to fill. If it's a large
        space and you've bought a smaller print you can fill more space with a
        wide mount and a chunky frame. If it's a small space, no mount and a
        thin frame may suit you better. Bear in mind the weight of the glass
        too, your framer may insist on a chunkier frame if it's a large print
        which needs more support.
    </p>

    <p class="policy-text">
        It's also worth noting all our prints include a small white border with
        the design inset inside this, so you can choose not to include a mount
        as the print will look good in a frame without one - this can also make
        framing a bit cheaper. We personally think a mount adds a bit more style
        though.
    </p>

    <p class="policy-text">
        If you have bought a frame and the print needs trimming down slightly to
        fit in, make sure you measure very carefully, draw on guides of where to
        cut with a pencil and take it slow. You can't add paper back on if you
        cut too much off!
    </p>

    <p class="policy-text">
        Our prints are delicate so do make sure you handle them carefully.
        Giclée prints are printed with a very fine spray of ink over the paper
        surface, so throughout the framing process do not touch the surface of
        the print at all. You could easily scratch or scuff the design.
    </p>

    <div class="space"></div>
</div>

<style>
    .space {
        padding-bottom: 200px;
    }

    .size-image {
        width: 80%;
    }
</style>
