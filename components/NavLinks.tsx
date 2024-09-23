'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import clsx from 'clsx'
import {motion} from 'framer-motion'

export default function NavLinks() {
    const [activeSec, setActiveSec] = useState('Me');

    if (typeof window !== "undefined") {
        // Function for highlighting navbar section onscroll
        window.addEventListener('scroll', () => {
            document.querySelectorAll<HTMLElement>("section[id]").forEach( sec => {
                console.log("Top:" + sec.offsetTop);
                if(window.scrollY >= (sec.offsetTop - (sec.offsetHeight/2))  &&
                    window.scrollY <= (sec.offsetTop + (sec.offsetHeight/2))){
                    let id = sec.getAttribute('id');
                    if (id != null){
                        setActiveSec(id);
                    }
                }
            })
            })
      }


    const links = ["Me", "Mathematics", "Creative Works", "Misc"]
    return (
        <header className='z-[999] relative'>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[6rem] w-full rounded-none
            border  border-white border-opacity-50 bg-slate-800 bg-opacity-80
            shadow-lg shadow-black backdrop-blur-[0.5rem]
            md:top-5 md:rounded-full md:w-[75vw] md:h-[4rem]">
                <nav className="flex flex-wrap h-full py-0 md:py-2">
                    <ul className="h-full w-full flex flex-wrap justify-between items-center px-6
                    text-slate-300 font-medium text-sm md:text-lg
                    md:flex-nowrap md:gap-5">
                        {links.map(link => 
                            <li key={`#${link}`} className="flex lg:w-full items-center justify-center relative">
                                <Link className={clsx("transition-all hover:text-slate-50 hover:text-base md:hover:text-xl flex w-full items-center justify-center py-2 px-2", 
                                {"text-slate-50 text-base md:text-xl": activeSec === link })}
                                    href={`#${link}`}
                                    // Highlight correct section of navbar onclick
                                    onClick={() => {setActiveSec(link)}}
                                    >

                                    {link}

                                    {link === activeSec &&
                                    (<motion.span className="rounded-full absolute inset-0 -z-10
                                    bg-sky-700 opacity-60 blur-md"
                                    layoutId="activeSec"
                                    transition={
                                        {type: 'easeInOut',
                                        delay: 0.1
                                        }}></motion.span>)}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
