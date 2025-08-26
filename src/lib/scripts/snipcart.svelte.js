

export const name = "test";

export function start () {

           document.addEventListener('snipcart.ready', () => {
			// You can safely use window.Snipcart here
			//Snipcart.events.on(...);

            return console.log("snipcart is ready from the script");

			// return snip = Snipcart.store.subscribe(() => {
			//  	let count = Snipcart.store.getState().cart.items.count
			//  	console.log("items in the checkout = " + count);
			//  });


		});
		
}
	
	