import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Explore from '@/components/sections/Explore'
import GetStarted from '@/components/sections/GetStarted'
import Hero from '@/components/sections/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
        <Navbar/>
        <Hero/>
        <div className=' relative'>
        <About/>
          <div className=' gradient-03 z-0'/>
        <Explore/>
        </div>
        <div>
          <GetStarted/>
          <div className=' gradient-04 z-0'/>
        </div>
        
        <Footer/>
    </main>
  )
}
