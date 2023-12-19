'use client'
import {useState} from 'react'
import {motion , AnimatePresence} from 'framer-motion'

import { navVariants , navcontent } from '@/utils/motion'
import Image from 'next/image'
import { navLinks } from '@/constants'


const Navbar = () => {

  const [nav , setNav] = useState(false)

  return (
    <div>
         <motion.nav  variants={navcontent} initial='hidden' whileInView='show' viewport={{once:true}} className={`sm:px-16 px-6  py-8  md:bg-[#030014ce]  text-white relative`}> 
        {/* <div className=' absolute w-[50%] inset-0 gradient-01'/> */}
        <motion.video variants={navVariants} initial='hidden' whileInView='show' playsInline  autoPlay muted loop className='   absolute -z-10 top-[-40px] md:top-[-170px] 2xl:top-[-450px] sm:top-[-114px] rotate-100 lg:top-[-230px] xl:top-[-320px] w-full object-cover  left-0'>
        <source src='/blackhole.mp4'  type='video/mp4'/>
        </motion.video>
        <motion.video variants={navVariants} initial='hidden' whileInView='show'   autoPlay muted loop className='  absolute -z-10 top-[-40px] md:top-[-170px] 2xl:top-[-450px] sm:top-[-114px] rotate-100 lg:top-[-230px] xl:top-[-320px] w-full object-cover  left-0'>
        <source src='/blackholeS.webm'  type='video/webm'/>
        </motion.video>
        
        <div className={`lg:w-[80%] relative z-30 w-[100%] flex justify-between  gap-8 mx-auto`}>
            <Image src='/search.svg' alt='search' className='hidden md:block w-[24px] h-[24px] object-contain' width={20} height={20}/>
            <h2 className=' font-extrabold text-[14px] sm:text-[24px] leading-[30px]'>
              METAVERSE
            </h2>
            <Image src='/menu.svg' alt='menu' width={24} onClick={()=>setNav(!nav)} height={24} className=' cursor-pointer object-contain'/>
        </div>

       
    
       
    </motion.nav>

    <AnimatePresence>
      {nav && (
            <div >
                <motion.div animate={{ opacity:1}} exit={{opacity:0}} initial={{ opacity:0}} transition={{duration:1}} className=' relative w-full h-screen   -top-20 z-10 flex items-center justify-center bg-[#030014ce] backdrop-blur-sm '>
                  <ul className=' flex justify-center lg:flex-row flex-col items-center gap-10'>  
                  {navLinks.map((item)=>(
                      <motion.li   key={item.title} className='text-[30px] cursor-pointer hover:text-[40px] md:text-[40px] md:hover:text-[60px] transition-all ease-in duration-150 2xl:hover:text-[100px] hover:text-purple-400 text-white 2xl:text-[55px] lg:text-[30px] xl:hover:text-[50px] font-extrabold '>
                          <a >{item.title}</a>
                      </motion.li>
                    ))}
                  </ul>
                    <motion.div animate={{right:0 , opacity:1}} exit={{right:100  , opacity:0}} initial={{right:600 , opacity:0}} transition={{duration:0.5}}  className=' gradient-07 -z-10'/>
                </motion.div>
            </div>
      )}
    
    </AnimatePresence>
   
    </div>
   
  )
}

export default Navbar
