import { motion } from "framer-motion";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiGithubsponsors } from "react-icons/Si";

export const SideMenu = () => {
    return (
        <aside className="hidden md:fixed w-48 items-center h-screen bg-neutral-900 border-r-2 border-neutral-800 text-white md:flex justify-between flex-col z-10">
            <menu className="flex flex-col py-8 gap-4">
                <p>Page 1</p>
                <p>Page 2</p>
                <p>Page 3</p>
                <p>Page 4</p>
            </menu>
            <div className="flex py-8 flex-col">
                <div className="flex flex-row gap-4">
                    <a className="text-zinc-300 hover:text-white transition-all" target="_blank" href="https://github.com/v4ltages" rel="noopener noreferrer">
                        <FiGithub className="text-2xl"/>
                    </a>
                    <a className="text-zinc-300 hover:text-white transition-all" target="_blank" href="https://github.com/sponsors/v4ltages" rel="noopener noreferrer">
                        <SiGithubsponsors className="text-2xl"/>
                    </a>
                    <a className="text-zinc-300 hover:text-white transition-all" target="_blank" href="https://twitter.com/v4ltages" rel="noopener noreferrer">
                        <FiTwitter className="text-2xl"/>
                    </a>
                </div>
                <p className="font-normal text-sm text-zinc-700 hover:text-white pt-4">Hosted on Vercel.</p>
            </div>
        </aside>
    )
}