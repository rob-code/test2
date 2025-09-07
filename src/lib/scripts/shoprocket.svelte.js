

export const name = "test";

export function start () {

 

        window.addEventListener('Shoprocket.ready', () => {
            // Listen for a page view
            console.log('shoprocket is ready from html')

        // Shoprocket.events.listen('cart.opened', (event) => {
        //     console.log(event);
        // });

        // Shoprocket.events.listen('page.viewed', (event) => {
        //     console.log(event);
        // });

		// Shoprocket.events.listen('cart.quantity_updated', (event) => {
        //     console.log(event);
        // });

		// Shoprocket.events.listen('cart.item_added', (event) => {
        //     console.log(event);
        // });

            });
		
}
	
	