import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const firstname = data.get('First Name');
		const secondname = data.get('Last Name');
		const emailaddress = data.get('Email Address');
		const subject = data.get('Subject');
		const message = data.get('Message');
		let allFieldsCompleted = false;

		// if (!firstname || !secondname || !emailaddress || !subject || !message) {
       	// 	allFieldsCompleted = true;
		// } else {
		// 	return error(400, 'All fields must be completed');
		// }




		let response = await fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
      	mode: 'cors',
      	method: 'POST',
      	body: data})

		.then(response => {
			
		if(!response.ok) {

			console.log("Sorry, there's been an error - response status: " + response.status);
		 	redirect(308, '../email/error');
		} 	
		console.log(response.status + " " + response.statusText);
		console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message);
		redirect(303, '../email/success');



		
	// 	if (response.status === 500) {
	// console.log("Sorry, there's been an error - response status: " + error);
	// 	 	redirect(308, '../email/error');
	// 	}


		})

		// .catch(error => {
		// 	console.log("Sorry, there's been an error - response status: " + error);
		// 	redirect(308, '../email/error');
		// })

		

		// if(response.ok) {
		// 	console.log(response.status + " " + response.statusText);
		//  	console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message);
		// 	redirect(303, '../email/success');
	 	//   	return {success: true, allFieldsCompleted};

		// } else {
		// 	redirect(308, '../email/error');
		// 	return {success: false};	
		// }





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









// export const actions = {
//   send: async ({ request }) => {
//     const data = await request.formData();
//     const email = data.get('email');
//     const message = data.get('message');

//     if (!email || !message) {
//       return fail(400, { error: 'Email and message are required' });
//     }

    // try {
    //   const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //       user: VITE_EMAIL_USER,
    //       pass: VITE_EMAIL_PASS,
    //     },
    //   });

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