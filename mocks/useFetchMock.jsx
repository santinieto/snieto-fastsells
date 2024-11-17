import { useState, useEffect } from 'react';

const useFetchMock = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        fetch('./mocks/products.json')
                            .then((res) => {
                                if (!res.ok) throw new Error('Error al cargar products.json');
                                return res.json();
                            })
                            .then(resolve)
                            .catch(reject);
                    }, 3000);
                });
                setProducts(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

export default useFetchMock;
