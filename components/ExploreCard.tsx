'use client'
import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn  } from '@/utils/motion'
import Image from 'next/image'

type ExploreCardProp ={
    id:string,
    imgUrl:string,
    title :string,
    index:any,
    active:string | Number,
    handleClick:any,
}

const ExploreCard = ({id , imgUrl, title, index,active,handleClick} : ExploreCardProp) => {
  return (
    <motion.div onClick={()=> handleClick(id)} variants={fadeIn({direction:'right' , type:'spring', delay:0.5 * index , duration:0.75})} className={` relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-100  ease-out-flex cursor-pointer`}>
        <Image src={imgUrl} width={550} height={550} alt='test' className=' absolute w-full h-full object-cover rounded-[24px]'/>
        {active !== id ? (
            <h3 className=' font-semibold sm:text-[26px] text-[18px] absolute text-white z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
                {title}
            </h3>
        ) : (
          <div className=' absolute bottom-0 p-8   justify-start w-full flex-col bg-[#00000084] rounded-b-[24px]'>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism  mb-[16px]'>
              <Image src='/headset.svg' alt='headset' width={20} height={20} className=' w-1/2 h-1/2  object-contain'/>
            </div>
            <p className=' font-normal text-white uppercase leading-[20px] text-[16px]'>
              enter the Metaverse
            </p>
            <h2 className=' mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>{title}</h2>
          </div>
        )}
    </motion.div>
  )
}

export default ExploreCard
