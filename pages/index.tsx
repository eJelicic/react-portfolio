import Head from "next/head";
import Navbar from '../components/navbar';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";
import Image from "next/legacy/image";
import deved from '../public/EugenProfilePic.jpg';
import design from '../public/design.png';
import { useDarkMode } from '../components/darkModeProvider';

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eugen Jeličić Portofolio</title>
      </Head>
      <Navbar></Navbar>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
        <section className="flex flex-col">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Eugen Jeličić
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">      Freelance software developer and live sound engineer</h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-white">
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
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" alt={""} />
          </div>
        </section>
        <section className="flex flex-col">
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
}
