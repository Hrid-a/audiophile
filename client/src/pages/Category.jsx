import { useSearchParams } from "react-router-dom"
import { useCategoryProducts } from "../hooks/useCategoryProducts";
import { useSelector } from "react-redux";
import Wrapper from "../components/Wrapper";
import CategoryProduct from "../components/CategoryProduct";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import SingleProductSkeleton from "../components/SingleProductSkeleton";


const Category = () => {
    const [param] = useSearchParams();
    const categories = useSelector(state => state.category.categories);
    const categoryName = param.get('category');
    const category = categories.find(category => category.category === categoryName);

    const products = useCategoryProducts(category._id);

    return (
        <div>
            <div className="bg-clr-bg p-24 text-white font-bold  text-[28px] sm:text-4xl lg:text-5xl text-center uppercase tracking-wider">
                <h2>{categoryName}</h2>
            </div>
            <Wrapper>
                <section>
                    {
                        products.length ?
                            products.map((product, index) => <CategoryProduct key={product._id} product={{ ...product }} idx={index} />)
                            :
                            <SingleProductSkeleton />
                    }
                </section>
                <div className="my-32">
                    <Categories />
                </div>
                <AboutUs />
            </Wrapper>
        </div>
    )
}

export default Category