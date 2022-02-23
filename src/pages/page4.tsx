import { motion } from "framer-motion";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { SideMenu } from "../components/SideMenu";

export default function Page4() {
    return (
        <>
            <Head>
                <title>Page 4</title>
            </Head>
            <SideMenu/>
            <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 px-8 pt-8 pb-32 text-zinc-300">
                <p className="">Nothing here, make ur own content :)</p>
            </motion.div>
            <Footer/>
        </>
    );
};