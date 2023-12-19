'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { TypingText } from '../Customtext'
import { navVariants , staggerContainer , fadeIn  } from '@/utils/motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <div className=' gradient-02  -z-10'/>
             <motion.div variants={staggerContainer({staggerChildren : 0.25 , delayChildren : 1})} initial='hidden' whileInView='show' viewport={{once:false , amount:0.25}} className='2xl:max-w-[1280px] w-full mx-auto  flex justify-center items-center flex-col'>
                <TypingText title='| About Metaverse' textStyle='text-center'/>
                <motion.p variants={fadeIn({direction:'up' , type:'tween' , delay:0.2 , duration :1})} className=' mt-[8px] mb-5 font-normal sm:text-[32px] text-[20px] text-center text-white'>
                    <span className=' font-extrabold'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the<span className=' font-extrabold'>madness of the metaverse </span>of today, using only  <span className=' font-extrabold'>VR</span>devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
                </motion.p>
                <motion.div variants={fadeIn({direction:'up' , type:'tween' , delay:0.4 , duration:1})}>
                    <Image src='/arrow-down.svg' alt='arrow' width={20} height={20} className=' w-[18px] h-[20px] mt-[28px object-contain]'/>
                </motion.div>
             </motion.div>
        
    </section>
  )
}

export default About
