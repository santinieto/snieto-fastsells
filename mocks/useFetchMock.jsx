import { useState, useEffect } from 'react';

export const useFetchMock = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        fetch('/mocks/products.json')
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

export const getOneProduct = async (productId) => {
    try {
        const response = await new Promise((resolve, reject) => {
            console.log(productId);
            setTimeout(() => {
                fetch('/mocks/products.json')
                .then((res) => {
                    if (!res.ok) {
                        console.error('Error al cargar el archivo:', res.status, res.statusText);
                        throw new Error('Error al cargar products.json');
                    }
                    return res.json();
                })
                .then(resolve)
                .catch((err) => {
                    console.error('Error en el fetch:', err);
                    reject(err);
                });
            }, 2000);
        });

        const foundProduct = response.find((item) => item.id === String(productId));
        if (!foundProduct) {
            throw new Error(`Producto con id ${productId} no encontrado`);
        }

        return foundProduct;
    } catch (error) {
        throw error;
    }
};

export default useFetchMock;
