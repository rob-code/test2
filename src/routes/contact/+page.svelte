<script lang="ts">
    import "../../lib/robertbrice.css";

    // let form = document.getElementById('contact-form');
    // let button = document.getElementById("send-button-wrapper");



// form?.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let formData = new FormData(form?);

//     console.log("form has been submitted with data : " + JSON.stringify(Object.fromEntries(formData)));  

//     button.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="sr-only"></span></div>';
    
//     fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
//       mode: 'cors',
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => {
//         if(response.ok) {
//           console.log('Success! ',  response);
//           window.location.href = "thankyou.html";
//           form.reset();
//           button.innerHTML = '<button id="send-button" class="send-button" type="submit" disabled="true">Send</button>';
//           setUpSpamTest();
//         } 
//           else 
//         {
//           console.log("response else " + response);
//           form.reset();
//           button.innerHTML = '<button id="send-button" class="send-button" type="submit" disabled="true">Send</button>';
//           alert("Sorry, there's been an error - response status: " + response.status);
//           setUpSpamTest();
//           }
//     })
//     .catch(error => {
//           console.log("Error! " + error.message);
//           alert("Sorry, there's been an error - response status: " + response.status);
//     })
// })


// function setUpSpamTest(){

//   document.getElementById('send-button').disabled = true;

//   a = random_number();
//   b = random_number();

//   document.getElementById('number-1').innerHTML = a;
//   document.getElementById('number-2').innerHTML = b;


//   const inputField = document.getElementById('spam-input-field');
//   inputField.placeholder = "To help prevent spam, please enter the sum of " + a.toString() + " + " + b.toString() + ".";

//   c = sum(a,b); 
//   inputField.addEventListener("input", validate);


//   function validate(e) {

//     if (c == Number(inputField.value)) {
//       document.getElementById('send-button').disabled = false;
//     } else {
//       document.getElementById('send-button').disabled = true;
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     setUpSpamTest();
// });

// function sum (a,b) {
//     c = a + b;
//     return c;
// };

// function random_number () {
//     return Math.floor(Math.random() * 9) + 1; //returns an integer between 1 and 9
// };

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


