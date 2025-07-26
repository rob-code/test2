
<!-- src/routes/email/+page.svelte
<script>
  import { enhance } from '$app/forms';

  let message = '';
  let success = false;
  let error = false;

  async function handleSubmit({ update, form }) {
    const { data, fetch } = update(); // `update` is from `use:enhance`
    if (data?.success) {
      success = true;
      message = 'Email sent successfully!';
    } else if (data?.error) {
      error = true;
      message = data.error;
    }
  }
</script> -->

<script lang="ts">
    import { enhance } from "$app/forms";
    import "$lib/robertbrice.css";
    import {redirect} from "@sveltejs/kit";
  
    import type { PageProps } from './$types';
    let { data, form }: PageProps = $props();
  
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    let placeholder = "To help prevent spam, please enter the sum of " + a + " + " + b;
    let c = a + b;
    let randomValue = c.toString();
    let spamcheck = $state("");
  
    let sendingData = $state(false); 
</script>

<svelte:head>
    <title>Robert Brice - Contact</title>
</svelte:head>

    <main>
      <div class="container">

	<!-- {#if form?.error}
		<p class="error">{form.error}</p>
	{/if} -->

       <div class="fw-light title-size" style="padding-top: 1em;">Svelte contact form experiments</div>

       <form id="contact-form" method="POST" use:enhance={() => {
			  sendingData = true;
			return async ({ update }) => {
				await update();
				sendingData = false;
			};
		}}>

        <div class="email-form">
          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="firstname">First Name</label>
            </div>
            <div class="col-md-10">  
              <input class="form-field" id ="firstname" type="text" placeholder="Firstname" name="First Name" required>
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="secondname">Last Name</label>
            </div>
            <div class="col-md-10">  
              <input class="form-field" id="secondname" type="text" placeholder="Lastname" name="Last Name" required>
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="emailaddress">Email Address</label>
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
              <input class="form-field" id="subject" type="text" placeholder="Subject" name="Subject" required>
            </div>
          </div>

          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="message">Message</label>
            </div>
            <div class="col-md-10">  
              <textarea class="form-field" id="message" rows="5" placeholder="Message" name="Message" required></textarea>
            </div>
          </div>

          <spam-filter></spam-filter>
          <div class="row email-row">
            <div class="col-md-2">
              <label class="email-field-title" for="spam-input-field">What is <span id="number-1">{a}</span> + <span id="number-2">{b}</span> ?</label>
            </div>
            <div class="col-md-10">  
              <input id="spam-input-field" class="form-field" bind:value={spamcheck} type="number" placeholder={placeholder} name="Spam Filter" required >
            </div>
          </div>

          <div class="row">
            <div class="send-button-wrapper col-md-2" id="send-button-wrapper">
               {#if spamcheck == randomValue} <button id="send-button" class="send-button" type="submit">Send</button> 
                {:else} <button id="send-button" class="send-button" type="submit" disabled>Send</button>{/if}
            </div>
            <!-- {#if form?.success} <p class="col-md-10" style="padding-top: 35px">Your email has been sent, thank you.</p>{/if} -->
                {#if sendingData }<div class="spinner-border text-primary" role="status"><span class="sr-only"></span></div>{/if}
          </div>

        </div>
      </form>

      <p class="add-gap-at-bottom">&nbsp;</p>

    </div>
    


  </main>


