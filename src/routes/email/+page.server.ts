import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
	
        console.log("the form is submitted");
		return {success: true};
	}
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