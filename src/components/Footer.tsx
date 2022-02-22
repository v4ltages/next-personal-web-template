import { HiOutlineHeart } from "react-icons/hi";
import { MobileMenu } from "./MobileMenu";

export const Footer = () => {
    return (
        <div className="w-screen bottom-0 left-0 fixed h-24 flex items-center justify-between px-10 bg-[#111111]">
            <div>
                <MobileMenu/>
            </div>
            <div>
                <div className="flex flex-row text-zinc-700 hover:text-white transition-all">
                    <p className="font-normal text-sm">Template made by Voltages with</p>
                    <HiOutlineHeart className="ml-1 text-lg"/>
                </div>
                <p className="md:hidden font-normal text-sm text-zinc-700 hover:text-white transition-all">Hosted on Vercel.</p>
            </div>
        </div>
    )
}