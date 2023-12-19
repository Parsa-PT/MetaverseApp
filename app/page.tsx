
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Explore from '@/components/sections/Explore'
import Feedback from '@/components/sections/Feedback'
import GetStarted from '@/components/sections/GetStarted'
import Hero from '@/components/sections/Hero'
import Insights from '@/components/sections/Insights'
import WhatsNew from '@/components/sections/WhatsNew'
import World from '@/components/sections/World'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" relative overflow-hidden">
     
        <Navbar/>
        <Hero/>
        <div className=' relative'>
        <About/>
          <div className=' gradient-03 z-0'/>
        <Explore/>
        </div>
        <div className=' relative'>
          <GetStarted/>
          <div className=' gradient-04 z-0'/>
          <WhatsNew/>
        </div>
        <div className='relative'>
          <World/>
          <div className='gradient-04 z-0'/>
          <Insights/>
        </div>

        <div>
          <Feedback/>
        </div>

    
        
        <Footer/>
    </main>
  )
}
