import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'
      >Introduction</motion.h4>
      <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'
      >About me</motion.h2>
      
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div 
          initial={{scale: 0.9, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image alt='' src={assets.user_image} className='w-full rounded-3xl' />
        </motion.div>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'
        >
          <h4 className='mb-2 text-lg font-semibold text-gray-700 font-Ovo'>Career Objectives</h4>
          <p className='mb-10 max-w-2xl font-Ovo'>
            In the next two years, I aim to become a Fullstack Developer, focusing on 
            comprehensive web application development. In the following three years,
            I strive to advance to a Senior Developer position, enhancing my 
            knowledge and skills in the technology field.
          </p>

          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'
          >
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li 
                whileHover={{scale: 1.05}}
                key={index} 
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black 
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
              >
                <Image alt={title} src={isDarkMode ? iconDark : icon} className='w-7 h-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <ul className='list-disc pl-4 text-gray-600 text-sm dark:text-white/80'>
                  {description.split(',').map((item, i) => (
                    <li key={i} className='mb-1'>{item.trim()}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About