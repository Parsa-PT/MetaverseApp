'use client'
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";


const WorldCard = () => {
  return (
    <div>
      
        <TiltCard/>
        <TiltCard2/>
      
    </div>
  );
};

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
  
    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className=" w-full relative "
      >
       <div style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }} className="w-[200px] h-[167px] md:w-[217px]  shadow hidden p-2 absolute bottom-[13rem] 2xl:left-[10%] rounded-[24px] md:flex items-center justify-center  overflow-hidden bg-[#5d668092]">
        <div  className=" w-full h-full  shadow-2xl rounded-[24px]  ">
          <Image
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
            src="/worldbg1.jpeg"
            alt="world"
            width={1000}
            height={1000}
            className=" h-full rounded-[24px]  object-cover"
          />
          <div className=" flex w-full items-center  space-x-[-14px] absolute top-20 left-4">
            <Image
              src="/people-03.png"
              alt="avatar"
              className=" w-[30px] h-[30px]"
              width={100}
              height={100}
            />
            <Image
              src="/people-02.png"
              alt="avatar"
              className=" w-[30px] h-[30px]"
              width={100}
              height={100}
            />
            <Image
              src="/people-01.png"
              alt="avatar"
              className=" w-[30px] h-[30px] "
              width={100}
              height={100}
            />
            <h3  className=" text-white text-[13px] absolute left-[50%] translate-x-[-30%]">
              + 264 has joined
            </h3>
          </div>
          <div style={{
            transform: "translateZ(50px)",
          }} className=" flex w-full  left-4 space-x-[-14px] absolute bottom-5 ">
            <h1  className=" text-white font-bold text-[20px]">
              The Upside Down
            </h1>
          </div>
        </div>
      </div>


      

      </motion.div>
    );
  };


  const TiltCard2= () => {
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
  
    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className=" w-full relative "
      >
       


      <div style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}  className="w-[200px] md:w-[217px] hidden p-2 absolute shadow2 top-[-35rem] right-[30%] rounded-[24px] md:flex items-center justify-center  overflow-hidden bg-[#5d6680]">
        <div className=" w-full h-full  ">
          <Image
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }} 
            src="/worldbg2.png"
            alt="world"
            width={1000}
            height={1000}
            className="rounded-[24px] object-cover"
          />
          <div className=" flex w-full items-center  space-x-[-14px] absolute top-20 left-4">
            <Image
              src="/people-03.png"
              alt="avatar"
              className=" w-[30px] h-[30px]"
              width={100}
              height={100}
            />
            <Image
              src="/people-02.png"
              alt="avatar"
              className=" w-[30px] h-[30px]"
              width={100}
              height={100}
            />
            <Image
              src="/people-01.png"
              alt="avatar"
              className=" w-[30px] h-[30px] "
              width={100}
              height={100}
            />
            <h3  className=" text-white text-[13px] absolute left-[50%] translate-x-[-30%]">
              + 312 has joined
            </h3>
          </div>
          <div style={{
            transform: "translateZ(50px)",
          }} className=" flex w-full  left-4 space-x-[-14px] absolute bottom-5 ">
            <h1 className=" text-white font-bold text-[20px]">Hawkins Labs</h1>
          </div>
        </div>
      </div>

      </motion.div>
    );
  };

export default WorldCard;
