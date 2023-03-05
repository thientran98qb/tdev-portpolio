import React from 'react'
import Image from 'next/image'
import profilePic from '../public/me.jpeg'
import { Typewriter } from 'react-simple-typewriter'


type Props = {}

const BannerHero = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center text-center text-4xl font-bold py-5 border border-dashed'>
      {/* <Image
        src={profilePic}
        alt="Picture of the author"
        width={250}
        height={250}
        className='flex-1'
      /> */}
      <div className='text-[20px] md:text-2xl'>
        <Typewriter words={["I'm a TDev", "Frontend developer", "I'd like to explode everything"]} loop typeSpeed={100} cursor/>
      </div>
    </div>
  )
}

export default BannerHero
