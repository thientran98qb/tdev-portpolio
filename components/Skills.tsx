import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'


type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='py-5'>
      <h3 className='titleMain'>Skills</h3>
      <div className='flex justify-center flex-wrap gap-2'>
        <Skill percent={70} src='https://imgs.search.brave.com/Q7vsndj7akXd7BbNA0eEaiCkAbaDyLYJTzq7cNKT3go/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wOS9SZWFjdF9s/b2dvX2xvZ290eXBl/X2VtYmxlbS5wbmc'/>
        <Skill percent={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"/>
        <Skill percent={70} src='https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png'/>
        <Skill percent={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'/>
        <Skill percent={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425'/>
        <Skill percent={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'/>
        <Skill percent={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'/>
        <Skill percent={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png'/>
      </div>
    </div>
  )
}

export default Skills
