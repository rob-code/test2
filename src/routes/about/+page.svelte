<script>
  import "$lib/styles.css";
  import portrait from "$lib/images/RobertBriceAboutPhoto2.jpg";
  import mewithcomputer1983 from "$lib/images/mewithcomputer1983.webp";
</script>

<svelte:head>
  <title>Robert Brice - About</title>
</svelte:head>

<section class="text-center container">
  <div class="row image-group-header">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light title-size title-block">Robert Brice</h1>
    </div>
  </div>
</section>

<div class="container">
  <div class="row" style="padding-top: 2em;">
    <div class="col-md-7 order-2">
      <p class="lead text-body-secondary">
        The use of computers in static and moving image making is
        incredibly broad and ever changing, new tools appear all the time. Its
        easy to get diverted by the technology and to become overwhelmed by the
        endless amount of new frameworks, languages and technqiues to learn.So
        while I balance the need to learn and find the tools that fit with what
        I want to achieve, I am drawn back always to a few simple priciples.
        What do I want to say? What is the narrative, or increasingly I realise
        what is the poem I am trying to write in the form of an image? Isn't an
        image after all a piece of poetry, a story, a small nugget of meaning
        portrayed in visual form? My paellete is the coide and my pigment are
        the pixels that make up the image, but as always the challenge is the
        idea and its execution.
      </p>

      <p class="lead text-body-secondary">
        For the last 2 years, I have been developing a practice in digital art.
        While the landscape of tools and technologies available to the digital
        artist has never been greater and contiunues to grow, I have focused on
        learning by creating and developing projects. Some of these projects are
        shown here on my site. As time goes on and my range increases, I expect
        what I make will change.
      </p>
      <p class="lead text-body-secondary">
        So far I have developed projects in javascript, java, C++ and Blender. I
        am currently learning vvvv.
      </p>
      <p class="lead text-body-secondary">
        I have degrees in physics, environmental management and education, and
        have enjoyed careers as a renewable energy technologist and as a physics
        teacher. Alongside these day jobs I have always pursued interests in
        music, art and sailing. The door into digital art opened when I realised
        I could combine my interests in art and technology in one practice.
      </p>
    </div>
    <div class="col-md-5 order-1">
      <div class="card">
        <img
          src={portrait}
          alt="Portrait with large robot"
          class="card-img-top"
        />
        <img
          src={mewithcomputer1983}
          alt="Portrait with large robot"
          class="card-img-top"
        />
      </div>
    </div>
  </div>
</div>
