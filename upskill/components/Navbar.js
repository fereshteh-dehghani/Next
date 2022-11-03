import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Hackaton Tasks</h1>
                <Link href="/" >Home</Link>
                <Link href="/about">About</Link>
                <Link href="/hackaton/">Hackaton tasks</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;