'use client'
import React from 'react'
import {motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TypingText , TitleText ,} from '../Customtext'
import NewFeatures from '../NewFeatures'
import {staggerContainer , fadeIn, planetVariants  } from '@/utils/motion'
import Image from 'next/image'
import { newFeatures } from '@/constants'

const WhatsNew = () => {
  const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(
      mouseYSpring,
      [-0.5, 0.5],
      ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-17.5deg", "17.5deg"]
    );
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
  
      x.set(xPct);
      y.set(yPct);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  }

  return (
    <section className=' relative flex justify-center z-10 sm:p-16 xs:p-8 px-6 py-12'>
    <motion.div
     variants={staggerContainer({staggerChildren:0.25 , delayChildren:0.25})}
      initial='hidden' 
       whileInView='show'
        viewport={{once:false , amount:0.25}}
         className='flex flex-col lg:flex-row 2xl:max-w-[1280px] w-full'>
            <motion.div variants={fadeIn({direction:'right' , type:'tween' , delay:0.2 , duration:1})} className=' flex-[0.75] flex justify-center flex-col'>
                <TypingText title='|  Whats New' textStyle='text-start'/>
                <TitleText title={<>Whats new about metaverse</>} textStyle='text-start'/>
                <div className=' mt-[48px] flex flex-wrap gap-[24px] text-white  justify-between'>
                    {newFeatures.map((item , index)=>(
                            <NewFeatures key={item.id} {...item} />
                    ))}
                </div>
            </motion.div>

            <motion.div  variants={planetVariants({direction : 'right'})} className=' flex-1 flex justify-center items-center'>
                <Image  src='/whats-new.png' width={2300} height={2300} alt='started' className=' w-[90%] h-[90%] object-contain'/>
            </motion.div>
    </motion.div>
</section>
  )
}

export default WhatsNew


