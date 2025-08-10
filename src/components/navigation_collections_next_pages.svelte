<script>
  let { previousPageTitle, previousPageLink, nextPageTitle, nextPageLink } = $props();
</script>

<div class="container">
  <div class="row project-pages-next-page">
    <div class="col">
      <p class="text-start text-body-secondary">
        <a href={previousPageLink} class="link-black"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>{previousPageTitle}</a
        >
      </p>
    </div>
    <div class="col">
      <p class="text-end text-body-secondary">
        <a href={nextPageLink} class="link-black"
          >{nextPageTitle}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg></a
        >
      </p>
    </div>
  </div>
</div>

<style>
  .text-start {
    padding-left: 2%;
    font-size: .8;
  }

  .text-end {
    padding-right: 2%;
    font-size:.8;
  }
</style>
