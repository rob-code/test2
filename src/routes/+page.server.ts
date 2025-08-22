import type { Actions } from './$types';

let isCookieSet = new Boolean(false);
const cookiename = 'euconsent';
let duration = 60 * 60 * 24 * 30; //30 days in seconds

export function load({ cookies }) {

    let cookie = cookies.get(cookiename);

    if (cookie) {
        return { isCookieSet : true };
    } else {
        return { isCookieSet : false };
    }
}

export const actions = {

    //When a cookies epxires the browser deletes it. 
    //Once set, its not possible to read the expiry date of a cookie.
    // cookies.set(cookiename, 'accepted', { path: '/', httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 30 });

    consent: async ({ cookies, request }) => {
        cookies.set(cookiename, 'accepted', { path: '/', secure: true, maxAge: duration});
        return { isCookieSet : true};
    },

    reject: async ({ cookies, request }) => {
        cookies.set(cookiename, 'rejected', { path: '/', secure: true, maxAge: duration});
        return { isCookieSet : true};
    },

    delete: async ({ cookies, request }) => {
        cookies.delete('euconsent', { path: '/' });
    }

} satisfies Actions;

export const prerender = false;

