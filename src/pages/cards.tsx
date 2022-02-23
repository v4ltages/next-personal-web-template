import { SideMenu } from "../components/SideMenu";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion"
import Head from "next/head";
import voltagesMe from '/public/voltages-me.png'

export default function Cards() {
    return (
        <>
            <Head>
                <title>Cards Example</title>
            </Head>
            <SideMenu/>
            <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 px-8 pt-8 pb-32 text-zinc-300">
            <h1 className="font-bold text-white text-2xl">Example of Cards</h1>
                <p className="">They look like buttons.</p>
                <h1 className="font-bold text-white text-xl py-4">Cards</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border flex bg-black rounded border-neutral-800 hover:border-white transition-all">
                        <img src={voltagesMe.src} alt="picture of website" className="flex h-full w-32 rounded-l object-cover"/>
                        <div className="p-4">
                            <h1 className="font-bold text-white text-xl">voltages.me</h1>
                            <p className="text-lg">Check out my site. ❤️</p>
                        </div>
                    </div>
                    <div className="p-4 border flex bg-black rounded border-neutral-800 hover:border-white transition-all">
                        This is also a card
                    </div>
                    <div className="p-4 border flex bg-black rounded border-neutral-800 hover:border-white transition-all">
                        This aswell is a card
                    </div>
                </div>
            </motion.div>
            <Footer/>
        </>
    );
};