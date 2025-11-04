<script lang="ts">
  import PageTitle from "../../components/pagetitle.svelte";
  import { enhance } from "$app/forms";
  import type { PageProps } from "./$types";
  import { goto } from "$app/navigation";
  let { data, form }: PageProps = $props();

  let a = Math.floor(Math.random() * 9) + 1;
  let b = Math.floor(Math.random() * 9) + 1;
  let placeholder = "To prevent spam please enter the sum of " + a + " + " + b;
  let c = a + b;
  let randomValue = c.toString();
  let spamcheck = $state("");

  let sendingData = $state(false);
</script>

<svelte:head>
  <title>Contact | Robert Brice</title>
  <meta name="description" content="Get in touch by email.">
</svelte:head>

<div class="container">
  <PageTitle pagetitle="Contact" />

  <form
    id="contact-form"
    method="POST"
    use:enhance={({}) => {
      sendingData = true;

      return async ({ result }) => {
        if (result.type === "redirect") {
          goto(result.location);
        }
      };
    }}
  >
    <div class="email-form">
      <div class="row email-row">
        <div class="col-md-2">
          <label class="email-field-title" for="firstname">First Name</label>
        </div>
        <div class="col-md-10">
          <input
            class="form-field input-field"
            id="firstname"
            type="text"
            placeholder="Firstname"
            name="First Name"
            required
          />
        </div>
      </div>

      <div class="row email-row">
        <div class="col-md-2">
          <label class="email-field-title" for="secondname">Last Name</label>
        </div>
        <div class="col-md-10">
          <input
            class="form-field input-field"
            id="secondname"
            type="text"
            placeholder="Lastname"
            name="Last Name"
            required
          />
        </div>
      </div>

      <div class="row email-row">
        <div class="col-md-2">
          <label class="email-field-title" for="emailaddress"
            >Email Address</label
          >
        </div>
        <div class="col-md-10">
          <input
            class="form-field input-field"
            id="emailaddress"
            type="email"
            placeholder="Email Address"
            name="Email Address"
            required
          />
        </div>
      </div>

      <div class="row email-row">
        <div class="col-md-2">
          <label class="email-field-title" for="subject">Subject</label>
        </div>
        <div class="col-md-10">
          <input
            class="form-field input-field"
            id="subject"
            type="text"
            placeholder="Subject"
            name="Subject"
            required
          />
        </div>
      </div>

      <div class="row email-row">
        <div class="col-md-2">
          <label class="email-field-title" for="message">Message</label>
        </div>
        <div class="col-md-10">
          <textarea
            class="form-field"
            id="message"
            rows="5"
            placeholder="Message"
            name="Message"
            required
          ></textarea>
        </div>
      </div>

      <spam-filter></spam-filter>
      <div class="row email-row">
        <div class="col-md-2">
          <label class="email-field-title" for="spam-input-field"
            >What is <span id="number-1">{a}</span> +
            <span id="number-2">{b}</span> ?</label
          >
        </div>
        <div class="col-md-10">
          <input
            id="spam-input-field"
            class="form-field input-field"
            bind:value={spamcheck}
            type="number"
            {placeholder}
            name="Spam Filter"
            required
          />
        </div>
      </div>

      <div class="row button-row">
        {#if sendingData}
          <div class="send-button-wrapper col-md-2" id="send-button-wrapper">
            <button id="send-button" class="send-button" type="submit"
              ><span
                class="spinner-border spinner-border-sm text-light spinner"
                role="status"
                aria-hidden="true"
              ></span>Sending</button
            >
          </div>
        {:else}
          <div class="send-button-wrapper col-md-2" id="send-button-wrapper">
            {#if spamcheck == randomValue}
              <button id="send-button" class="send-button" type="submit"
                >Send</button
              >
            {:else}<button
                id="send-button"
                class="send-button"
                type="submit"
                disabled>Send</button
              >
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </form>

  <p class="add-gap-at-bottom">&nbsp;</p>
</div>

<style>
  #send-button {
    width: 150px;
    text-align: center;
  }

  .button-row {
    padding-top: 30px;
  }

  .spinner {
    margin-right: 10px;
  }

  .email-form {
    padding-top: 0px;
  }

  .email-field-title {
    padding-top: 8px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 5px;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    color: rgba(33, 37, 41, 0.75);
  }

  .form-field {
    width: 100%;
    border-color: rgba(0, 0, 0, 0.4);
    border-width: 0.5px;
    border-style: solid;
    padding-left: 5px;
    line-height: 1.5;
    border-radius: 5px;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 0.5;
    font-size: 0.9em;
    padding-left: 3px;
  }

  textarea::placeholder {
    padding-top: 6px;
  }

  .input-field {
    height: 2.5em;
  }

  .email-row {
    padding-top: 10px;
    padding-bottom: 30px;
  }

  .send-button-wrapper {
    padding-left: 14px;
    padding-top: 20px;
  }

  .send-button {
    background-color: #008cba;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
  }

  .send-button:hover {
    background-color: #008fdf;
  }

  .send-button:active {
    background-color: #008fdf;
    box-shadow: 0 1px #999;
    transform: translateY(1px);
  }

  .send-button:disabled {
    background-color: #008fdf;
    box-shadow: 0 1px #999;
    transform: translateY(0px);
    opacity: 0.4;
  }

@media only screen and (max-width: 768px) {

.send-button-wrapper {
  padding-left: 11px;
}

.email-row{
  padding-top: 10px;
  padding-bottom:10px;

}

}

</style>
