'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { TypingText , TitleText } from '../Customtext'
import ExploreCard from '../ExploreCard'
import {staggerContainer  } from '@/utils/motion'
import { useState } from 'react'
import { exploreWorlds } from '@/constants'

const Explore = () => {

  const [active , setActive]= useState('world-2')

  return (
    <section id='explore' className='sm:p-16 xs:p-8 px-6 py-12'>
        <motion.div variants={staggerContainer({staggerChildren:0.25 , delayChildren:0.25})} initial='hidden' whileInView='show' viewport={{once:false , amount:0.25}} className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>
            <TypingText title='|  The world' textStyle='text-center'/>
            <TitleText title={<>Choose the world you want <br className='md:block hidden'/> to explore</>} textStyle='text-center'/>
            <div className=' mt-[50px] flex lg:flex-row flex-col gap-5 min-h-[70vh]'>
                {exploreWorlds.map((world , index)=>(
                    <>
                        <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive}/>
                    </>
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Explore
