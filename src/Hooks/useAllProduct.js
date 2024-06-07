import { useState, useEffect } from "react";

function useAllProduct() {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return { allProducts, error };
}

export default useAllProduct;