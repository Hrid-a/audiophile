import HeroSection from "../components/HeroSection";
import useProducts from "../hooks/useProducts"
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
    useProducts();
    return (
        <>
            <div className="bg-clr-bg max-h-[100svh]">
                <HeroSection />
            </div>
            <div className="mt-24 lg:mt-32">
                <Categories />
                <Products />
            </div>
        </>
    )
}

export default Home