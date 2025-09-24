<script>
  import Hero from "./../../../components/hero.svelte";
  import FaqItem from "./../../../components/faq_item.svelte";
  import aviators from "$lib/images/aviators_13.webp";

</script>

<Hero content = {{
  image: aviators, 
  text: "FAQ's",
  alt: "some alt text"
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
  question: "Can I order a custom size?",
  answer: "Yes. I am happy to offer custom sizes. Please get in touch with your requirements and I will provide a quote for the size you need. Please note that delivery times for custom sizes will be longer than those for standard sizes as I will need to liaise with the printer.",
  id: "customsize"
}}/>

<div class="space"></div>


</div>


<style>
  .space {
    padding-bottom: 200px;
  }
</style>