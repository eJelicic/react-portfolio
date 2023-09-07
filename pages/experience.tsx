import Head from "next/head";
import Navbar from '../components/navbar';
import { useState } from "react";


//'./src/app/**/*.{js,ts,jsx,tsx,mdx}',

export default function ExperiencePage() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>

            <Navbar></Navbar>
    </div >
  )
};
