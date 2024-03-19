import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className="mt-5">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open ? <IoClose /> : <AiOutlineMenu />
                }
            </div>

            <ul className={`${open ? 'top-14' : '-top-60'} md:flex gap-4 justify-center bg-[#dcdcdc] md:bg-white p-6 rounded-xl absolute md:static duration-700`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;