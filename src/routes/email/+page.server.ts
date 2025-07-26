import type { Actions, PageServerLoad } from './$types';
import { error, isHttpError, redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';


	// create: async ({ cookies, request }) => {
	// 	const data = await request.formData();

	// 	try {
	// 		db.createTodo(cookies.get('userid'), data.get('description'));
	// 	} catch (error) {
	// 		return fail(422, {
	// 			description: data.get('description'),
	// 			error: error.message
	// 		});
	// 	}
	// },






export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const firstname = data.get('First Name');
		const secondname = data.get('Last Name');
		const emailaddress = data.get('Email Address');
		const subject = data.get('Subject');
		const message = data.get('Message');
		const spamfilter = data.get('Spam Filter');


		let response = await fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
      	mode: 'cors',
      	method: 'POST',
      	body: data});
	
	try{	
		if(!response.ok) {
			console.log("Sorry, there's been an error - response status: " + response.status);
		 	redirect(308, '../email/error');
		}
		console.log(response.status + " " + response.statusText);
		console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message + " " + spamfilter?.toString());
		redirect(303, '../email/success');

		}
		


	catch(e: any)	{

			let errorresult = (JSON.stringify(e)).toString();
			console.log(errorresult);

			if((JSON.stringify(e)).toString() === '{"status":303,"location":"../email/success"}' ){
				console.log('hey hey');
				redirect(303, '../email/success');
			}




//			 "{"status":303,"location":"../email/success"}";

		// if (isHttpError(e)) {
		// 	let errorresult = JSON.parse(e.toString());
		// 	console.log('errorresult' + " " + 'its the http error');
		// 	}
			console.log('content of the error is:  ' + JSON.stringify(e));
		 	redirect(302, '../email/error');
	}



			// console.log("there's been an error");
			// console.log(data.get('description'));
			// console.log((error as Error).message);

			// redirect(303, "../email/error");
		// 	return fail(422, {
		// 		description: data.get('description'),
		// 		error: (error as Error).message
		// });
	}

	





		// let response = await fetch("https://script.google.com/macros/s/AKfycbxnJQr-jqbyiUowGvjAiWDHeh35NRj9e0Z5sZdHAVFBeZTS1Ck0JNDB9iwaqS8xDLFK/exec", {
      	// mode: 'cors',
      	// method: 'POST',
      	// body: data})

		// .then(response => {
			
		// if(!response.ok) {

		// 	console.log("Sorry, there's been an error - response status: " + response.status);
		//  	redirect(308, '../email/error');
		// } 	
		// console.log(response.status + " " + response.statusText);
		// console.log(firstname + " " + secondname + " " + emailaddress + " " + subject + " " + message);
		// redirect(303, '../email/success');



		
	// 	if (response.status === 500) {
	// console.log("Sorry, there's been an error - response status: " + error);
	// 	 	redirect(308, '../email/error');
	// 	}


	//	})

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





	//}



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