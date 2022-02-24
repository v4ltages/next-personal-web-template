import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiGithubsponsors } from "react-icons/si";
import { HiOutlineCollection, HiOutlineHome, HiOutlineIdentification } from "react-icons/hi";
import PageLink from "./PageLink";

// To customize the SideMenu buttons, go to PageLink.tsx to change the style of them.
// If you want to change the link's between pages then change the href="" in <PageLink> and <MobileMenu> and make sure to also modify the file names of the pages for example cards.tsx or page4.tsx including the exported function name "export default function Page4() {"

export const SideMenu = () => {
    return (
        <aside className="overflow-hidden transition-all -translate-x-48 md:translate-x-0 fixed w-48 h-screen border-r bg-black border-neutral-800 text-zinc-300 md:flex justify-between flex-col z-10">
            <menu className="flex flex-col p-4 gap-4 font-semibold">
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
                <p className="font-normal text-sm text-zinc-700 hover:text-white pt-4 transition-all">Hosted on Vercel.</p>
            </div>
        </aside>
    );
};