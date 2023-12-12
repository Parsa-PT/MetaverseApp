'use client'
import React from 'react'
import {motion} from 'framer-motion'
import styles from '@/style'
import { navVariants } from '@/utils/motion'
import Image from 'next/image'


const Navbar = () => {
  return (
    <motion.nav variants={navVariants} initial='hidden' whileInView='show'  className={`sm:px-16 px-6  py-8 text-white relative`}> 
        <div className=' absolute w-[50%] inset-0 gradient-01'/>
        <div className={`${styles.innerWidth} flex justify-between gap-8 mx-auto`}>
            <Image src='/search.svg' alt='search' className='hidden md:block w-[24px] h-[24px] object-contain' width={20} height={20}/>
            <h2 className=' font-extrabold text-[24px] leading-[30px]'>
              METAVERSE
            </h2>
            <Image src='/menu.svg' alt='menu' width={24} height={24} className=' object-contain'/>
        </div>
    </motion.nav>
  )
}

export default Navbar
