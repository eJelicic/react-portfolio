import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";
import Image from "next/legacy/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public.web1.png";
import web2 from "../public.web2.png";
import web3 from "../public.web3.png";
import web4 from "../public.web4.png";
import web5 from "../public.web5.png";
import web6 from "../public.web6.png";
import { useState } from "react";

//'./src/app/**/*.{js,ts,jsx,tsx,mdx}',

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Head>
        <title>Eugen Jeličić Portofolio</title>
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">developedby</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                    console.log('Dark Mode Toggled');
                  }}
                  className="cursor-pointer text-2xl"
                />

              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
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
