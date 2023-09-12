import Head from "next/head";
import Navbar from '../components/navbar';
import { useDarkMode } from '../components/darkModeProvider';
import Image from "next/legacy/image";
import amber from '../public/Amber-logo.svg';
import agilathon from '../public/agilathon_logo.webp';
import playnirvana from '../public/playnirvanaLogo.png';

export default function ExperiencesPage() {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>

            <Navbar></Navbar>

            <main className="w-auto bg-white px-10 dark:bg-gray-900 md:px-20 min-h-screen">
                <h1 className="text-3xl font-semibold mb-4 dark:text-white">My Experiences</h1>

                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:text-white dark:bg-gradient-to-tl from-black">
                        <h3 className="font-bold text-2xl mb-4">Amber IT Solutions</h3>
                        <p>Full stack developer on an enterprise SaaS web-app for schooling.</p>
                        <p>
                            In this company, I also worked on another smaller project for which we used Angular 7 on the front-end and .NET Core on the backend.
                            I worked on everything from smaller stuff like bug fixes and minor updates to implementing large new parts of the system that required an in-depth understanding of this app's architecture.
                            For version control and work-sharing, we used Jira and Bitbucket.
                        </p>
                        <div className="mt-4">
                            <div className="flex justify-evenly items-center">
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-left">Tools used:</h3>
                                    <ul className="list-disc text-left">
                                        <li className="text-teal-600 py-1">ASP.NET</li>
                                        <li className="text-teal-600 py-1">Microsoft SQL</li>
                                        <li className="text-teal-600 py-1">AngularJS</li>
                                        <li className="text-teal-600 py-1">Angular 7</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href="https://www.amber-sm.com/Contact"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image src={amber} alt="Design" className="w-20 h-20" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:text-white dark:bg-gradient-to-tl from-black">
                        <h3 className="font-bold text-2xl mb-4">Agilathon</h3>
                        <p>Node.js backend developer working on customizations for medical studies in the eCOA industry for the American partner Medable.</p>
                        <p>
                            I was a part of a very large team working with agile methodologies to develop new medical study applications.
                            For version control and work-sharing, we used Jira with bitbucket and GitLab.
                        </p>
                        <div className="mt-4">
                            <div className="flex justify-evenly items-center">
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-left">Tools used:</h3>
                                    <ul className="list-disc text-left">
                                        <li className="text-teal-600 py-1">NodeJS</li>
                                        <li className="text-teal-600 py-1">MongoDB</li>
                                        <li className="text-teal-600 py-1">Jira</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href="https://agilathon.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image width={150} height={35} src={agilathon} alt="Design" className="w-20 h-20" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:text-white dark:bg-gradient-to-tl from-black">
                        <h3 className="font-bold text-2xl mb-4">PlayNirvana group</h3>
                        <p>.NET backend engineer working on maintenance of existing and implementation of new betting products.</p>
                        <p>
                            Technologies used were .NET 6 with a PostgreSQL database. Development was supervised by a senior team lead.
                            For testing there was a QA team and we usually implemented unit tests after new features were developed.
                            For continuous integration team-city was used and during development we were in communication with other backend and frontend segments of the company.
                        </p>
                        <div className="mt-4">
                            <div className="flex justify-evenly items-center">
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-left">Tools used:</h3>
                                    <ul className="list-disc text-left">
                                        <li className="text-teal-600 py-1">.NET Core</li>
                                        <li className="text-teal-600 py-1">PostgreSQL</li>
                                        <li className="text-teal-600 py-1">TeamCity</li>
                                        <li className="text-teal-600 py-1">GitLab</li>
                                        <li className="text-teal-600 py-1">RabbitMQ</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href="https://www.playnirvana.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image width={180} height={45} src={playnirvana} alt="Design" className="w-20 h-20" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
