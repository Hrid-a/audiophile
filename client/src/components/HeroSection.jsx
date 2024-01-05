import { useSelector } from "react-redux"
import Button from "./Button";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import Skeleton from "./Skeleton";

const HeroSection = () => {
    const products = useSelector(state => state.product.products);


    return (
        <Wrapper >
            {
                products.length ? <div className="grid isolate grid-cols-1  lg:grid-cols-2 gap-8 place-items-center h-[100svh]">
                    <div className="max-w-[380px]  row-start-1 row-end-2 col-start-1 col-end-2 z-20 lg:row-auto 
            lg:col-auto grid place-items-center lg:place-items-start text-center lg:text-start">
                        <span className="text-white-200 opacity-20 text-xs uppercase tracking-[0.5rem]">New Product</span>
                        <h1 className="text-white text-4xl  lg:text-5xl font-bold uppercase my-6">{products[0].name}</h1>
                        <p className="text-white opacity-80 mb-10 text-sm font-medium">{products[0].description.substring(0, 67)}</p>
                        <Link to={`/products/${products[0]._id}`} className="block">
                            <Button class="bg-primary hover:bg-hover" />
                        </Link>
                    </div>
                    <div className="row-start-1 row-end-2 col-start-1 col-end-2 lg:row-auto lg:col-auto overflow-hidden">
                        <img src={products[0].mainImage.src} alt={products[0].name} />
                    </div>
                </div>
                    :
                    <Skeleton />
            }
        </Wrapper>

    )
}

export default HeroSection