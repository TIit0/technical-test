import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
      </Head>
      <div>

        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est corporis tempora magni ducimus nesciunt ab ea minus placeat architecto hic, aliquid enim numquam reiciendis culpa. Ad quisquam eaque doloremque sapiente!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est corporis tempora magni ducimus nesciunt ab ea minus placeat architecto hic, aliquid enim numquam reiciendis culpa. Ad quisquam eaque doloremque sapiente!
        </p>
        <Link className={styles.btn} href="/users">see the User list</Link>

      </div>
    </>
  )
}
