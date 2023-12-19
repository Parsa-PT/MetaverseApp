"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../Customtext";
import { staggerContainer, fadeIn } from "@/utils/motion";
import Image from "next/image";
import WorldCard from "../WorldCard";

const World = () => {
  return (
    <section className=" relative flex justify-center z-10 sm:p-16 xs:p-8 px-6 py-12">
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

        <TypingText title="|  People on the world" textStyle="text-center"/>
        <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyle="text-center"/>
        <motion.div variants={fadeIn({direction:'up' , type:'tween' , delay:0.3 , duration:1})} className=" relative mt-[68px] flex w-full h-[550px]">
            <Image src='/map.png' alt="map" width={1300} height={1300} className=" w-full h-full object-cover"/>
            <div className=" absolute bottom-20 right-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680]">
                <Image src='/people-01.png' alt="people" width={1100} height={1100} className=" w-full h-full"/>
            </div>
            <div className=" absolute top-10 left-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680]">
                <Image src='/people-02.png' alt="people" width={1100} height={1100} className=" w-full h-full"/>
            </div>
            <div className=" absolute top-1/2 left-[45%] h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680]">
                <Image src='/people-03.png' alt="people" width={1100} height={1100} className=" w-full h-full"/>
            </div>
        </motion.div>
        
            <WorldCard />
     
      </motion.div>
    </section>
  );
};

export default World;
