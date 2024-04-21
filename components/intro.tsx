"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import profileImg from "@/public/Parth_LinkedIn_Profile_Photo.jpg"
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className="flex items-center justify-center">
            <div className='relative'>
              <motion.div 
                initial= {{opacity: 0, scale: 0}}
                animate= {{opacity: 1, scale: 1}}
                transition= {{
                    type: "tween",
                    duration: 0.2
                }}
              >
              <Image src={profileImg} alt="Parth Portrait" quality="95" priority={true} className='h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
              </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,                    
                }}
                >
                  👋  
                </motion.span>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial= {{opacity: 0, y:100}}
        animate= {{opacity: 1, y: 0}}
        >
        <span className="font-bold">Hello, I'm Parth.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> who{" "}
        <span className="font-bold">loves building web application.</span> I enjoy
        creating <span className="italic">websites & servers</span>. My focus is{" "}
        <span className="underline">Backend development and React (Nextjs)</span>.   
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial = {{opacity: 0, y:100}}
        animate = {{opacity: 1, y:0}}
        transition={{delay: 0.1}}
        > 
          <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here <BsArrowRight /> </Link>
            
          <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href='/Resume.pdf' download>Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /> </a>
          
          <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.25rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href='https://www.linkedin.com/in/p-rathod/' target='_blank'> <BsLinkedin /> </a>    
          
          <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href='https://github.com/Parth0921' target='_blank'> <FaGithubSquare /> </a>
            
        </motion.div>
    </section>
  )
}
