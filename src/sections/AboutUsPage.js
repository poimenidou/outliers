import React from "react"; 
import { motion } from 'framer-motion';

import image4 from '../images-aboutus/image4.jpeg'
import image6 from '../images-aboutus/image6.jpeg'

const styles = {
    innerWidth: '2xl:max-w-[1280px] w-full',
    interWidth: 'lg:w-[80%] w-[100%]',
  
    paddings: 'sm:p-16 xs:p-8 px-6 py-12',
    yPaddings: 'sm:py-16 xs:py-8 py-12',
    xPaddings: 'sm:px-16 px-6',
    topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
    bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',
  
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-start items-start',
    flexEnd: 'flex justify-end',
    navPadding: 'pt-[98px]',
  
    // hero section
    heroHeading:
    'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] \
    md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
    textColor: 'black',
  };

export const TypingText = ({ title, textStyles }) => (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
  
  export const TitleText = ({ title, textStyles }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );

  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };
  
  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  
  export const planetVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });

  export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });


const Aboutuspage = () => (
  <div style = {{ margin: "10rem", width:"70%", height:"50%"}}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>
      
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[40000px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative">
         <img
          src={image6}
          alt="planet-09"
          style = {{ marginRight: "2rem", float:"left"}}
          className="circular_image"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[40000px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative">
        <p style = {{ paddingRight: "2rem", paddingTop: "2rem", marginRight: "20rem"}}>
          Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..
          Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..
          Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..
          Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..Maybe someone could add an equally cringe text over here..
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center">
        <img
          src={image4}
          alt="planet-09"
          style = {{ marginTop: "3rem",  marginLeft: "2rem", marginRight: "2rem",  float:"right"}}
          className="circular_image"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center">
      <p style = {{paddingLeft: "5rem", paddingTop: "5rem", marginLeft: "20rem",paddingBottom: "9rem",  textAlign:"right"}}>
        Maybe someone could add an equally cringe text over here..
      </p>
      </motion.div> 

    </motion.div>

    </div>
);

 
export default Aboutuspage;