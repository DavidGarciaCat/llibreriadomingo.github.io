"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBarHoraris() {
    const pathname = usePathname();

    return (
        <li className={`nav-item px-lg-4 ${pathname === '/horaris' ? 'active' : ''}`}>
            <Link className="nav-link text-uppercase text-expanded" href={`/horaris`}>
                Horaris
            </Link>
        </li>
    )
}
