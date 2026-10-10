"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBarLocalitzacio() {
    const pathname = usePathname();

    return (
        <li className={`nav-item px-lg-4 ${pathname === '/localitzacio' ? 'active' : ''}`}>
            <Link className="nav-link text-uppercase text-expanded" href={`/localitzacio`}>
                Localització
            </Link>
        </li>
    )
}
