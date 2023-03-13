import style from "./Navbar.module.css"
import Link from "next/link";
export default function NavBar() {

    return (
        <nav>
            <div className={style.logo}>
                <h1>User list</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/users">user list</Link>
        </nav>
    );
}