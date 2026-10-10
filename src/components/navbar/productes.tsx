"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBarProductes() {
    const pathname = usePathname();

    return (
        <li className={`nav-item px-lg-4 ${pathname === '/productes' ? 'active' : ''}`}>
            <Link className="nav-link text-uppercase text-expanded" href={`/productes`}>
                Productes
            </Link>
        </li>
    )
}
