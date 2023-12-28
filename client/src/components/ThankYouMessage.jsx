import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { removeAll } from "../redux/products/cartSlice";
import { resetState } from "../redux/products/orderSlice";

const ThankYouMessage = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const order = useSelector(state => state.order.order.order);
    const dispatch = useDispatch();
    const item = cartItems[0];
    const handleClick = () => {
        dispatch(resetState());
        dispatch(removeAll());
    }
    return (
        <>
            <div className="max-w-[560px] bg-white p-6 rounded-lg mt-6">
                <h1 className="uppercase text-xl lg:text-2xl text-secondary font-bold">
                    Thank You {" " + order?.customerDetails?.name} for your order
                </h1>
                <p className="text-sm lg:text-xl text-secondary my-4 font-medium">You will receive a call confirmation shortly.</p>
                {cartItems.length &&
                    <section className="grid  lg:grid-cols-2 p-6 my-4 ">
                        <article className="bg-[#F1F1F1] p-5 rounded-l-lg">
                            <div key={item.id} className="flex justify-between items-center gap-7">

                                <div className="flex justify-center items-center bg-[#F1F1F1]  rounded-lg">
                                    <img src={item.mainImage?.src} alt="product" className="mx-auto w-20" />
                                </div>
                                <div className="text-sm space-y-4 font-medium text-secondary">
                                    <h3 className="text-secondary">{item.name.substring(0, 5)}</h3>
                                    <p className="text-xs opacity-60 w-max">{(item.price / 10) + " DH"}</p>
                                </div>

                                <div className="py-2 px-4 text-secondary text-[18px] font-medium uppercase">
                                    {"x" + item.Qty}
                                </div>
                            </div>
                            {cartItems.length > 1 && <p className="text-secondary text-[18px] font-medium "> and {cartItems.length - 1} other item(s)</p>}
                        </article>
                        <article className="bg-clr-bg p-5 rounded-r-lg">
                            <p className="grid  place-content-center gap-2 text-xl font-bold">
                                <span className="text-white opacity-60 uppercase">grand total</span>
                                <span className="text-primary">{order?.amount + " DH"}</span>
                            </p>
                        </article>
                    </section>

                }
                <Link to="/" onClick={handleClick}>
                    <button className="bg-primary w-full hover:bg-hover py-4 px-8 text-white text-sm font-medium uppercase rounded-lg tracking-widest ">
                        go back home
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ThankYouMessage