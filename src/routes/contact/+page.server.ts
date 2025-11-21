import type { Actions } from './$types';
import { error, redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const firstname = data.get('First Name');
		const secondname = data.get('Last Name');
		const emailaddress = data.get('Email Address');
		const phonenumber = data.get('Phone Number');
		const subject = data.get('Subject');
		const message = data.get('Message');
		const spamfilter = data.get('Spam Filter');

		let response = await fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
      	mode: 'cors',
      	method: 'POST',
      	body: data});

		//this will capture 404 and 500 errors
		if(!response.ok) {
			console.log("There's been an error. Response status: " + response.status + " " + response.statusText);
		 	redirect(308, '../contact/error');
		} else {
			console.log(response.status + " " + response.statusText);
			console.log(firstname + " " + secondname + " " + emailaddress + " " + "Phonenumber=" + phonenumber + " " + subject + " " + message + " " + spamfilter?.toString());
			redirect(303, '../contact/success')
		}

	//this catches no internet connection run locally but not when live from the server. 
	// Turns out the the try catch in the old website does not catch no internet either!!
	// I've got more to learn about handling network errors in svelte and more widely in web prgramming.
	//Turns out fetch out the box has alots of issues. ky is a library wirht looking at
	// try {     
	// ... fetch etc in here...

	
	// } catch (e: any) {

	// 		let errorresult = (JSON.stringify(e)).toString();
	// 		console.log(errorresult);

	// 		if((JSON.stringify(e)).toString() === '{}' ){
	// 			console.log('fetch failed');
	// 			redirect(308, '../email/error');
	// 		}


	// 		if((JSON.stringify(e)).toString() === '{"status":308,"location":"../email/error"}' ){
	// 			console.log('error');
	// 			redirect(303, '../email/error');
	// 		}
			
	// 		if((JSON.stringify(e)).toString() === '{"status":303,"location":"../email/success"}' ){
	// 			console.log('success');
	// 			redirect(303, '../email/success');
	// 		}

	// 		}
	}
} satisfies Actions;

export const prerender = false;
	
		
	
