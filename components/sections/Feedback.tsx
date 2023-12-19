'use client'
import React from 'react'
import {motion} from 'framer-motion'
import {staggerContainer , fadeIn ,zoomIn } from '@/utils/motion'
import Image from 'next/image'


const Feedback = () => {
  return (
    <section className="flex justify-center relative z-10 sm:p-16 xs:p-8 px-6 py-12">
    <motion.div
      variants={staggerContainer({
        staggerChildren: 0.25,
        delayChildren: 0.25,
      })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col   2xl:max-w-[1280px] w-full lg:flex-row gap-6"
    >   

      <motion.div variants={fadeIn({direction:'right', type:'tween' , delay:0.2 , duration:1})} className=' flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'>
        <div className='feedback-gradient'/>
        <div>
            <h4 className=' font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>Smantha</h4>
            <p className=' mt-[8px] font-normal sm:text-[18px] text-[12px]  text-white leading-[16px]'>| Founder of metaverse</p>
        </div>

        <p className=' mt-[24px] font-normal sm:text-[24px] text-[18px]  text-white sm:leading-[45px] leading-[30px]'>
        “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
        </p>
      </motion.div>

      <motion.div variants={fadeIn({direction:'left' , type:'tween' , delay:0.2 , duration:1})} className=' relative flex-1 flex justify-center items-center '>
            <Image src='/planet-09.png' alt='planet' width={2300} height={2300} className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'/>
            <motion.div variants={zoomIn({delay:0.4 , duration:1})} className=' lg:block hidden absolute -left-[9%] top-[10%]'>
                    <Image src='/stamp.png' alt='stamp' width={500} height={500} className=' w-[120px] object-contain' />
            </motion.div>
      </motion.div>
    </motion.div>
    </section>
  )
}

export default Feedback
