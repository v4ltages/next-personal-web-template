import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

// framer-motion guide: https://www.framer.com/docs/introduction/
// useRouter: https://nextjs.org/docs/api-reference/next/router
// Change the style of the links: https://tailwindcss.com/docs/

const PageLink: FC<{href: string}> = ({href, children}) => {
   const router = useRouter();

  return (
    <Link href={href}>
      <motion.a whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.9 }} className={router.asPath === href ? "bg-white border-white text-black rounded" : "bg-transparent rounded border border-neutral-800 hover:border-white transition-all"}>
        {children}
      </motion.a>
    </Link>
  );
}
export default PageLink;