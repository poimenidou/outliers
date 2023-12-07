import "./App.css";
import { Link } from "react-scroll";
import Gamespage from "./sections/GamesPage";
import Drawingspage from "./sections/DrawingsPage";
import Countdownpage from "./sections/CountdownPage";
import Tripspage from "./sections/TripsPage";
import Yoofpage from "./sections/YoofPage";
import Aboutuspage from "./sections/AboutUsPage";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <div>
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="Countdown">
                CountDown
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Trips">
              Trips
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Games">
              Games
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Drawings">
              Drawings
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Yoof">
              Yoof
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="About Us">
              About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="Countdown" style={{boxShadow:" 0 0 10rem 10rem rgba(18,18,18,255) inset"}}><Countdownpage /></section>

      {/* <section >
        <div>
          <h5 style={{fontSize: "20px", margin:"0", padding:"0", textAlign: "center"}}>Until then though let's take a small tour down memory lane by sharing some fond memories</h5>
        </div>
       </section> */}

      <section id="Trips"><Tripspage /></section>
      <section id="Games" style={{ backgroundImage: "url(/images/hollow-knight.jpeg)",  backgroundSize: "cover", 
      backgroundRepeat: "no-repeat", boxShadow:" 0 0 10rem 10rem rgba(18,18,18,255) inset"}}><Gamespage /></section>
    
      {/* <section >
      <div>
        <h5 style={{paddingTop:"10rem", fontSize:"20px", textAlign: "center"}}> Let's now showcase some nice artworks from the past</h5>
      </div>
      </section> */}

      <section id="Drawings" style={{display:"initial"}}><Drawingspage /></section>

      {/* <section >
        <div>
          <h5 style={{paddingTop:"10rem", fontSize:"20px", textAlign: "center"}}> Our little yoof is always here to make our hearts warmer</h5>
        </div>
      </section> */}

      <section id="Yoof" style={{display:"initial"}}><Yoofpage /></section>

      {/* <section >
        <div>
          <p style={{fontSize: "20px", margin:"0", padding:"0", textAlign: "center"}}> A small introduction</p>
        </div>
      </section> */}

      <section id="About Us"><Aboutuspage /></section>
{/* 
      <section >
        <div>
          <p style={{fontSize: "20px", margin:"0", padding:"0", textAlign: "center"}}> That's about it, see ya</p>
        </div>
      </section> */}

      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}