import { useEffect } from "react"
import { api } from "../utlis/axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/products/productSlice";
const useProducts = () => {
    const products = useSelector(store => store.product.products);
    const dipsatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const getCategories = async () => {
            try {
                const { data } = await api.get("/products/all_products", { signal })
                dipsatch(addProducts(data.products));

            } catch (error) {
                console.log(error)
            }

        }

        !products.lenght && getCategories();

        return () => controller.abort();
    }, []);

}

export default useProducts