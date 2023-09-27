import Head from "next/head";
import Navbar from '../components/navbar';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";
import Image from "next/legacy/image";
import deved from '../public/EugenProfilePic.jpg';
import { useDarkMode } from '../components/darkModeProvider';

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eugen Jeličić Portofolio</title>
      </Head>
      <Navbar></Navbar>

      <main className=" bg-white px-10 dark:bg-dark-background md:px-20 lg:px-40 min-h-screen">
        <section className="flex flex-col">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Eugen Jeličić
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">Freelance software developer and live sound engineer</h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-700 dark:text-white">
            <a
              href="https://www.facebook.com/eugen.jelicic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/eugen-jeli%C4%8Di%C4%87-b4876763"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCmkR-6Xcfgf2wqiSXCv_4Fw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
            <a
              className="bg-gray-700 dark:bg-white text-white dark:text-black  text-lg px-4 py-2 rounded-full flex items-center justify-center font-bold"
              href="/Cv.pdf"
              download="Cv.pdf"
            >
              Download CV
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" alt={""} />
          </div>
        </section>
        <section className="flex flex-col">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
            <h3 className="text-3xl py-1 dark:text-white">
              About me
            </h3>

            <p className="text-md py-2 leading-8">
              {"I'm a full-stack developer located in Split (Croatia) with primary experience in Microsoft .NET backend development."}
              {"I started out during college with a couple of friends and a web-app startup for assembling custom computers. After college, I worked for "}
              {"two companies as either a full-stack web developer or a backend developer, and one company as a NodeJS backend developer. "}
            </p>
            <p className="py-2">
              {"From this point on, my development goals will focus on freelance services during the autumn and winter and developing some of my own startup ideas."}
              {"For that purpose, I'm currently expanding to mobile development, starting with Flutter."}
            </p>
            <p className="py-2">
              {"Besides working as a software developer, I've also been a freelance live sound engineer for the past ten years."}
              {"With more than 1500 concerts behind me, I've started making a living from this profession, so I've moved away from full-time company employment as a developer."}
            </p>
            <p className="py-2">
              {"I also have a history of volunteering at a local nightclub, Kocka, for years, where I've organized multiple well-attended live-sound workshops."}
              {"I'm also currently leading the people and technical management for many events under the production of a new live sound rental company based in Split."}
              {"started in a collaboration with a friend."}
              {"All of this has given me a wide range of skills."}
            </p>
            <p className="py-2">
              {"In my free time, I'm a drummer and am currently working on a new band with a couple of friends."}
            </p>
          </div>
        </section>
      </main>
    </div >
  )
}
