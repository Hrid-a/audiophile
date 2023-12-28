import { Link } from "react-router-dom"
import Button from "./Button"

const CategoryProduct = ({ product, idx }) => {
    const { mainImage, name, description, _id } = product;
    return (
        <section className={`grid lg:grid-cols-2 gap-11 lg:items-center overflow-hidden   py-10 lg:py-0  mt-32 text-secondary`}>
            <article className={`lg:-mb-8 bg-[#F1F1F1] place-self-center p-8 flex justify-center rounded-lg items-center  ${idx % 2 ? "" : "lg:order-3"}`}>
                <img src={mainImage?.src} alt={name} className={`mx-auto`} />
            </article>
            <article className={`mx-auto lg:mx-0 text-center lg:text-start  place-self-center ${idx % 2 ? "" : "lg:order-1"} rounded-lg`}>
                <h1 className="text-4xl  lg:text-5xl font-bold uppercase my-6">{name}</h1>
                <p className="mb-10 text-sm font-medium">{description}</p>
                <Link to={`/products/${_id}`}>
                    <Button class="bg-primary hover:bg-hover" />
                </Link>
            </article>
        </section>
    )
}

export default CategoryProduct;