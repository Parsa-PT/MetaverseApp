'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { TypingText , TitleText ,} from '../Customtext'
import StartStep from '../StartStep'
import {staggerContainer , fadeIn, planetVariants  } from '@/utils/motion'
import Image from 'next/image'
import { startingFeatures } from '@/constants'

const GetStarted = () => {
  return (
    <section id='started' className=' relative flex justify-center z-10 sm:p-16 xs:p-8 px-6 py-12'>
            <motion.div variants={staggerContainer({staggerChildren:0.25 , delayChildren:0.25})} initial='hidden'  whileInView='show' viewport={{once:false , amount:0.25}} className='flex flex-col lg:flex-row 2xl:max-w-[1280px] w-full'>
                    <motion.div variants={planetVariants({direction : 'left'})} className=' flex-1 flex justify-center items-center'>
                        <Image src='/get-started2.png' width={2300} height={2300} alt='started' className=' w-[90%] h-[90%] object-contain'/>
                    </motion.div>
                    <motion.div variants={fadeIn({direction:'left' , type:'tween' , delay:0.2 , duration:1})} className=' flex-[0.75] flex justify-center flex-col'>
                        <TypingText title='|  How Metaverse Works' textStyle='text-start'/>
                        <TitleText title={<>Get Started with just a few clicks</>} textStyle='text-start'/>
                        <div className=' mt-[31px] flex flex-col gap-[24px] max-w-[370px]'>
                            {startingFeatures.map((item , index)=>(
                                    <StartStep key={item} number={index + 1} text={item}/>
                            ))}
                        </div>
                    </motion.div>
            </motion.div>
    </section>
  )
}

export default GetStarted
