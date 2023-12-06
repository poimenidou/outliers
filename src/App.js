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
      <section id="Countdown"><Countdownpage /></section>

      <section >
      <h5 style={{fontSize: "20px", margin:"0", padding:"0", textAlign: "center"}}>Until then though, let's take a small tour down memory lane..</h5>
      <h5 style={{fontSize:"20px", margin:"0", padding:"0", textAlign: "center"}}> Why not start by sharing some fond memories?</h5>
      </section>

      <section id="Trips"><Tripspage /></section>
      <section id="Games" style={{ backgroundImage: "url(/images/hollow-knight.jpeg)",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}><Gamespage /></section>
    
      <section >
      <h5 style={{paddingTop:"10rem", fontSize:"20px", textAlign: "center"}}> Let's showcase some nice artworks from the past while we are at it.</h5>
      </section>

      <section id="Drawings" style={{display:"initial"}}><Drawingspage /></section>

      <section >
      <h5 style={{paddingTop:"10rem", fontSize:"20px", textAlign: "center"}}> Our little yoof is here to make our hearts warmer everyday..</h5>
      </section>

      <section id="Yoof" style={{display:"initial"}}><Yoofpage /></section>

      <section >
      <p style={{fontSize: "20px", margin:"0", padding:"0", textAlign: "center"}}> I am afraid that this is it.. But! Before we go! </p>
      <p style={{fontSize: "20px", margin:"0", padding:"0", textAlign: "center"}}> Why don't we cringe everyone by adding a small about us section?</p>
      </section>

      <section id="About Us"><Aboutuspage /></section>
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}