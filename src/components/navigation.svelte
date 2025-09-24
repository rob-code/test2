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
          <a class="nav-link active" href="/"
            ><img src={flipflops} alt="flipflops" width="28" /></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/shop">Shop</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/collections"
            >Collections</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/about"
            >About</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-label="blah blah" href="/contact"
            >Contact</a
          >
        </li>
      </ul>
    </div>
    <!-- <button class="snipcart-checkout cart-button" aria-label="blah blah"
      ><svg class="cart-icon">
        <path
          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        />
      </svg>
      <span class="position-absolute badge rounded-pill bg-dark"
        ><span class="snipcart-items-count"></span></span>
    </button> -->
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
      <a class="nav-link active" href="/"
        ><img src={flipflops} alt="flipflops" width="40" /></a
      >
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
          <a class="nav-link active" href="/collections">Collections</a>
        </li>
        <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/about">About</a>
        </li>
        <li class="nav-item" data-bs-toggle="offcanvas">
          <a class="nav-link active" href="/contact">Contact</a>
        </li>
      </ul>
    </div>

    <div class="social-icons-wrapper">
      <hr />
      <a
        href="https://www.instagram.com/robertbrice_art"
        aria-label="blah blah"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="footer-icon"
          viewBox="0 0 16 16"
          ><path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  .bg-dark2 {
    --bs-bg-opacity: 1;
  }

  .navbar {
    --bs-navbar-padding-y: 0;
    background-color: #ff0266;
    height: 45px;
  }

  .nav-item {
    padding-right: 0.8em;
  }

  .offcanvas {
    background-color: #ff0067;
    --bs-offcanvas-width: 75%;
  }

  .offcanvas-text {
    color: white;
  }

  .navbar-toggler {
    color: rgba(255, 255, 255, 0);
  }

  .navbar-collapse-icon {
    fill: #ffffff;
    transform: scale(1.9);
    width: 26px;
    height: 26px;
    padding-top: 4px;
  }

  .announcement {
    background-color: #212121;
    color: white;
    font-size: 0.85rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }

  .announcement-icon {
    fill: #ffffff;
    transform: scale(1);
    width: 26px;
    height: 26px;
    padding-top: 5px;
  }

  .social-icons-wrapper {
    margin-top: 100px;
  }

  hr {
    border-width: 1px;
    opacity: 0.4;
  }

  .footer-icon {
    fill: #ffffff;
    height: 18px;
    width: 18px;
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
