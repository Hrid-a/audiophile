import { useState } from "react";
import { addToCart } from "../redux/products/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
    const { mainImage, name, description, _id, price } = product;
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch()


    const addProductToCart = ({ _id, name, mainImage, price }) => {
        const Qty = parseInt(qty, 10);
        dispatch(addToCart({ id: _id, name, mainImage, price, Qty }));
    }

    return (
        <section className={`grid lg:grid-cols-2 gap-11 lg:items-center overflow-hidden   py-10 lg:py-0  mt-32 text-secondary`}>
            <article className={`lg:-mb-8 bg-[#F1F1F1] place-self-center p-8 flex justify-center rounded-lg items-center`}>
                <img src={mainImage?.src} alt={name} className={`mx-auto`} />
            </article>
            <article className={`mx-auto lg:mx-0 text-center lg:text-start  place-self-center rounded-lg`}>
                <span className="text-primary text-sm uppercase tracking-[0.5rem]">New Product</span>
                <h1 className="text-4xl  lg:text-5xl font-bold uppercase my-6">{name}</h1>
                <p className=" text-sm font-medium">{description}</p>
                <p className="my-10 text-xl font-medium">
                    {(price / 10) + " DH"}
                </p>
                <div className="flex gap-3 justify-center lg:justify-start">
                    <div className="bg-[#F1F1F1] py-4 px-8 text-secondary text-xl font-medium uppercase flex gap-5 justify-center items-center rounded-lg">
                        <span className={`cursor-pointer ${qty < 2 ? "pointer-events-none" : ""}`}
                            onClick={() => setQty(prev => prev - 1)}
                        >-</span>
                        <span className="w-10 text-center">{qty}</span>
                        <span className={`cursor-pointer`}
                            onClick={() => setQty(prev => prev + 1)}
                        >+</span>

                    </div>
                    <button
                        onClick={() => addProductToCart({ _id, name, mainImage, price })}
                        className="bg-primary hover:bg-hover py-4 px-8 text-white text-sm font-medium uppercase rounded-lg tracking-widest">
                        add to cart
                    </button>
                </div>
            </article>
        </section>
    )
}

export default Product