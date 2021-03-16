import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://v1.nocodeapi.com/thebro/google_sheets/TylXJHhzDykyXfXk?tabId=Sheet1');
    const results = await res.json();

    return{
        props:{users: results}
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
            {users.data.map(user => (
                // <Link href={"/ninjas/" + user.id} key={user.id}>
                //     <a className={styles.single}>
                //         <h3>{user.name}</h3>
                //     </a>
                // </Link>
                <h4 key={user.row_id}>
                    <a className={styles.single}>
                        <h3>{user.Name}</h3>
                    </a>
                </h4>
            ))}
        </div>
        </>
     );
}
 
export default Ninjas;