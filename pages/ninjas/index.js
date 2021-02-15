import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props:{users: data}
    }
}
const Ninjas = ({users}) => {
    return ( 
        <>
         <Head>
            <title>Rey Mar Gualvez | Blogs</title>
            <meta name="keywords" content="ninjas"/>
        </Head>
        <div>
            <h1>All Users</h1>
            {users.map(user => (
                <Link href={"/ninjas/" + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Ninjas;