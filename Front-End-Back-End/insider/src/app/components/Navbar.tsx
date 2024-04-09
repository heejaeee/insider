import { navLinks } from "../constants";

const Navbar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar mx-auto">
            <ul className="list-none sm:flex hidden justify-center items-center flex-1 gap-x-[3vw]">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className="">
                        <a href={`#${nav.id}`} className="text-gray-600 hover:text-gray-900">
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
