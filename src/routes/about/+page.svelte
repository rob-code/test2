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
        work with art and technology in one unified practice. Digital art
        represents a place of challenge and familiarity: a rich, exploratory
        world of visual possibility where I can use skills developed over a
        lifetime of work in science, technology and education.
      </p>

      <p class="lead text-body-secondary">
        Digital art is perhaps redefining what we mean by art, and also how we
        experience it. At its most effective, it is inspiring, magical, even
        astonishing. I am fascinated by the unique and distinctive visual
        language that emerges in digital art, and the many processes that are
        demonstrated for creating it.
      </p>

      <p class="lead text-body-secondary">
        This site is a repository of projects which reveal some of my
        explorations of idea and process. Projects often feel chaotic and
        uncertain, but always exciting. As in all art mastery is a long way off,
        but I am discovering my artistic vision by creating images and animations
        which are hopefully both eloquent and enjoyable.
      </p>

      <p class="lead text-body-secondary">
        While my process is based on software, in-built randomness, generative
        processes and the prospect of enchantment in unexpected outcomes, the
        work is always underpinned by a powerful, human idea. Code and
        technology are there to serve, not dictate. Increasingly I see my images
        as visual poems, small fragments or celebrations of life portrayed in
        visual form.
      </p>

      <p class="lead text-body-secondary">
        I do not make using AI. If I have any sort of manifesto, it is that my
        work is built with, and aims to build, human intelligence rather
        than anything artificial.
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
