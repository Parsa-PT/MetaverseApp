import React from 'react'

type StartStepProp ={
    number : number,
    text:   string
}

const StartStep = ({number , text} : StartStepProp) => {
  return (
    <div className='flex justify-center items-center flex-row'>
      <div className=' flex justify-center items-center w-[70px] h-[70px]'></div>
    </div>
  )
}

export default StartStep
