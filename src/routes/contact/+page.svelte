<script lang="ts">
    import "$lib/robertbrice.css";

    import { enhance } from "$app/forms";
    import type { PageProps } from './$types';
    import { goto } from "$app/navigation";
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

       <div class="fw-light title-size" style="padding-top: 1em;">How can I help?</div>

       <form id="contact-form" method="POST" use:enhance={({}) => {
			    
         sendingData = true;
			    
        return async ({ result }) => {

          if(result.type ==='redirect') {
                goto(result.location);
            }
			    }
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

          <div class="row button-row">
                {#if sendingData }
                 <div class="send-button-wrapper col-md-2" id="send-button-wrapper">
                    <button id="send-button" class="send-button" type="submit"><span class="spinner-border spinner-border-sm text-light spinner" role="status" aria-hidden="true"></span>Sending</button> 
                 </div>
                {:else}
                      <div class="send-button-wrapper col-md-2" id="send-button-wrapper">
                      {#if spamcheck == randomValue} <button id="send-button" class="send-button" type="submit">Send</button> 
                        {:else}<button id="send-button" class="send-button" type="submit" disabled>Send</button>
                      {/if}
                      </div>
                {/if}
          </div>

        </div>
      </form>

      <p class="add-gap-at-bottom">&nbsp;</p>

    </div>
    


  </main>



  <style>
    #send-button{
      width: 150px;
      text-align: center;
    }

    .button-row{
      padding-top: 30px;

    }

    .spinner{
      margin-right: 10px;
    }

  </style>

