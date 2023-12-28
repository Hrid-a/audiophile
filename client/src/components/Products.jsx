import { useSelector } from "react-redux"
import Button from "./Button";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Skeleton from "./Skeleton";

const Products = () => {
    const products = useSelector(state => state.product.products);
    if (!products.length) return <Skeleton />;
    let newProducts = Object.values(products.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = item;
        }

        return acc;
    }, {})).slice(1);


    return (
        <Wrapper>
            {
                newProducts.map((product, index) => (<section key={product._id} className={`grid lg:grid-cols-2 gap-8 lg:items-center overflow-hidden   py-10 lg:py-0  mt-32  ${index % 2 ? "text-secondary" : "bg-primary text-white "}`}>
                    <article className={`lg:-mb-8 ${index % 2 ? "bg-clr-bg place-self-center rounded-lg w-full" : ""}`}>
                        <img src={product.mainImage?.src} alt={product.name} className={`${index % 2 ? "mx-auto" : "lg:ml-auto"}`} />
                    </article>
                    <article className={`mx-auto lg:mx-0 text-center lg:text-start  place-self-center ${index % 2 ? "bg-[#F1F1F1] p-11" : "max-w-[300px]"} rounded-lg`}>
                        <h1 className="text-4xl  lg:text-5xl font-bold uppercase my-6">{product.name}</h1>
                        {index == 0 && <p className={`${index % 2 ? "mb-20" : "mb-10"} text-sm font-medium`}>{product?.description.substring(0, 63)}</p>}
                        <Link to={`/products/:${product._id}`}>
                            <Button class={`${index % 2 ? "bg-primary hover:bg-hover" : "bg-clr-bg hover:bg-white-400"}`} />
                        </Link>
                    </article>
                </section>))

            }
            <AboutUs />

        </Wrapper>
    )
}

export default Products

