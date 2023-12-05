import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

import image1 from '../images-drawings/image1.jpeg'
// import image2 from '../images-drawings/image2.jpg'
// import image3 from '../images-drawings/image3.jpeg'
// import image4 from '../images-drawings/image4.jpeg'
// import image5 from '../images-drawings/image5.jpg'
// import image6 from '../images-drawings/image6.jpeg'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref} style={{padding:"6rem"}}>
        <img src={image1} alt="A drawing" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

const Yoofpage = () => {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
  
  
  
  
  }
 
export default Yoofpage;

