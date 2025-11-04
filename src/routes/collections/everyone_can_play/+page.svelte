<script>
    import cricket_1 from"$lib/images/cricket-1.png";
    import rugby_3 from "$lib/images/rugby-3.png";
    import footballs_2 from "$lib/images/footballs-2.png";
    import AdjacentNavigation from "../../../components/navigation_collections_next_pages.svelte";
</script>

<svelte:head>
  <!-- all the other meta tags go in there for the page -->
  <title>Everyone Can Play | Robert Brice Collections</title>
  <meta name="description" content="Celebrating inclusivity and diversity in sport.">
</svelte:head>



   <section class="container">
        <h2 class="fw-light text-center project-page-header">Everyone Can Play</h2>
        <p class="lead text-body-secondary project-description-centre item-padding-bottom">Sport in all its forms is better with wide participation. Positive attitudes to improvement and excellence, irrespective of background, make healthier and happier people who want to be active and involved. In other words, everyone can play.</p>
    </section>

    <div class="bg-body-tertiary">
      <div class="col mx-auto item-padding-top container">
        <div class="card">
          <img src="{cricket_1}" alt="Three cricket balls" class="card-img-top">
        </div>
      </div>     
    </div>

    <div class="bg-body-tertiary">
      <div class="col mx-auto item-padding-top container">
        <div class="card">
          <img src="{rugby_3}" alt="Three rugby balls" class="card-img-top">
        </div>
      </div>     
    </div>

    <div class="bg-body-tertiary">
      <div class="col mx-auto item-padding-top item-padding-bottom container">
        <div class="card">
          <img src="{footballs_2}" alt="Three footballs" class="card-img-top">
        </div>
      </div>     
    </div>

   <section class="container">
        <p class="lead text-body-secondary project-description item-padding-top"> In 2023 the Independent Commission for Equity in Cricket (ICEC) released a report "Holding up a Mirror to Cricket". A subsidiary report "It's Not Banter: Lived experiences of discrimination in cricket" prepared by The Foundation for the ICEC provided additional and powerful testimony of the effect of discrimination on peoples' lives and wellbeing. It's a disturbing read. Discrimination is also present in rugby and football. But of course it is not just sport, taken at its fullest, the ICEC report holds up a mirror to UK society.</p>

        <p class="lead text-body-secondary project-description">These reports struck a chord and almost immediately the idea for this series of images popped into my head. Using colour as a metaphor for diversity, "Everyone Can Play" is my response to these reports and the enduring issue of discrimination.</p>
    </section>


    <AdjacentNavigation 
          previousPageTitle="Collections" 
          previousPageLink = "../collections" 
          nextPageTitle="Everyday Icons" 
          nextPageLink="/collections/everyday_icons" 
    />


