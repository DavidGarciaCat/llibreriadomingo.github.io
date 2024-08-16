'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {Analytics} from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })

// WE CANNOT KEEP THE "metadata" DATA IF WE USE THE 'use client' CALL ON TOP.
// THE 'use client' CALL IS NEEDED TO USE THE 'usePathname()' METHOD.
/* export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentYear = (new Date()).getFullYear();

  return (
    <html lang="ca">
    <body className={inter.className}>
    <h1 className="site-heading text-center text-white d-none d-lg-block">
      <span className="site-heading-lower">Llibreria Domingo</span>
      <span className="site-heading-upper text-primary mb-3">Des del 1943</span>
    </h1>

    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Llibreria
          Domingo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className={`nav-item px-lg-4 ${pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link text-uppercase text-expanded" href={`/`}>
                Portada
              </Link>
            </li>
            <li className={`nav-item px-lg-4 ${pathname === '/productes' ? 'active' : ''}`}>
              <Link className="nav-link text-uppercase text-expanded" href={`/productes`}>
                Productes
              </Link>
            </li>
            <li className={`nav-item px-lg-4 ${pathname === '/horaris' ? 'active' : ''}`}>
              <Link className="nav-link text-uppercase text-expanded" href={`/horaris`}>
                Horaris
              </Link>
            </li>
            <li className={`nav-item px-lg-4 ${pathname === '/localitzacio' ? 'active' : ''}`}>
              <Link className="nav-link text-uppercase text-expanded" href={`/localitzacio`}>
                Localització
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {children}

    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">Copyright &copy; {currentYear} Llibreria Domingo • Des de 1943 • Tots els drets
          reservats</p>
      </div>
    </footer>

    <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></Script>

    <Script defer
            src="https://cloud.umami.is/script.js"
            data-website-id="7d8f11f0-64c5-4ecc-a06d-845ace3f0805" />

    <Analytics />

    </body>
    </html>
  )
}
