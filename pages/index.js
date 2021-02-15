import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Rey Mar Gualvez | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
      <div className={styles.title}>
         <h1>Homepage</h1>
         <p className={styles.text}>Morbi lobortis quam sit amet mauris ornare fermentum sit amet id enim. Phasellus condimentum purus ut lectus tempus sagittis. In maximus dui placerat, pellentesque nunc vel, ornare massa. </p>
         <p className={styles.text}>Morbi lobortis quam sit amet mauris ornare fermentum sit amet id enim. Phasellus condimentum purus ut lectus tempus sagittis. In maximus dui placerat, pellentesque nunc vel, ornare massa. </p>
         <Link href="/ninjas">
           <a className={styles.btn}>See Ninja Listings</a>
         </Link>
      </div>
    </>
  )
}
