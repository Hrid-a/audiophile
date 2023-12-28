import { useEffect, useState } from "react"
import { api } from "../utlis/axios";

export const useSinlgeProduct = (id) => {

    const [product, setProduct] = useState(null);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const getCategories = async () => {
            try {
                const { data } = await api.get(`/products/${id}`, { signal })
                setProduct(data.product)

            } catch (error) {
                console.log(error)
            }

        }

        !product && getCategories();

        return () => controller.abort();
    }, [product, id]);

    return product;
}
