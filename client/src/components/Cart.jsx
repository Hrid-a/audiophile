import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeAll, showCart } from "../redux/products/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {
    const cartItems = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const total = () => {
        return cartItems.reduce((acc, item) => acc + ((item.price / 10) * item.Qty), 0).toFixed(2);
    }


    return (
        <div className="max-w-md bg-white p-6 rounded-lg">
            {cartItems.length ?
                <section className="grid gap-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-secondary">Cart({cartItems.length})</h2>
                        <span
                            onClick={() => dispatch(removeAll())}
                            className="uppercase text-sm cursor-pointer font-medium text-primary">remove all</span>
                    </div>
                    {cartItems.map(item => <article key={item.id} className="flex justify-between items-center gap-7">
                        <div className="flex gap-3 items-center justify-center">
                            <div className="flex justify-center items-center bg-[#F1F1F1]  rounded-lg">
                                <img src={item.mainImage?.src} alt="product" className="mx-auto w-20" />
                            </div>
                            <div className="text-sm space-y-4 font-bold text-secondary">
                                <h3 className="text-secondary">{item.name}</h3>
                                <p className="opacity-60">{(item.price / 10) + " DH"}</p>
                            </div>
                        </div>
                        <div className="bg-[#F1F1F1] py-2 px-4 text-secondary text-sm font-medium uppercase flex gap-5 justify-center items-center rounded-lg self-center">
                            <span className="cursor-pointer"
                                onClick={() => { dispatch(decrementQty(item.id)) }}
                            >-</span>
                            <span className="w-9 text-center">{item.Qty}</span>
                            <span className={`cursor-pointer`}
                                onClick={() => { dispatch(incrementQty(item.id)) }}
                            >+</span>

                        </div>
                    </article>)}
                    <article className="grid gap-6">
                        <p className="flex justify-between items-center text-xl text-secondary font-bold">
                            <span className="opacity-60 uppercase">total</span>
                            <span>{total() + " DH"}</span>
                        </p>
                        <Link to="/checkout" onClick={() => dispatch(showCart())}>
                            <button className="bg-primary w-full hover:bg-hover py-4 px-8 text-white text-sm font-medium uppercase rounded-lg tracking-widest ">
                                check out
                            </button>
                        </Link>
                    </article>
                </section>
                :
                <p className="text-center text-primary font-medium text-sm p-8 mt-4">Cart is empty</p>
            }
        </div>
    )
}

export default Cart