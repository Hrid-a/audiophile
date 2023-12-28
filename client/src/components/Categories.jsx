import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Categories = () => {
    const categories = useSelector(state => state.category.categories);

    return (
        <Wrapper>
            <section className="grid items-center md:grid-cols-[repeat(3,_minmax(227px,_1fr))] gap-16 md:gap-8 my-8">
                {
                    categories.map(category => (
                        <article key={category._id} className="relative rounded-lg bg-white-200 p-5 lg:p-8 flex flex-col items-center justify-center gap-2">
                            <img src={category?.image?.src} alt={category.category}
                                className={`${category.category === "earphones" ? "w-[147px] h-[133px]" : "w-[79px] h-[104px]"} object-contain absolute -top-3 -translate-y-1/2	 lg:w-[120px] lg:h-[150px]`}
                            />
                            <p className="text-xl font-bold uppercase mt-7 lg:mt-11">{category.category}</p>
                            <Link to={`/categories?category=${category.category}`}
                                className="text-sm font-bold text-secondary opacity-50 hover:text-primary">
                                shop now
                            </Link>
                        </article>
                    ))
                }
            </section>
        </Wrapper>
    )
}

export default Categories