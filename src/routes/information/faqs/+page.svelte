<script>
  import Hero from "./../../../components/hero.svelte";
  import FaqItem from "./../../../components/faq_item.svelte";
  import glasses from "$lib/images/style_collection_10.webp";

</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Frequently Asked Questions | Robert Brice</title>
  <meta name="description" content="FAQ's for print purchases">
</svelte:head>

<Hero content = {{
  image: glasses, 
  text: "FAQ's",
  alt: "Frequently asked questions"
}} />

<div class="container">

<!-- <div class="display-6 page-title">FAQ's</div> -->

<FaqItem content={{
  question: "What are Giclée prints?",
  answer: "Giclée  prints are the best the art world can offer and will last up to 75 years. Giclée's (pronouced jhee-clay) are produced using 12 pigment inks which are microscopically sprayed onto the paper to reproduce around 98% of the colour spectrum. They will resist fading even when exposed to sunlight. The paper is archival quality ph neutral 280gsm Natural White Smooth Cotton. Note that the colour of the print may vary slightly from that shown on your monitor. The prints feel wonderful and look great.",
  id: "whataregiclee"
}}/>

<FaqItem content={{
  question: "Are my images made with AI?",
  answer: "No. The images are generated from computer code that I have written. That's the fun and the challenge of doing this work. They are not hand drawn or photographed. AI has not been used in any part of the process. The combinations of colour, shape and so on are generated randomly so I often have to produce many print options before I find one that feels like it sings. The prints you see here are some of my favourites from that process.",
  id: "madewithai"
}}/>

<FaqItem content={{
  question: "Are the prints signed?",
  answer: "Yes. All prints sold are signed by the artist.",
  id: "signed"
}}/>

<FaqItem content={{
  question: "Can I order a custom size or design?",
  answer: "Yes, I am happy to offer custom sizes and designs. The designs offered for sale have been developed to work well with current print sizes. A larger print may require some design changes so it remains well balanced at larger scales. The colour combinations of each digital master are generated randomly from a restricted colour palette. Layout, colour and size can all be tailored to suit custom requirements. Please get in touch if you would like to discuss this option.",
  id: "customsize"
}}/>

<div class="space"></div>


</div>


<style>
  .space {
    padding-bottom: 50px;
  }
</style>