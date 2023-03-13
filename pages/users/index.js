import Head from "next/head";
import Link from "next/link";
import styles from "./users.module.css"


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersArr = await response.json()

    return {
        props: { users: usersArr }
    }
}

export default function users({users}) {
    
    return (
        <>
        <Head>
            <title>User List | users</title>
        </Head>
        <div>
            <h1>The users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`} className={styles.single}>
                        <h3>{user.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    </>
    )
}