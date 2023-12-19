'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { socials } from '@/constants'
import { footerVariants } from '@/utils/motion'
import Image from 'next/image'

const Footer = () => {
  return (
    <motion.footer variants={footerVariants} initial='hidden' whileInView='show' className='sm:p-16 xs:p-8 px-6  py-8 relative  '>
        <div className='footer-gradient '/>
        <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
          <div  className=' flex items-center justify-between flex-wrap gap-5'>
          <h4 className=' font-bold md:text-[64px] text-[44px] text-white'>Enter the Metaverse </h4>
          <button type='button' className=' flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
            <Image src='/headset.svg' alt='headset' width={100} height={100} className=' w-[24px] h-[24px] object-contain'/>
            <span className=' font-normal  text-[16px] text-white'>Enter the Metaverse</span>
          </button>
          </div>
          
          <div className=' flex flex-col relative '>
            
              <div className=' mb-[50px] h-[2px] bg-white opacity-10'/>
              
              <div className=' flex items-center justify-between flex-wrap gap-4'>
                  <h4 className=' font-extralight text-[24px] text-white'>Metaverse</h4>
                  <div className=' flex items-center'>
                  <p className=' font-normal text-[14px] text-white opacity-50'>Copyright © 2023 - 2024 | Design by  <span className="  text-center text-transparent  bg-clip-text bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] "> Rexcode</span> </p>
                  </div>
                  <div className=' flex gap-4'>
                    {socials.map((item)=>(
                      <Image key={item.name} src={item.url} alt={item.name} width={20} height={20} className=' w-[24px] h-[24px] object-contain cursor-pointer'/>
                    ))}
                  </div>
              </div>
          </div>
        </div>
    </motion.footer>
  )
}

export default Footer
