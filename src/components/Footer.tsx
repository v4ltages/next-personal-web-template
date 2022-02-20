import { HiOutlineHeart } from "react-icons/hi";

export const Footer = () => {
    return (
        <div className="w-screen bottom-0 left-0 fixed h-16 flex items-center justify-end text-zinc-700 hover:text-white p-6">
            <p className="font-normal text-lg">Template made by voltages with</p>
            <HiOutlineHeart className="ml-1 text-xl"/>
        </div>
    )
}