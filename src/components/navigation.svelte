<script>
import flipflops from "$lib/images/favicon_180x180_2.webp";
</script>

<div class="announcement">
  <div class=" container">
    <a class="nav-link active text-center fw-light" href="/contact">
      <svg class="announcement-icon">
        <path
          d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
        />
      </svg>Thank you for visiting - please get in touch if you have any
      questions.</a
    >
  </div>
</div>

<nav class="navbar navbar-expand-md navbar-dark sticky-top">
  <div class="container bg-dark2">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      aria-label="offcanvas"
    >
      <svg class="navbar-collapse-icon">
        <path
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
    <div class="collapse navbar-collapse mr-auto" id="navbarCollapse">
      <ul class="navbar-nav mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" href="/"><img src={flipflops} alt="flipflops" width="28"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/shop">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    <button class="snipcart-checkout cart-button" aria-label="blah blah"
      ><svg class="cart-icon">
        <path
          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        />
      </svg>
      <span class="position-absolute badge rounded-pill bg-dark"
        ><span class="snipcart-items-count"></span></span
      >
    </button>
  </div>
</nav>

<div
  class="offcanvas offcanvas-start offcanvas-text"
  tabindex="-1"
  id="offcanvasExample"
  aria-labelledby="offcanvasExampleLabel"
>
  <div class="offcanvas-header">
    <span class="nav-item" data-bs-toggle="offcanvas">
      <a class="nav-link active" href="/"><img src={flipflops} alt="flipflops" width="40"></a>
    </span>
    <button
      type="button"
      class="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  <div class="offcanvas-body">
    <!-- <div>
      Some text as placeholder. In real life you can have the elements you have
      chosen. Like, text, images, lists, etc.
    </div> -->
    <div class="offcanvas-text">
      <ul class="navbar-nav mb-2 mb-md-0">
        <!-- <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/">Home</a>
        </li> -->
        <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/shop">Shop</a>
        </li>
        <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/projects">Projects</a>
        </li>
        <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/about">About</a>
        </li>
        <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</div>



<style>
.bg-dark2 {
  --bs-bg-opacity: 1;
}

.navbar {
  --bs-navbar-padding-y: 0;
  background-color: #FF0266;
  height: 45px;
}

.nav-item {
  padding-right: .8em; 
}

.offcanvas {
  background-color: #FF0067;
  --bs-offcanvas-width: 350px;
}

.offcanvas-text {
  color: white;
}

.navbar-toggler {
  color: rgba(255, 255, 255, 0);
}

.navbar-collapse-icon {
  fill: #FFFFFF;
  transform: scale(1.9);
  width: 26px;
  height: 26px;
  padding-top: 4px;
}

.announcement {
  background-color: #212121;
  color: white;
  font-size: .85rem;
  padding-top: .6rem;
  padding-bottom: .6rem;
}

.announcement-icon {
  fill: #FFFFFF;
  transform: scale(1);
  width: 26px;
  height: 26px;
  padding-top: 5px;

}

/* 
.btn-close.offcanvas-text {
  --bs-btn-close-color: #FFF;
  color: #FFF;
} */

/* .nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
} */

/* .nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
} */


</style>
