import { SideMenu } from "../components/SideMenu";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <SideMenu/>
            <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 px-8 pt-8 pb-32 text-zinc-300 text-lg">
                <h1 className="font-bold text-white text-2xl">About me</h1>
                <p className="">Nothing here, make ur own content :)</p>
                <h1 className="font-bold text-white text-xl pt-4">Lorem Ipsum</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium aut, veritatis sunt, reiciendis, ducimus ullam aperiam tenetur earum excepturi ratione voluptatibus. Aut corporis minus perspiciatis, deserunt eligendi architecto dolores voluptate?</p>
            </motion.div>
            <Footer/>
        </>
    );
};