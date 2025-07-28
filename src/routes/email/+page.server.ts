import type { Actions, PageServerLoad } from './$types';
import { error, redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const firstname = data.get('First Name');
		const secondname = data.get('Last Name');
		const emailaddress = data.get('Email Address');
		const subject = data.get('Subject');
		const message = data.get('Message');
		const spamfilter = data.get('Spam Filter');

	try {
		let response = await fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
      	mode: 'cors',
      	method: 'POST',
      	body: data});

		if (response.ok) {
			console.log(response.status + " " + response.statusText);
			console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message + " " + spamfilter?.toString());
			redirect(303, '../email/success')
		}
		
		//this will capture 404 and 500 errors
		if(!response.ok) {
			console.log("There's been an error. Response status: " + response.status);
		 	redirect(308, '../email/error');
		}

	} catch (e: any) {

			let errorresult = (JSON.stringify(e)).toString();
			console.log(errorresult);

			if((JSON.stringify(e)).toString() === '{}' ){
				console.log('fetch failed');
				redirect(308, '../email/error');
			}


			if((JSON.stringify(e)).toString() === '{"status":308,"location":"../email/error"}' ){
				console.log('error');
				redirect(303, '../email/error');
			}
			
			if((JSON.stringify(e)).toString() === '{"status":303,"location":"../email/success"}' ){
				console.log('success');
				redirect(303, '../email/success');
			}

			}
	}
} satisfies Actions;

export const prerender = false;
	
		
	
