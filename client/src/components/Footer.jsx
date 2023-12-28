import Wrapper from "./Wrapper";
import group from "../assets/Group.svg";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (

        <footer className="bg-clr-bg">
            <Wrapper>
                <div className="py-9 px-6 md:py-8 md:px-9 lg:px-0 flex justify-between flex-wrap border-b-white-400">
                    <div className="">
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
                                <Link className="uppercase text-white text-sm transition-colors hover:text-primary" to="//categories?category=headphones">headphones</Link>
                            </li>
                            <li>
                                <Link className="uppercase text-white text-sm transition-colors hover:text-primary" to="//categories?category=speakers">speakers</Link>
                            </li>
                            <li>
                                <Link className="uppercase text-white text-sm transition-colors hover:text-primary" to="//categories?category=earphones">earphones</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <section className="text-white">
                    <article>
                        <p className="max-w-[500px] text-white">
                            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
                        </p>
                        <div className="flex  flex-col gap-5 sm:flex-row sm:justify-between sm:flex-wrap my-10">
                            <p className="lg:mt-20">
                                Copyright 2021. All Rights Reserved
                            </p>

                            <div className="flex gap-4 lg:self-start">
                                <span className="text-white hover:text-primary text-2xl cursor-pointer"><Facebook /></span>
                                <span className="text-white hover:text-primary text-2xl cursor-pointer"><Twitter /></span>
                                <span className="text-white hover:text-primary text-2xl cursor-pointer"><Instagram /></span>
                            </div>
                        </div>
                    </article>

                </section>
            </Wrapper>
        </footer>

    )
}

export default Footer