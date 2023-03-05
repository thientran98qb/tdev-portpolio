import React from 'react'
import Image from 'next/image'
import profilePic from '../public/me.jpeg'
type Props = {}

const AboutMe = (props: Props) => {
  return (
    <div>
      <h3 className='titleMain'>About me</h3>
      <div className='flex flex-col items-center justify-center px-5 md:flex-row md:px-10 gap-[20px]'>
        <div>
          <Image
            src={profilePic}
            alt="Picture of the author"
            className='flex-1 rounded-full object-cover w-56 h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
          />
        </div>
        <div className='flex-1'>
          <p>
            Im TDev. Someone who loves technology and explores the world.
            Currently I am a software engineer, website programmer. The main language Im using is PHP and I also make interfaces using REACTJS and VUEJS. I am a person who loves to learn and discover new things.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
