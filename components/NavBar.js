import Link from 'next/link'
import Image from  'next/image'

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/rm1.jpg" width={137} height={147}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Blogs</a></Link>
        </nav>
     );
}
 
export default NavBar;