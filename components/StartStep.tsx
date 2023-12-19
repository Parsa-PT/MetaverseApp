import React from 'react'

type StartStepProp ={
    number : number,
    text:   string
}

const StartStep = ({number , text} : StartStepProp) => {
  return (
    <div className='flex justify-center items-center flex-row'>
      <div className=' flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]'>
        <p className=' font-bold text-white text-[]20px'>0{number}</p>
      </div>
      <p className=' flex-1 ml-[30px] text-[18px] font-normal text-[#b0b0b0] leading-[32px]'>
        {text}
      </p>
    </div>
  )
}

export default StartStep
