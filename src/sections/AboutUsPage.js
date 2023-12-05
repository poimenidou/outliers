import React from "react"; 
import { motion } from 'framer-motion';


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
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >  
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
          <TitleText title={<>Is My Art Self-Taught or Self-Thought?</>} />
        <div className="mt-6">
          <p className="text-lg text-center text-[#bcbdbe]">
            As a self-taught artist, drawing inspiration from Pinterest, Instagram, and Google ignites a creative journey filled with diverse ideas. Armed with simple paper or digital tools, I sketch and create, giving life to unique expressions of art. It's a dance of curiosity, discovery, and dedication that empowers me to share the magic of my self-taught art with the world.
          </p>
        </div>
        
        <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src= '../images-yoof/image1.jpeg'
          alt="nasos"
        //   className="w-[90%] h-[80%] object-contain"
        />
      </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

 
export default Aboutuspage;