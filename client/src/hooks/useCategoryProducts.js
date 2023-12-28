import { useEffect, useState } from "react"
import { api } from "../utlis/axios";

export const useCategoryProducts = (id) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            const { data } = await api.get(`/products/all_products?category=${id}`);
            setProducts(data.products);
        }

        getProducts();

    }, [products.length, id])

    return products;
}
