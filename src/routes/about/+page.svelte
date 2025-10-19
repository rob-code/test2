<script>
  import PageTitle from "../../components/pagetitle.svelte";
  import portrait from "$lib/images/mewithrobot.jpg";
</script>

<svelte:head>
  <title>Robert Brice - About</title>
</svelte:head>

<PageTitle pagetitle="Robert Brice" />

<div class="container">
  <div class="row photo-top">
    <div class="col-md-5 text-top">
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
        My work as a digital artist started in 2022 when I discovered I could
        work with art and technology in one unified, exploratory practice.
        Digital art is perhaps redefining what we mean by art, and also how we
        experience art. At its most adventourous, it is inspiring, magical and
        even astonishing. I find it represents a place of challenge and of
        comfort, where I can combine skills developed over a lifetime of work in
        science, technology and education, within a rich world of visual
        possibility.
      </p>

      <p class="lead text-body-secondary">
        Ideas come from many places; from observation, a chance encounter, or
        they grow unexpectedly from exploration. Increasingly I see my images as
        visual poems, a small fragment of life portrayed in visual form. But I'm
        just getting started and in this world of evolving toolkits, platforms
        and technologies, I am continually challenged to refine my artistic
        vision. The projects shown here reflect both learning and developing
        process. It feels chaotic, uncertain, but exciting and rich in
        possibility. Mastery, a long way off.
      </p>

      <p class="lead text-body-secondary">
        There is a unique and distinctive visual language that emerges in
        digital art. While my process is based on code, in-built randomness, and
        the prospect of enchantment in unexpected outcomes, the challenge
        remains the idea and its execution in the form of an image or an
        animation which is both eloquent and enjoyable.
      </p>

      <p class="lead text-body-secondary">
        My goal is to keep developing my craft through explorations in this
        space. But to be clear, code is there to serve, not dictate. I do not
        make using AI. If I have any sort of manifesto, it is that my work will
        be built with, and aim to build, human intelligence rather than anything
        artificial.
      </p>
    </div>
  </div>
</div>

<style>
  .photo-top {
    padding-top: 2em;
  }

  .text-top {
    padding-bottom: 2em;
  }
</style>
