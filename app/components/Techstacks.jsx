import { assets, techstacksData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Teckstacks = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='services' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'
      >Professional Skills</motion.h4>
      <h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'
      >My tech stacks</h2>

      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I have 6 months of experience in programming at Fintalent Extend Team, 
        during the process of working here and studying at the school, 
        I have participated in practical projects from small to large 
        using modern frameworks along with trending libraries.
      </motion.p>

      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-auto gap-6 my-10'
      >
        {techstacksData.map(({icon, title, description, link}, index) => (
          <motion.div 
            whileHover={{scale: 1.05}}
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer 
            hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 
            dark:hover:bg-darkHover dark:hover:shadow-white'
          >
            <Image alt='' src={icon} className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4 
        initial={{y: 20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 1.3}}
        className='my-6 text-gray-700 font-Ovo dark:text-white/80'
      >Tools I use</motion.h4>

      <motion.ul 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 1.5}}
        className='flex items-center gap-3 sm:gap-5'
      >
        {toolsData.map((tool, index) => (
          <motion.li 
            whileHover={{scale: 1.1}}
            key={index} 
            className='flex items-center justify-center w-12 sm:w-14 
            aspect-square border border-gray-400 rounded-lg cursor-pointer 
            hover:-translate-y-1 duration-500'
          >
            <Image alt='Tool' src={tool} className='w-5 sm:w-7' />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default Teckstacks