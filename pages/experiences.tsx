import Head from "next/head";
import Navbar from '../components/navbar';
import { useDarkMode } from '../components/darkModeProvider';
import Image from "next/legacy/image";
import amber from '../public/Amber-logo.svg';

interface Experience {
    title: string;
    company: string;
    date: string;
    description: any;
}

function ExperienceCard({ title, company, date, description }: Experience) {
    return (
        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:text-white dark:bg-gradient-to-tl from-black">
            <h3 className="font-bold text-2xl mb-4">Amber IT Solutions</h3>
            <p>Full stack developer on an enterprise SaaS web-app for schooling. Technologies used were:</p>
            <p>
                In this company, I also worked on another smaller project for which we used Angular 7 on the front-end and .NET Core on the backend.
                I worked on everything from smaller stuff like bug fixes and minor updates to implementing large new parts of the system that required an in-depth understanding of this app's architecture.
                For version control and work-sharing, we used Jira and Bitbucket.
            </p>

            <div className="mt-4">
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col">
                        <h3 className="ml-6 font-bold">Tools used:</h3>
                        <ul className="list-disc ml-6">
                            <li className="text-teal-600 py-1">ASP.NET</li>
                            <li className="text-teal-600 py-1">Microsoft SQL</li>
                            <li className="text-teal-600 py-1">AngularJS</li>
                            <li className="text-teal-600 py-1">Angular 7</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <Image src={amber} alt="Design" className="w-20 h-20" />
                        <a
                            href="https://www.amber-sm.com/Contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                           https://www.amber-sm.com/Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default function ExperiencesPage() {
    const { darkMode, setDarkMode } = useDarkMode();

    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'Amber IT Solutions',
            date: 'May 31, 2018 - March 1, 2021',
            description: (
                <div>
                    <p>Full stack developer on an enterprise SaaS web-app for schooling. Technologies used were:</p>
                    <ul className='text-left' style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        <li>Microsoft .NET on the backend</li>
                        <li>Microsoft SQL Database</li>
                        <li>AngularJS on the frontend</li>
                    </ul>
                    <p>
                        In this company, I also worked on another smaller project for which we used Angular 7 on the front-end and .NET Core on the backend.
                        I worked on everything from smaller stuff like bug fixes and minor updates to implementing large new parts of the system that required an in-depth understanding of this app's architecture.
                        For version control and work-sharing, we used Jira and Bitbucket.
                    </p>
                </div>
            ),
        },
        {
            title: 'Frontend Developer',
            company: 'XYZ Design Studio',
            date: 'June 2018 - December 2019',
            description: (
                <p>
                    Collaborated with design teams to create visually appealing and user-friendly websites.
                </p>
            ),
        },
        // Add more experiences as needed
    ];

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>

            <Navbar></Navbar>

            <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">

                <h1 className="text-3xl font-semibold mb-4 dark:text-white">My Experiences</h1>
                <div className="max-w-screen-xl mx-auto mb-4">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </main>
        </div>
    )
}
