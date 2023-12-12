'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { TypingText , TitleText ,} from '../Customtext'
import StartStep from '../StartStep'
import ExploreCard from '../ExploreCard'
import styles from '@/style'
import {staggerContainer , fadeIn, planetVariants  } from '@/utils/motion'
import Image from 'next/image'
import { useState } from 'react'
import { startingFeatures } from '@/constants'

const GetStarted = () => {
  return (
    <section className=' relative z-10 sm:p-16 xs:p-8 px-6 py-12'>
            <motion.div variants={staggerContainer({staggerChildren:0.25 , delayChildren:0.25})} initial='hidden'  whileInView='show' viewport={{once:false , amount:0.25}} className='2xl:max-w-[1280px] w-full mx-auto lg:flex-row  flex-col gap-8'>
                    <motion.div variants={planetVariants('left')} className=' flex-1 flex justify-center items-center'>
                        <Image src='/get-started.png' width={300} height={300} alt='started' className=' w-[90%] h-[90%] object-contain'/>
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
