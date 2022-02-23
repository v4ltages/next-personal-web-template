import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiGithubsponsors } from "react-icons/si";
import { HiOutlineCollection, HiOutlineHome, HiOutlineIdentification, HiOutlineMenu } from "react-icons/hi";
import PageLink from "./PageLink";
import { useState } from "react";
import { motion } from "framer-motion";

// To customize the SideMenu buttons, go to PageLink.tsx to change the style of them.
// If you want to change the link's between pages then change the href="" in <PageLink> and <MobileMenu> and make sure to also modify the file names of the pages for example cards.tsx or page4.tsx including the exported function name "export default function Page4() {"

export const MobileMenu = () => {

    const [openMobileMenu, setMobileMenu] = useState(false)

    return (
    <>
        <motion.button whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.9 }} onClick={ () => setMobileMenu(!openMobileMenu)}>
            <HiOutlineMenu className="md:hidden text-zinc-300 hover:text-white flex text-3xl text-"/>
        </motion.button>
        {openMobileMenu && <MobileContent/>}
    </>
    );
};

const MobileContent = () => {
    return (
        <motion.div className="fixed bottom-0 left-0 right-0 h-[100vh] mb-24 bg-black border-b border-neutral-800 text-zinc-300 justify-between flex-col z-20">
            <menu className="flex mt-48 flex-col p-4 gap-4 font-semibold">
                <PageLink href={"/"}>
                    <div className="flex gap-2 rounded px-4 py-2 items-center">
                        <HiOutlineHome className="text-2xl"/> 
                        <p>Home</p>
                    </div>
                </PageLink>
                <PageLink href={"/about"}>
                    <div className="flex gap-2 rounded px-4 py-2 items-center">
                        <HiOutlineIdentification className="text-2xl"/>
                        <p>About</p>
                    </div>
                </PageLink>
                <PageLink href={"/cards"}>
                    <div className="flex gap-2 rounded px-4 py-2 items-center">
                        <HiOutlineCollection className="text-2xl"/>
                        <p>Cards</p>
                    </div>
                </PageLink>
                <PageLink href={"/page4"}>
                    <div className="flex gap-2 rounded px-4 py-2 items-center">
                        <p>Page 4</p>
                    </div>
                </PageLink>
            </menu>
            <div className="flex p-8 items-center flex-col">
                <div className="flex flex-row gap-16">
                    <a className="text-zinc-300 hover:text-white transition-all" target="_blank" href="https://github.com/v4ltages" rel="noopener noreferrer">
                        <FiGithub className="text-3xl"/>
                    </a>
                    <a className="text-zinc-300 hover:text-white transition-all" target="_blank" href="https://github.com/sponsors/v4ltages" rel="noopener noreferrer">
                        <SiGithubsponsors className="text-3xl"/>
                    </a>
                    <a className="text-zinc-300 hover:text-white transition-all" target="_blank" href="https://twitter.com/v4ltages" rel="noopener noreferrer">
                        <FiTwitter className="text-3xl"/>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};