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
  useTransform,
  MotionValue
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
      <section id="Trips"><Tripspage /></section>
      <section id="Games" style={{ backgroundImage: "url(/images/hollow-knight.jpeg)",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}><Gamespage /></section>
      <section id="Drawings" style={{display:"initial"}}><Drawingspage /></section>
      <section id="Yoof" style={{display:"initial"}}><Yoofpage /></section>
      <section id="About Us"><Aboutuspage /></section>
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}