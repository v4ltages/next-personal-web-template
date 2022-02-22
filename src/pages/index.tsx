import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { SideMenu } from "../components/SideMenu";
import profilePic from '/public/avatar.png'
import { FiGithub } from "react-icons/fi";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>voltages&apos;s next.js personal website template</title>
            </Head>
            <SideMenu/>
            <div className="h-[100vh] flex flex-col items-center justify-center text-zinc-300 text-3xl font-semibold">
                <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 pl-8 pr-8 flex flex-col md:flex-row">
                    <div>
                        <Image src={profilePic} alt="avatar" layout="fixed" className="rounded-2xl"width={128} height={128}/>
                    </div>
                    <section className="md:pl-8 lg:w-[32rem]">
                        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#D8B7EE] via-[#E494AC] to-[#A1CBF7]">Hello there.</h1>
                        <p className="font-normal text-lg">
                            This is a personal website/portfolio template made with Next.js, React.js and Tailwind CSS for easily making ur own personal website without the hassle. 
                        </p>
                        <motion.a target="_blank" href="https://github.com/v4ltages/next-personal-web-template" rel="noopener noreferrer" whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.9 }} className="flex w-60 px-4 py-3 mt-8 bg-black rounded border border-neutral-800 hover:border-white transition-all">
                            <div className="flex gap-2 items-center">
                                <FiGithub className="text-2xl"/>
                                <p className="text-lg font-semibold">Clone this on GitHub</p>
                            </div>
                        </motion.a>
                    </section>
                </motion.div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
