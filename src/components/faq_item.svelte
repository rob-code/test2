<script>
  let { content } = $props();
</script>

<hr/>

<div class="faq-item">
  <span class="faq-question"
    >{content.question}<a
      data-bs-toggle="collapse"
      href="#{content.id}"
      role="button"
      aria-expanded="false"
      aria-label={content.id}
      ><svg class="plus-icon">
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
        />
      </svg>
    </a></span
  >

  <div class="collapse faq-answer" id={content.id}>
    <!-- <div class="card card-body"> -->
    {content.answer}
    <!-- </div> -->
  </div>
</div>

<style>
  .faq-item {
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 5px;
  }

  .faq-question {
    font-size: 1.25rem;
    font-weight: 400;
  }

  .faq-answer {
    font-size: 1.1rem;
    font-weight: 300;
  }

  .plus-icon {
    fill: #000000;
    transform: scale(2.5);
    height: 26px;
    width: 26px;
    float: right;
    padding-top: 5px;
    margin-right: 10px;
  }
</style>
