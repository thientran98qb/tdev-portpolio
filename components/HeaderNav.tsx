import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { WrapperContextProvider } from '@/stores/WrapperContext'

type Props = {}

const HeaderNav = (props: Props) => {

  return (
    <header className='sticky flex justify-between items-center py-3'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1
        }}
      >
        <div className='flex gap-2 items-center'>
          <SocialIcon url='https://www.facebook.com/thientran98qb/'/>
          <SocialIcon url='https://github.com/thientran98qb'/>
          <SocialIcon url='https://www.linkedin.com/in/thi%E1%BB%87n-tr%E1%BA%A7n-067930209/'/>
          <SocialIcon network='email'/>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1
        }}
      >
        <ul className='hidden md:flex md:gap-2 md:mr-5'>
          <li className='hover:underline'>
            <a href="">About</a>
          </li>
          <li className='hover:underline'>
            <a href="">Works</a>
          </li>
          <li className='hover:underline'>
            <a href="">Skills</a>
          </li>
          <li className='hover:underline'>
            <a href="">Projects</a>
          </li>
        </ul>
      </motion.div>
    </header>
  )
}

export default HeaderNav
