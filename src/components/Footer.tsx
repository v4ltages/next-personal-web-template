import { HiOutlineHeart } from "react-icons/hi";

export const Footer = () => {
    return (
        <div className="w-screen bottom-0 left-0 fixed h-24 flex items-center justify-end p-6">
            <div>
                <div className="flex flex-row text-zinc-700 hover:text-white">
                    <p className="font-normal text-sm">Template made by voltages with</p>
                    <HiOutlineHeart className="ml-1 text-lg"/>
                </div>
                <p className="md:hidden font-normal text-sm text-zinc-700 hover:text-white">Hosted on Vercel.</p>
            </div>
        </div>
    )
}