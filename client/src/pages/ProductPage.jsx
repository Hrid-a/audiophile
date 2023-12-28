import Wrapper from "../components/Wrapper";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/Product";
import { useSinlgeProduct } from "../hooks/useSinlgeProduct";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import SingleProductSkeleton from "../components/SingleProductSkeleton";

const ProductPage = () => {
    const navigate = useNavigate()
    const { productId } = useParams();
    const singleProduct = useSinlgeProduct(productId);
    if (!singleProduct) return <Wrapper><SingleProductSkeleton /></Wrapper>;
    return (
        <Wrapper>
            <div className="my-8">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                    className="uppercase text-secondary opacity-80 font-medium">
                    go back
                </button>
            </div>
            <div>
                {singleProduct ? <Product product={singleProduct} /> : <div>this is it</div>}
            </div>
            <section className="my-20 pt-8">
                <h3 className="uppercase text-xl lg:text-4xl font-bold mb-7">FEATURES</h3>
                <article className="text-sm font-medium text-secondary opacity-70 max-w-[650px] grid gap-7">
                    <p>
                        Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you&apos;re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you&apos;ll never miss a beat.

                    </p>
                    <p>

                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                    </p>
                </article>
            </section>
            <section className="grid md:grid-cols-2 grid-rows-[200px_200px_200px] sm:grid-rows-[200px_200px] overflow-hidden my-10 gap-4">
                <article className="row-span-1 rounded-lg overflow-hidden">
                    <img src={singleProduct.images[0].src} alt="Product image" className="rounded-lg  grayscale opacity-8" />
                </article>
                <article className="row-span-2 rounded-lg  overflow-hidden self-center">
                    <img src={singleProduct.images[1].src} alt="Product image" className="grayscale opacity-80  w-full object-cover -translate-y-[5%] rounded-lg " />
                </article>
                <article className="row-start-2 rounded-lg overflow-hidden">
                    <img src={singleProduct.images[2].src} alt="Product image" className="rounded-lg  grayscale opacity-80 -translate-y-[45%]" />
                </article>
            </section>
            <div className="mb-20 py-10">
            </div>
            <Categories />
            <AboutUs />
        </Wrapper>
    )
}

export default ProductPage