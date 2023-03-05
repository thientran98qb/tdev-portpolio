import React from 'react'
import { motion } from "framer-motion"


type Props = {
  src: string,
  percent: number
}

const Skill = ({src, percent}: Props) => {
  return (
    <div className='cursor-pointer flex group relative'>
      <motion.img
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        src={src}
        className='border rounded-full p-1 filter bg-white object-contain h-24 w-24'
      />
      <div className='absolute h-24 w-24 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out group-hover:bg-white rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl text-black'>{percent}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
