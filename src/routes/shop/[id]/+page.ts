export const load =  async ({ params }) => {
    return {
       id: params.id 
    }
}

export const prerender = false;