<script>
  import PageTitle from "../../components/pagetitle.svelte";
  import portrait from "$lib/images/mewithrobot.jpg";
  import mewithcomputer1983 from "$lib/images/me1983.webp";
</script>

<svelte:head>
  <title>Robert Brice - About</title>
</svelte:head>

<PageTitle pagetitle="Robert Brice" />

<div class="container">
  <div class="row" style="padding-top: 2em;">
    <div class="col-md-5">
      <div class="card">
        <img
          src={portrait}
          alt="Portrait with large robot"
          class="card-img-top"
        />
        <!-- <img
          src={mewithcomputer1983}
          alt="Portrait with computer in 1983"
          class="card-img-top"
        /> -->
      </div>
    </div>
    <div class="col-md-7">
      <p class="lead text-body-secondary">
        As a digital artist I balance technique - the work to find and master
        tools and processes that fit with what I want to achieve - with a few
        simple principles; what do I want to say, what is the story I want to
        tell?</p> 
        
        <p class="lead text-body-secondary">
        Increasingly I see the ideas that come to me as visual poems. After all, isn't an image a story, a small fragment of
        life portrayed in visual form? But ideas also appear as moods, colours and explorations. Sometimes its hard to say what they are about. While my palette is code and my
        pigments are pixels, as always, the greater challenge is the idea and
        its execution in the form of an image which is both eloquent and
        enjoyable.
      </p>

      <p class="lead text-body-secondary">
        It is clear that there is a visual language which emerges in digital art
        which is unique and distinctive. My goal is to keep developing my craft through explorations in this space. But to be clear, code is there to
        serve, not dictate. I do not make images using AI. If I have any sort of manifesto,
        it is that my work will be built with human and not artificial
        intelligence.
      </p>
      <p class="lead text-body-secondary">Alongside my career in renewable energy and physics teaching, I have pursued life long interests in music and art.  
        My work as a digital artist started in 2022 when I discovered I could work with art and technology in one unified practice.
      </p>
    </div>
  </div>
</div>
