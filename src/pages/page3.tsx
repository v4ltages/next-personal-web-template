import { SideMenu } from "../components/SideMenu";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion"

export default function Page3() {
    return (
        <>
            <SideMenu/>
            <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 px-8 py-8 text-zinc-300">
                <p className="">Nothing here, make ur own content :)</p>
            </motion.div>
            <Footer/>
        </>
    );
};