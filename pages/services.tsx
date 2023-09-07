import Head from "next/head";
import Navbar from '../components/navbar';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube
} from "react-icons/ai";
import Image from "next/legacy/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import { useState } from "react";


//'./src/app/**/*.{js,ts,jsx,tsx,mdx}',

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>

            <Navbar></Navbar>

            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium">
                            Eugen Jeličić
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white">Developer and designer</h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
                            Freelancer bla ba o meni
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-white">
                        <AiFillTwitterCircle />
                        <AiFillLinkedin />
                        <AiFillYoutube />
                    </div>
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                        <Image src={deved} layout="fill" objectFit="cover" alt={""} />
                    </div>
                </section>
                <section>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10">
                        <h3 className="text-3xl py-1 dark:text-white">
                            Services i offer
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
                            First text about me
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
                            More text about me
                        </p>
                    </div>
                    <div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
                            <Image src={design} width={100} height={100}></Image>
                            <h3>Beautifull Designs</h3>
                            <p>
                                Creating blabla
                            </p>
                            <h4>Design tools i use</h4>
                            <p className="text-teal-600 py-4">1</p>
                            <p className="text-teal-600 py-1">2</p>
                            <p className="text-teal-600 py-1">3</p>
                            <p className="text-teal-600 py-1">4</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
                            <Image src={design} width={100} height={100}></Image>
                            <h3>Beautifull Designs</h3>
                            <p>
                                Creating blabla
                            </p>
                            <h4>Design tools i use</h4>
                            <p className="text-teal-600 py-4">1</p>
                            <p className="text-teal-600 py-1">2</p>
                            <p className="text-teal-600 py-1">3</p>
                            <p className="text-teal-600 py-1">4</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
                            <Image src={design} width={100} height={100}></Image>
                            <h3>Beautifull Designs</h3>
                            <p>
                                Creating blabla
                            </p>
                            <h4>Design tools i use</h4>
                            <p className="text-teal-600 py-4">1</p>
                            <p className="text-teal-600 py-1">2</p>
                            <p className="text-teal-600 py-1">3</p>
                            <p className="text-teal-600 py-1">4</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};
