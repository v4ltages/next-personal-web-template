import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { GitHubButton } from "../components/GitHubButton";
import profilePic from '/public/avatar.png'
import { SideMenu } from "../components/sideMenu";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>voltages&apos;s next.js personal website template</title>
            </Head>
            <SideMenu/>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-white text-3xl font-semibold">
                <div className="md:pl-56 pl-8 pr-8 flex">
                    <img src={profilePic.src} alt="avatar" className="rounded-2xl w-32 h-32"/>
                    <motion.section animate={{ opacity: [0, 1], x: [-20, 0] }} className="pl-8">
                        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#D8B7EE] via-[#E494AC] to-[#A1CBF7]">Hello there.</h1>
                        <p className="font-normal text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis atque libero tempora?
                        </p>
                        <div className="hidden flex-row gap-4">
                            <GitHubButton />
                        </div>
                    </motion.section>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
