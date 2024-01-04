import Wrapper from "./Wrapper"
import cash from "../assets/cash.svg";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot"
import { customerSchema } from "../utlis/data";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/products/orderSlice";

const CustomerDetails = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const { handleSubmit, formState: { errors }, register } = useForm(
        {
            resolver: valibotResolver(customerSchema),
            defaultValues: {

            }
        },
    )

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const amount = cartItems.reduce((acc, item) => acc + ((item.price / 10) * item.Qty), 0);
        const products = cartItems.map(item => ({ product: item.id, quantity: item.Qty }))
        console.log("before placing the order");
        dispatch(placeOrder({ ...data, products, amount }))
        console.log("after placing the order");

    }

    return (
        <div className="flex-1">
            <Wrapper>
                <section className="bg-white p-6 rounded-lg">
                    <h1 className="uppercase text-xl lg:text-2xl text-secondary font-bold my-5">
                        checkout
                    </h1>
                    <div className="grid gap-8">
                        <h2 className="text-primary text-xl font-medium uppercase my-4">billing details</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <section className="grid lg:grid-cols-2 gap-5 ">
                                <div className="grid">
                                    <label htmlFor="name" className="text-sm font-bold text-secondary my-3 uppercase ml-2 tracking-wide">name</label>
                                    <input type="text"
                                        placeholder="Name" {...register("name")}
                                        className=
                                        "border border-white-200 hover:border-primary px-4 py-3 rounded-lg text-sm text-secondary font-bold focus:outline-none focus-visible:outline-none caret-primary w-full" />
                                    {errors.name && <span className="ml-auto text-sm font-medium text-primary">{errors.name.message}</span>}
                                </div>
                                <div className="grid">
                                    <label htmlFor="email" className="text-sm font-bold text-secondary my-3 uppercase ml-2 tracking-wide ">email</label>
                                    <input type="eamil" placeholder="Email" {...register("email")} className="border border-white-200 focus:border-primary px-4 py-3 rounded-lg text-sm  text-secondary font-bold focus:outline-none focus-visible:outline-none caret-primary" />
                                    {errors.email && <span className="text-sm font-medium text-primary">{errors.email.message}</span>}
                                </div>
                                <div className="grid">
                                    <label htmlFor="phone" className="text-sm font-bold text-secondary my-3 uppercase ml-2 tracking-wide ">phone number</label>
                                    <input type="text" placeholder="+212123457689" {...register("phone")} className="border border-white-200 focus:border-primary px-4 py-3 rounded-lg text-sm  text-secondary font-bold focus:outline-none focus-visible:outline-none caret-primary" />
                                    {errors.phone && <span className="ml-auto text-sm font-medium text-primary">{errors.phone.message}</span>}
                                </div>
                            </section>
                            <section className="grid lg:grid-cols-2 gap-5 my-6">
                                <h2 className="text-primary text-xl font-medium uppercase my-4">shipping info</h2>
                                <div className="grid lg:col-start-1 lg:col-end-3">
                                    <label htmlFor="address" className="text-sm font-bold text-secondary my-3 uppercase ml-2 tracking-wide">address</label>
                                    <input type="text" placeholder="Address" {...register("address")} className="border border-white-200 hover:border-primary px-4 py-3 rounded-lg text-sm text-secondary font-bold focus:outline-none focus-visible:outline-none caret-primary" />
                                    {errors.address && <span className="ml-auto text-sm font-medium text-primary">{errors.address.message}</span>}
                                </div>
                                <div className="grid">
                                    <label htmlFor="zipCode" className="text-sm font-bold text-secondary my-3 uppercase ml-2 tracking-wide ">zip code</label>
                                    <input type="text" placeholder="Zip code" {...register("zipCode")} className="border border-white-200 focus:border-primary px-4 py-3 rounded-lg text-sm  text-secondary font-bold focus:outline-none focus-visible:outline-none caret-primary" />
                                    {errors.zipCode && <span className="ml-auto text-sm font-medium text-primary">{errors.zipCode.message}</span>}
                                </div>
                                <div className="grid">
                                    <label htmlFor="city" className="text-sm font-bold text-secondary my-3 uppercase ml-2 tracking-wide ">city</label>
                                    <input type="text" placeholder="city" {...register("city")} className="border border-white-200 focus:border-primary px-4 py-3 rounded-lg text-sm  text-secondary font-bold focus:outline-none focus-visible:outline-none caret-primary" />
                                    {errors.city && <span className="ml-auto text-sm font-medium text-primary">{errors.city.message}</span>}
                                </div>
                            </section>
                            <button type="submit" className="bg-primary  hover:bg-hover py-4 px-8 text-white text-sm font-medium uppercase rounded-lg tracking-widest ">
                                continue
                            </button>
                        </form>
                        <div className="flex gap-7 p-4">
                            <span>
                                <img src={cash} alt="icon" />
                            </span>
                            <p className="text-sm font-medium text-secondary opacity-70 flex-1">
                                The Cash on Delivery option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                            </p>
                        </div>
                    </div>

                </section>
            </Wrapper>
        </div>
    )
}

export default CustomerDetails