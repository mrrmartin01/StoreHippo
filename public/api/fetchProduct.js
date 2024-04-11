const getProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=40&skip=30');
        if (!response.ok) {
            throw new Error('Your netwrok may be unstable');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error("There seems to be an error with the API");
    }
}

export default getProducts;
