import Link from 'next/link'
import Image from  'next/image'

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Link href="/"><a>NextSheetsAPI</a></Link>
            </div>
            <Link href="/form"><a>Form</a></Link>
            <Link href="/about"><a>Table</a></Link>
            {/* <Link href="/ninjas"><a>Blogs</a></Link> */}
        </nav>
     );
}
 
export default NavBar;