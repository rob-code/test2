<script>
  import PageTitle from "../../components/pagetitle.svelte";
  import organic_lines from "$lib/images/organiclines.webp";
  import noisefield from "$lib/images/noisefield2.webp";
</script>

<svelte:head>
  <title>Education | Robert Brice</title>
  <meta
    name="description"
    content="Robert Brice is a digital artist based in Edinburgh."
  />
</svelte:head>

<div class="container">
  <PageTitle pagetitle="Courses" />

  <p
    class="lead text-body-secondary project-description-left"
    style="padding-bottom: 2rem"
  >
    With experience in running courses for various clients, and as one of the
    first chartered high school physics teachers to qualify in Scotland, Robert
    is an experienced educator who puts participants at the center of his
    teaching. Courses are rooted in Robert's current art and coding practice and
    aim to give participants a creative, inspiring learning experience which
    encourages participation and conversation as well as being relaxed and
    enjoyable. Each week you will make a new artwork. Please <a
      href="/contact"
      class="get-in-touch-link">get in touch</a
    > to enquire about a course.
  </p>

  <p class="lead text-body-secondary project-description-left"></p>

  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <img
            src={noisefield}
            alt="red noise field like hair"
            style="width:100%"
          />
          <h5 class="ed-card-heading">An Introduction to Digital Art</h5>
          <h5 class="ed-card-heading-2 text-body-secondary">
            Duration: 2.5 Hours
          </h5>
          <p class="card-text">
            This one off workshop combines a lecture and guided code-along. The
            lecture segment introduces participants to digital art and presents
            a selection of work from some of the most innovative, ground
            breaking digital artists working today. There are now many artists
            active in digital art producing work which is incredibly diverse;
            this introduction therefore reflects my own interests and introduces
            artists who's work I find inspiring, challenging and sometimes
            simply astonishing.
          </p>
          <p class="card-text">
            After the introductory lecture, participants will then move on to a
            gentle, guided code-along using the Processing software package. The
            purpose of this segment is to give participants experience of making
            a simple generative digital artwork.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <img
            src={organic_lines}
            alt="colourful wavy lines draw with code"
            style="width:100%"
          />
          <h5 class="ed-card-heading">Getting Started With Creative Coding</h5>
          <h5 class="ed-card-heading-2 text-body-secondary">
            Duration: 6 x 2.5 hours sessions
          </h5>
          <p class="card-text">
            This 6 week introductory level course introduces participants to
            digital art and develops artisanal coding skills in an expressive,
            creative context. By the end of the course, participants will have
            developed a solid foundation from which to make digital artworks of
            their own and to keep on learning. Prior coding experience is not
            required.
          </p>
          <p class="card-text">
            Week 1 will include an overview of contemporary digital art practice
            and how to work with basic shapes in Processing. In Weeks 2-3 we
            learn how to move shapes, work with colour, control our programs and
            write well designed, re-usable code. Week 4 will explore using noise
            and randomness to build generative artworks. In Week 5 we learn to
            write custom classes, and how to create and control instances of
            these classes when we have many objects in play. Week 6 examines
            interesting generative artworks to reveal the algorithms that make
            them, attempting to generalise a few different types and approaches
            before building our own more complex generative artwork.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .get-in-touch-link {
    height: auto;
    color: rgba(33, 37, 41, 0.75);
    line-height: 0px;
  }
</style>
