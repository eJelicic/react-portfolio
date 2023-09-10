import Head from "next/head";
import Navbar from '../components/navbar';
import { useDarkMode } from '../components/darkModeProvider';

interface Experience {
    title: string;
    company: string;
    date: string;
    description: string;
}

function ExperienceCard({ title, company, date, description }: Experience) {
    return (
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500">{company}</p>
                <p className="text-gray-500">{date}</p>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    );
}

export default function ExperiencesPage() {
    const { darkMode, setDarkMode } = useDarkMode();
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'ABC Tech Inc.',
            date: 'January 2020 - Present',
            description: 'Worked on various projects involving web development and software engineering.',
        },
        {
            title: 'Frontend Developer',
            company: 'XYZ Design Studio',
            date: 'June 2018 - December 2019',
            description: 'Collaborated with design teams to create visually appealing and user-friendly websites.',
        }];
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>
            
            <Navbar></Navbar>
         
            <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                
                <h1 className="text-3xl font-semibold mb-4 dark:text-white">My Experiences</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </main>
        </div>
    )
}
