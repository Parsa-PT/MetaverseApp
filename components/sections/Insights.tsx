'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { TypingText , TitleText ,} from '../Customtext'
import InsightCard from '../InsightCard'
import {staggerContainer  } from '@/utils/motion'
import Image from 'next/image'
import { insights } from '@/constants'

const Insights = () => {
  return (
    <section id='insight' className="flex justify-center relative z-10 sm:p-16 xs:p-8 px-6 py-12">
    <motion.div
      variants={staggerContainer({
        staggerChildren: 0.25,
        delayChildren: 0.25,
      })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col  gap-8 2xl:max-w-[1280px] w-full"
    >   

    <TypingText title='| Insight' textStyle='text-center'/>
    <TitleText  title='Insight about metaverse' textStyle='text-center'/>
      <div className=' mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((item , index)=>(
            <InsightCard key={item.id} {...item} index={index + 1}/>
        ))}
      </div>
    </motion.div>
    </section>
  )
}

export default Insights
