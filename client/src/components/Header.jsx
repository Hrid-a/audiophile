import menu from "../assets/menu.svg";
import group from "../assets/Group.svg";
import cart from "../assets/cart.svg";
import { Link, useLocation } from "react-router-dom";
import Categories from "./Categories";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../redux/products/cartSlice";
import Cart from "./Cart";

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const location = useLocation();
    const cartLength = useSelector(state => state.cart.cart.length)
    const isCartShown = useSelector(state => state.cart.isCartShown);

    const dispatch = useDispatch();
    const handleClick = () => {
        setIsMenuOpened(prev => !prev);
    }

    const currentUrl = `http://localhost:5173${location.pathname}` === `http://localhost:5173/`;

    return (
        <header className="bg-clr-bg relative">
            <Wrapper>
                <div className="py-9 px-6 md:py-8 md:px-9 lg:px-0 flex justify-between border border-b-white-400">
                    <div className="flex gap-10 items-center justify-between md:justify-start">
                        <div className="lg:hidden cursor-pointer" onClick={handleClick}>
                            <span className="sr-only">Click to open the menu</span>
                            <img src={menu} alt="Menu" />
                        </div>
                        <Link to={"/"}>
                            <img src={group} alt="store's logo" />
                        </Link>
                    </div>
                    <nav className="w-fit">
                        <ul className="hidden lg:flex gap-4 items-center justify-center">
                            <li>
                                <Link className="uppercase text-white text-sm  transition-colors hover:text-primary" to="/">home</Link>
                            </li>
                            <li>
                                <Link className="uppercase text-white text-sm transition-colors hover:text-primary" to="/categories?category=headphones">headphones</Link>
                            </li>
                            <li>
                                <Link className="uppercase text-white text-sm transition-colors hover:text-primary" to="/categories?category=speakers">speakers</Link>
                            </li>
                            <li>
                                <Link className="uppercase text-white text-sm transition-colors hover:text-primary" to="/categories?category=earphones">earphones</Link>
                            </li>
                        </ul>
                        {
                            currentUrl && <div className={`absolute top-full inset-x-0 z-30 bg-white
                        flex items-start justify-center lg:hidden pt-[64px] ${isMenuOpened ? "block lg:hidden" : "hidden"}`}>
                                <Categories />
                            </div>
                        }
                    </nav>
                    <div className="cursor-pointer relative"
                        onClick={() => dispatch(showCart())}
                    >
                        <img src={cart} alt="cart" />
                        {cartLength && <span className="absolute -top-5 left-4 w-8 h-8 rounded-full bg-primary text-center text-xl text-white font-medium">{cartLength}</span>}
                    </div>
                </div>

                {isCartShown && <div className="absolute top-[110%] left-4 md:left-auto right-5 z-20">
                    <Cart />
                </div>}
            </Wrapper>
            {
                isCartShown && <div className="absolute top-full bg-[#00000040] h-screen  inset-x-0 z-10"></div>
            }
        </header>
    )
}

export default Header