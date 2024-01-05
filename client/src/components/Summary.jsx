import { useSelector } from "react-redux";

const Summary = () => {
    const cartItems = useSelector(state => state.cart.products);

    const total = () => {
        return cartItems.reduce((acc, item) => acc + ((item.price / 10) * item.Qty), 0);
    }

    return (
        <div className="max-w-md bg-white p-6 mx-auto lg:mx-0 rounded-lg mt-6">
            {cartItems.length &&
                <section className="grid gap-10">
                    <h1 className="uppercase text-xl lg:text-2xl text-secondary font-bold">
                        summary
                    </h1>
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
                        <div className="py-2 px-4 text-secondary text-[18px] font-medium uppercase">
                            {"x" + item.Qty}
                        </div>
                    </article>)}
                    <article className="grid gap-6">
                        <p className="flex justify-between items-center text-xl text-secondary font-bold">
                            <span className="opacity-60 uppercase">total</span>
                            <span>{total() + " DH"}</span>
                        </p>
                        <p className="flex justify-between items-center text-xl text-secondary font-bold">
                            <span className="opacity-60 uppercase">shipping</span>
                            <span>{50 + " DH"}</span>
                        </p>
                        <p className="flex justify-between items-center text-xl font-bold">
                            <span className="text-secondary opacity-60 uppercase">grand total</span>
                            <span className="text-primary">{(total() + 50) + " DH"}</span>
                        </p>

                    </article>
                </section>

            }
        </div>
    )
}

export default Summary