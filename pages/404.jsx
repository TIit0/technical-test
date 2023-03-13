import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, []);

    
    return (
        <div>
            <h1>Oh no!</h1>
            <h2>We could not find the page you were trying to reach</h2>

            <Link
            style={{color: "blue"}}
            href="/"
            >Go back to the home page
            </Link>
        </div>
    );
}