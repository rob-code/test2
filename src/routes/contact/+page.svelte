<script>
    import "../../lib/robertbrice.css";
</script>

<svelte:head>
    <title>Robert Brice - Contact</title>
</svelte:head>

    <main>


      <div class="container">

       <div class="fw-light title-size" style="padding-top: 1em;">How can I help?</div>

       <form id="contact-form">

        <div class="email-form">
          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="firstname">First Name *</label>
            </div>
            <div class="col-md-10">  
              <input class="form-field" id ="firstname" type="text" placeholder="Firstname" name="First Name" required>
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="secondname">Last Name *</label>
            </div>
            <div class="col-md-10">  
              <input class="form-field" id="secondname" type="text" placeholder="Lastname" name="Last Name" required>
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="emailaddress">Email Address *</label>
            </div>
            <div class="col-md-10">  
              <input class="form-field" id="emailaddress" type="email" placeholder="Email Address" name="Email Address" required>
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="subject">Subject</label>
            </div>
            <div class="col-md-10">
              <input class="form-field" id="subject" type="text" placeholder="Subject" name="Subject">
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="message">Message *</label>
            </div>
            <div class="col-md-10">  
              <textarea class="form-field" id="message" rows="5" placeholder="Message" name="Message" required></textarea>
            </div>
          </div>

          <spam-filter></spam-filter>
          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="spam-input-field">What is <span id="number-1">2</span> + <span id="number-2">4</span> ? *</label>
            </div>
            <div class="col-md-10">  
              <input id="spam-input-field" class="form-field" type="number" name="Spam Filter" required placeholder="To help prevent spam, please enter the sum of 2 + 4.">
            </div>
          </div>

          <div class="row">
            <div class="send-button-wrapper" id="send-button-wrapper">
              <button id="send-button" class="send-button" type="submit" disabled>Send</button>
            </div>
          </div>

        </div>
      </form>

      <p class="add-gap-at-bottom">&nbsp;</p>

    </div>
    
  </main>
