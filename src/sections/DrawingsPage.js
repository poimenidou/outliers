import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref} style={{width: "300px", height: "400px", position: "relative", maxHeight: "90vh", background: "var(--white)", overflow: "hidden"}}>
        <img src={require("../images-drawings/image"+id+".jpeg")} style={{width: "300px", height: "400px"}} alt="A drawing" />
        <p>{'../images-drawings/image' + id + '.jpeg'}</p>
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
      {[1,2,3,4,5,6,7,8,9].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
  
  
  
  
  }
 
export default Yoofpage;

