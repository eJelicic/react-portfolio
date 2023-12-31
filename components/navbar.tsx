import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/legacy/image";
import hiFiLiveLogo from '../public/HiFiLive-logo.png';
import hiFiLiveLogoWhite from '../public/HiFiLive-logoWhite.png';
import { useDarkMode } from './darkModeProvider';
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

function Navbar() {
    const { darkMode, setDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-dark-background dark:text-white">
            <div className="flex flex-wrap items-center justify-between mx-auto mr-2 ml-2">
                <div className={darkMode ? "dark mr-2 mt-2" : "ml-2 mr-2 mt-2"}>
                    <Image src={darkMode ? hiFiLiveLogo : hiFiLiveLogoWhite} width={darkMode ? 80 : 65} height={darkMode ? 50 : 55}></Image>
                </div>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className={`font-medium text-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                    md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800
                     md:dark:bg-dark-background dark:border-gray-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-auto' : 'max-h-0 opacity-0'} md:max-h-auto md:opacity-100`}>
                        <li>
                            <Link href="/#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link href="/experiences" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experiences</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                        <li>
                            <BsFillMoonStarsFill
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                    console.log('Dark Mode Toggled');
                                }}
                                className="cursor-pointer text-2xl mx-auto"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
