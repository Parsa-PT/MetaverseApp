"use client";
import React from "react";
import { motion } from "framer-motion";
import {fadeIn } from '@/utils/motion'
import Image from "next/image";

type InsightCardProp ={
    imgUrl:string,
    title:string,
    subtitle : string,
    index: number
}

const InsightCard = ({imgUrl , title ,subtitle , index} : InsightCardProp) => {
  return (
    <motion.div variants={fadeIn({direction:'up' , type:'spring' , delay:index * 0.5 , duration:1})} className=" flex md:flex-row flex-col gap-4 ">
            <Image src={imgUrl} alt="planet" width={350} height={350} className=" md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"/>
            <div className=" w-full flex justify-between items-center ">
                <div className=" flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                    <h4 className=" font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
                    <p className=" mt-[16px] font-normal lg:text-[20px] text-[14px] text-[#ffffffbe]">{subtitle}</p>
                </div>

                <div className="transition-all ease-in duration-[0.4s] hover:rotate-[360deg] lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                    <Image src='/arrow.svg' alt=" arrow" width={50} height={50} className=" h-[40%]  w-[40%] object-contain"/>
                </div>
            </div>
    </motion.div>
  )
}

export default InsightCard
