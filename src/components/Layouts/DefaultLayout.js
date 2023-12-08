import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Contacts from "../Contacts/Contacts";
import Logo from "../Logo/Logo";

function DefaultLayout () {
    return (
        <>
            <Logo />
            <Header />
            <Contacts />
            <Outlet />
        </>
    )
}

export default DefaultLayout