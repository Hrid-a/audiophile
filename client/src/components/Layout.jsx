import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useCategories from "../hooks/useCategories";
const Layout = () => {
    useCategories()

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout