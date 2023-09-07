import { useState } from "react";
import Head from "next/head";
import Navbar from '../components/navbar';

//'./src/app/**/*.{js,ts,jsx,tsx,mdx}',

export default function ContactPage() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>

            <Navbar></Navbar>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">

            </main>
        </div>
    )
};
