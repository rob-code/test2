import type { Actions } from './$types';

// let now = new Date();
// let time = now.getTime();
// let expiryPeriod = 30 * 24 * 60 * 60 * 1000; 
// let expireTime = time + expiryPeriod;
// let expiryDate = new Date(expireTime).toUTCString();
// console.log("current time is:      " + time + "   expiry date is:    " + expireTime  + "        " + expiryDate);

let isCookieSet = new Boolean(false);
const cookiename = 'euconsent';
let duration = 60 * 60 * 24 * 30; //30 days in seconds

export function load({ cookies }) {

    let cookie = cookies.get(cookiename);

    if (cookie) {
        console.log(cookiename + " " + "cookie is set")
        return { isCookieSet : true };
    } else {
        console.log(cookiename + " " + "should be undefined");
        return { isCookieSet : false };
    }
}

export const actions = {

    //When a cookies epxires the browser deletes it. 
    //Once set, its not possible to read the expiry date of a cookie.
    // cookies.set(cookiename, 'accepted', { path: '/', httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 30 });

    consent: async ({ cookies, request }) => {
        console.log(cookiename + " " + "consent");
        cookies.set(cookiename, 'accepted', { path: '/', secure: true, maxAge: duration});
        return { isCookieSet : true};
    },

    reject: async ({ cookies, request }) => {
        console.log(cookiename + " " + "reject");
        cookies.set(cookiename, 'rejected', { path: '/', secure: true, maxAge: duration});
        return { isCookieSet : true};
    },

    delete: async ({ cookies, request }) => {
        console.log(cookiename + " " + "delete");
        cookies.delete('euconsent', { path: '/' });
    }

} satisfies Actions;

export const prerender = false;

