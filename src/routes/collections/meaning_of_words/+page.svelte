<script>
    import mow_1 from "$lib/images/mow_1.png";
    import mow_2 from "$lib/images/mow_2.png";
    import mow_3 from "$lib/images/mow_3.png";
    import mow_4 from "$lib/images/mow_4.png";
    import AdjacentNavigation from "../../../components/navigation_collections_next_pages.svelte";
</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>A Meaning of Words | Robert Brice Collections</title>
  <meta name="description" content="Playing with the meaning of contrasting words to create new meaning and insight.">
</svelte:head>



    <section class="container">
          <h2 class="fw-light text-center project-page-header">A Meaning of Words</h2>
          <p class="lead text-body-secondary project-description-left">By displacing text to reveal a word or phrase, this project invites exploration of the meaning created by words, and the spaces between them.</p> 

          <p class="lead text-body-secondary project-description-left">Such explorations might reveal what emerges in the silence between the words we read. It may be an alternative interpretation of the literal purpose of a text or a memory of something written which, in the future, leads to us to approach or understand something differently. It could be a juxtaposition between two unconnected texts which when brought together reveals something unexpected, humorous or ironic. It may be a signpost to something we would like to remember.</p> 

          <p class="lead text-body-secondary project-description-left item-padding-bottom">Shown here is just one exploration which gives voice to the multiple points of view implied by these different and combined texts. The images use the full text of the speeches quoted, overlaid with well recognised, prayerful phrases.</p>
    </section>


    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">

          <div class="col">
            <div class="card">
              <img src="{mow_1}" alt="Meaning of Words" class="card-img-top">
              <div class="card-body">
                <p class="card-text">Speech by Donald Trump, January 6, 2021.</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="{mow_2}" alt="Meaning of Words" class="card-img-top">
              <div class="card-body">
                <p class="card-text">Speeches by Liz Truss and Kwazi Kwarteng, 2022.</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="{mow_3}" alt="Meaning of Words" class="card-img-top">
              <div class="card-body">
                <p class="card-text">Transcripts of WhatsApp messages, UK Covid Inquiry, 2023.</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="{mow_4}" alt="Meaning of Words" class="card-img-top">
              <div class="card-body">
                <p class="card-text">Speech by Vladimir Putin, February 24th, 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>

    <AdjacentNavigation 
          previousPageTitle="Block Colour Portraits" 
          previousPageLink = "/collections/block_colour_portraits" 
          nextPageTitle="Not Shot David" 
          nextPageLink="/collections/not_shot_david" 
    />


