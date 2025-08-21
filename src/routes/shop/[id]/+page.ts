import products from "$lib/data/products.json";


export const load =  async ({ params }) => {


    // for (var i = 0; i < products.length; i++) {
    //     if (products[i].id == Number(params.id)) {
    //         product = products[i];
    //         console.log(params.id + " " + products[i].id + " " + products[i].img );
    //         console.log(product);
    //     }

    // }

    return {
       id: params.id 

    }
}

