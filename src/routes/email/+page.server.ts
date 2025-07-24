import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';


export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const firstname = data.get('First Name');
		const secondname = data.get('Last Name');
		const emailaddress = data.get('Email Address');
		const subject = data.get('Subject');
		const message = data.get('Message');
		
		let response = await fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
      	mode: 'cors',
      	method: 'POST',
      	body: data});
		
		if(response.ok) {
			console.log(response.status + " " + response.statusText);
		 	console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message);

	 	  	return {success: true};
		} else {
			return {success: false};	
		}





	}



    // .then(response => {
    //     if(response.ok) {
    //    //   redirect(300, '/success');
	// 	  console.log(response.status + " " + response.statusText);
	// 	  console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message);
	// 	  return {success: true};
	// 	//   window.location.href = "thankyou.html";
    //     //   form.reset();
    //     //   button.innerHTML = '<button id="send-button" class="send-button" type="submit" disabled="true">Send</button>';

    //     }})      .catch(error => {
	//            console.log("Error! " + error.message);
	// 		   // redirect(300, '/success');
	//           // alert("Sorry, there's been an error - response status: " + response.status);	
    //  })
	// }
} satisfies Actions;

export const prerender = false;







// import nodemailer from 'nodemailer';
// import { VITE_EMAIL_USER, VITE_EMAIL_PASS } from '$env/static/private';

// export const actions = {
//   send: async ({ request }) => {
//     const data = await request.formData();
//     const email = data.get('email');
//     const message = data.get('message');

//     if (!email || !message) {
//       return fail(400, { error: 'Email and message are required' });
//     }

//     try {
//       const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//           user: VITE_EMAIL_USER,
//           pass: VITE_EMAIL_PASS,
//         },
//       });

//       await transporter.sendMail({
//         from: email,
//         to: 'your_email@example.com', // Replace with your email
//         subject: 'New Contact Form Submission',
//         text: `Email: ${email}\nMessage: ${message}`,
//       });

//       return { success: true };

//     } catch (err) {
//       console.error(err);
//       return fail(500, { error: 'Failed to send email' });
//     }
//   },
// };