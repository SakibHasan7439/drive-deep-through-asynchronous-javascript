async function fetchProducts() {
    try {
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
          );
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Failed to fetch: ${error}`);
    }
};

fetchProducts();