import style from "./Layout.module.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";


export default function Layout({ children }) {

    const router = useRouter();
    const isNotFound = router.pathname === "/404"
    return (
        <div className={style.content}>
            { isNotFound ? children :
            (
            <> 
            <NavBar />
            {children}
            <Footer />
            </>
            )}
        </div>
    );
}