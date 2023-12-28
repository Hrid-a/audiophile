import { useEffect } from "react"
import { api } from "../utlis/axios";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../redux/products/categorySlice";
const useCategories = () => {
    const categories = useSelector(store => store.category.categories);
    const dipsatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const getCategories = async () => {
            try {
                const { data } = await api.get("/categories/all_categories", { signal })
                dipsatch(addCategories(data.categories));

            } catch (error) {
                console.log(error)
            }

        }

        !categories.lenght && getCategories();

        return () => controller.abort();
    }, []);

}

export default useCategories