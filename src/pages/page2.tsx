import { SideMenu } from "../components/SideMenu";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export default function Page2() {
    return (
        <>
            <SideMenu/>
            <motion.div animate={{ opacity: [0, 1], x: [-20, 0] }} transition={{ duration: 0.4 }} className="md:pl-56 px-8 py-8 text-zinc-300">
                <h1 className="font-bold text-xl">About me</h1>
                <p className="">Nothing here, make ur own content :)</p>
                <h1 className="font-bold text-xl pt-4">Lorem Ipsum</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium aut, veritatis sunt, reiciendis, ducimus ullam aperiam tenetur earum excepturi ratione voluptatibus. Aut corporis minus perspiciatis, deserunt eligendi architecto dolores voluptate?</p>
            </motion.div>
            <Footer/>
        </>
    );
};