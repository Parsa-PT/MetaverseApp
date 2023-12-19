import React from 'react'
import Image from 'next/image'

type NewFeaturesProp ={
    imgUrl : string,
    title : string,
    subtitle : string,
    id : number | null,
 
}

const NewFeatures = ({imgUrl , title , subtitle , id } : NewFeaturesProp) => {
  return (
    <div className=' flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]' >
      <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]'>
            <Image src={imgUrl} alt='icon' width={100} height={100} className=' w-1/2 object-contain h-1/2'/>

      </div>
      <h1 className=' mt-[26px]  font-bold text-[24px] leading-[30px]'>Title {title}</h1>
            <p className=' flex-1 mt-[16px] text-[18px] font-normal text-[#b0b0b0] leading-[32px]'>{subtitle}</p>
    </div>
  )
}

export default NewFeatures
