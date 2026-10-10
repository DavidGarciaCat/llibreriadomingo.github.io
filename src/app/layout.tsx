import NavBarHoraris from "@/components/navbar/horaris";
import NavBarLocalitzacio from "@/components/navbar/localitzacio";
import NavBarPortada from "@/components/navbar/portada";
import NavBarProductes from "@/components/navbar/productes";
import {Analytics} from "@vercel/analytics/react";
import {Inter, Raleway} from 'next/font/google'
import Script from "next/script";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    const currentYear = (new Date()).getFullYear();

    return (
        <html lang="ca" data-scroll-behavior="smooth">
        <body className={`${inter.className} ${raleway.className}`}>
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
                        <NavBarPortada/>
                        <NavBarProductes/>
                        <NavBarHoraris/>
                        <NavBarLocalitzacio/>
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

        <Script defer src="jquery/dist/jquery.min"/>
        <Script defer src="bootstrap/dist/js/bootstrap.min"/>

        <Script defer
                src="https://cloud.umami.is/script.js"
                data-website-id="7d8f11f0-64c5-4ecc-a06d-845ace3f0805" />

        <Analytics />

        </body>
        </html>
    )
}
